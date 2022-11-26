if(!self.define){let e,t={};const r=(r,a)=>(r=new URL(r+".js",a).href,t[r]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=t,document.head.appendChild(e)}else e=r,importScripts(r),t()})).then((()=>{let e=t[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(a,i)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(t[s])return;let n={};const _=e=>r(e,s),d={module:{uri:s},exports:n,require:_};t[s]=Promise.all(a.map((e=>d[e]||_(e)))).then((e=>(i(...e),n)))}}define(["./comlink-9648aa2d","./xxhash-wasm-6423f291","./appearance-67ad7c3a"],(function(e,t,r){"use strict";let a=()=>{};const i=[],s=Math.floor(4294967296*Math.random());class n{constructor(e,t,r){this.frame_callbacks=e,this.set_rev_data=t,this.xxh=r,this.running_atoms=[],this.running_size=[0,0,0],this.running_clients=new Set,this.running_client_mobs=new Map,this.running_client_screens=new Map,this.duration=0,this.frames=[],this.last_progress=-1,this.appearance_id_cache=new Map,this.appearance_cache=[],this.resource_loads=[],this.current_frame={time:0,forward:{}},self.demo_parser=this}update_progress(e,t=!1){this.progress_callback&&(e<this.last_progress+.005&&!t||(this.last_progress=e,this.progress_callback(e,t)))}push_frame(e){var t,r;if(null==e&&(e=this.current_frame.time),e<this.current_frame.time)throw new Error(`Can't go back in time, dummy. Old time is ${this.current_frame.time}, attempted to go back to ${e}`);if(!function(e){for(let t of Object.keys(e.forward))return!1;return!e.chat}(this.current_frame)){let e=Object.assign(Object.assign({},this.current_frame),{backward:{}});if(e.forward.set_appearance){e.backward.set_appearance=new Map;for(let[t,r]of e.forward.set_appearance){let a=this.get_running_atom(t);e.backward.set_appearance.set(t,a.appearance),a.appearance=r}}if(e.forward.set_loc){e.backward.set_loc=new Map,e.backward.set_last_loc||(e.backward.set_last_loc=new Map),e.backward.set_loc_change_time||(e.backward.set_loc_change_time=new Map);for(let[t,r]of e.forward.set_loc){let a=this.get_running_atom(t);e.backward.set_loc.set(t,a.loc),e.backward.set_last_loc.set(t,a.last_loc),e.backward.set_loc_change_time.set(t,a.loc_change_time),a.loc_change_time=this.current_frame.time,a.last_loc=a.loc,a.loc=r}}if(e.forward.set_vis_contents){e.backward.set_vis_contents=new Map;for(let[t,r]of e.forward.set_vis_contents){let a=this.get_running_atom(t);e.backward.set_vis_contents.set(t,a.vis_contents),a.vis_contents=r}}if(e.forward.set_client_status){e.backward.set_client_status=new Map;for(let[t,r]of e.forward.set_client_status)e.backward.set_client_status.set(t,this.running_clients.has(t)),r?this.running_clients.add(t):this.running_clients.delete(t)}if(e.forward.set_mob){e.backward.set_mob=new Map;for(let[r,a]of e.forward.set_mob)e.backward.set_mob.set(r,null!==(t=this.running_client_mobs.get(r))&&void 0!==t?t:0),this.running_client_mobs.set(r,a)}if(e.forward.set_mobextras){e.backward.set_mobextras=new Map;for(let[t,r]of e.forward.set_mobextras){let a=this.get_running_atom(t);e.backward.set_mobextras.set(t,{see_invisible:a.see_invisible,sight:a.sight}),a.see_invisible=r.see_invisible,a.sight=r.sight}}if(e.forward.set_client_screen){e.backward.set_client_screen=new Map;for(let[t,a]of e.forward.set_client_screen)e.backward.set_client_screen.set(t,null!==(r=this.running_client_screens.get(t))&&void 0!==r?r:[]),this.running_client_screens.set(t,a)}if(e.forward.set_animation){e.backward.set_animation=new Map;for(let[t,r]of e.forward.set_animation){let a=this.get_running_atom(t);e.backward.set_animation.set(t,a.animation),a.animation=r}}e.backward.client_del_images=e.forward.client_add_images,e.backward.client_add_images=e.forward.client_del_images,e.forward.resize&&(e.backward.resize=this.running_size,this.running_size=e.forward.resize),this.frames.push(e)}this.duration=this.current_frame.time,this.current_frame={time:e,forward:{}};for(let e of this.frame_callbacks)e();this.frame_callbacks.length=0}get_running_atom(e){let t=(4278190080&e)>>>24,r=16777215&e,a=this.running_atoms[t];a||(a=this.running_atoms[t]=[]);let s=a[r];return s||(s=a[r]={appearance:null,loc:0,loc_change_time:0,last_loc:0,vis_contents:i,animation:null,sight:0,see_invisible:0}),s}set_appearance(e,t){this.current_frame.forward.set_appearance||(this.current_frame.forward.set_appearance=new Map),this.current_frame.forward.set_appearance.set(e,t)}set_loc(e,t){this.current_frame.forward.set_loc||(this.current_frame.forward.set_loc=new Map),this.current_frame.forward.set_loc.set(e,t)}set_client_status(e,t){this.current_frame.forward.set_client_status||(this.current_frame.forward.set_client_status=new Map),this.current_frame.forward.set_client_status.set(e,t)}set_mob(e,t){this.current_frame.forward.set_mob||(this.current_frame.forward.set_mob=new Map),this.current_frame.forward.set_mob.set(e,t)}set_client_screen(e,t){this.current_frame.forward.set_client_screen||(this.current_frame.forward.set_client_screen=new Map),this.current_frame.forward.set_client_screen.set(e,t)}set_animation(e,t){this.current_frame.forward.set_animation||(this.current_frame.forward.set_animation=new Map),this.current_frame.forward.set_animation.set(e,t)}resize(e,t,r){this.push_frame(),this.current_frame.forward.resize=[e,t,r]}add_chat(e){this.current_frame.chat||(this.current_frame.chat=[]),this.current_frame.chat.push(e)}set_vis_contents(e,t){0==t.length&&(t=i),this.current_frame.forward.set_vis_contents||(this.current_frame.forward.set_vis_contents=new Map),this.current_frame.forward.set_vis_contents.set(e,t)}set_mobextras(e,t){this.current_frame.forward.set_mobextras||(this.current_frame.forward.set_mobextras=new Map),this.current_frame.forward.set_mobextras.set(e,t)}appearance_id(e){if(null==e)return null;let t=JSON.stringify(Object.values(e)),r=this.xxh.h32(t,s),a=this.appearance_id_cache.get(r);return null!=a||(a=this.appearance_cache.length,this.appearance_id_cache.set(r,a),this.appearance_cache.push(e)),a}appearance_from_id(e){return null==e?null:this.appearance_cache[e]}}const _=new TextDecoder;class d extends n{constructor(){super(...arguments),this.read_buffer=new Uint8Array(65536),this.read_buffer_end=0,this.file_index=0,this.load_end=0,this.has_read_header=!1,this.chunk_usage_stats=[],this.num_empty_updates=0,this.client_id_to_ckey=[],this.copy_bufs=[],this.appearance_refs=[],this.filter_refs=[],this.string_cache=[]}async handle_data(e){if(this.read_buffer_end+e.length>this.read_buffer.length){let t=this.read_buffer.length;for(;this.read_buffer_end+e.length>t;)t*=2;let r=new Uint8Array(t);r.set(this.read_buffer),this.read_buffer=r}this.read_buffer.set(e,this.read_buffer_end),this.read_buffer_end+=e.length;let t=0;if(!this.has_read_header){if(this.read_buffer_end<3)return;if(203!=this.read_buffer[0])throw new Error("Invalid demo header");let e=this.read_buffer[1]|this.read_buffer[2]<<8;if(e>0||e<0)throw new Error(`Version ${e} demo files are incompatible with this player`);let r=3;for(;this.read_buffer_end>r&&0!=this.read_buffer[r];)r++;if(r+4>=this.read_buffer_end)return;let a=_.decode(this.read_buffer.subarray(3,r));"{"==a[0]?this.set_rev_data(JSON.parse(a)):this.set_rev_data({commit:a,repo:"yogstation13/Yogstation"}),this.load_end=this.read_buffer[r+1]+(this.read_buffer[r+2]<<8)+(this.read_buffer[r+3]<<16)+(this.read_buffer[r+4]<<24),this.has_read_header=!0,t=r+5,this.file_index=t}for(;t<this.read_buffer_end;){let e=this.read_buffer[t],r=t+2,a=0;for(let e=t+1;e<this.read_buffer_end;e++){r=e+1;let t=this.read_buffer[e];if(a<<=7,a+=127&t,!(128&t))break}if(r+a>=this.read_buffer_end)break;this.file_index+=r-t;let i=this.handle_chunk(this.read_buffer.subarray(r,r+a),e);if(this.file_index+=a,t=r+a,i&&await new Promise((e=>setTimeout(e,16))),this.load_end){let e=this.file_index/this.load_end;this.update_progress(e,e>=1)}}this.read_buffer.set(this.read_buffer.subarray(t)),this.read_buffer_end-=t}handle_chunk(e,t){var r,a;let i=new l(e,this.file_index,t);this.chunk_usage_stats[t]=(null!==(r=this.chunk_usage_stats[t])&&void 0!==r?r:0)+e.length,this.current_frame.size_stats||(this.current_frame.size_stats=[]),this.current_frame.size_stats[t]=(null!==(a=this.current_frame.size_stats[t])&&void 0!==a?a:0)+e.length;try{switch(t){case 0:let r=i.read_float();this.push_frame(r),this.load_end&&(this.load_end=0,this.update_progress(1,!0));break;case 1:this.resize(i.read_uint16(),i.read_uint16(),i.read_uint16());break;case 2:case 3:case 4:case 5:if(this.handle_atom_data(i,t),this.load_end)return!0;break;case 7:this.handle_animate(i);break;case 8:this.handle_chat(i);break;case 9:this.handle_client(i);break;case 10:this.resource_loads.push({id:i.read_uint32(),blob:new Blob([i.data.subarray(i.i)])});break;case 11:this.handle_sound(i);break;default:console.warn(`Unknown chunk 0x${t.toString(16)}, length ${e.length} at 0x${this.file_index.toString(16)}`)}}catch(e){console.error(i.toString()),console.error(e)}return!1}convert_relative_ref(e,t){return 2147483648&e&&(e=2130706432&e|(16777215&e)+(16777215&t)&16777215),e}handle_sound(e){let t=e.read_uint8(),a=[];if(4&t&&a.push(void 0),2&t&&a.push("world"),1&t){let t=e.read_vlq();for(let r=0;r<t;r++){let t=this.client_id_to_ckey[e.read_uint16()];t&&a.push(t)}}let i=[],s=e.read_vlq();for(let t=0;t<s;t++){let t=this.parse_resource_id(e);t&&i.push(t)}let n=e.read_uint8(),_=0;8&n&&(_|=r.SOUND_MUTE),16&n&&(_|=r.SOUND_PAUSED),32&n&&(_|=r.SOUND_STREAM),64&n&&(_|=r.SOUND_UPDATE);let d={recipients:a,resources:i,repeat:3&n,wait:!!(4&n),status:_,channel:e.read_uint16(),volume:e.read_uint8(),frequency:e.read_float(),pan:e.read_float(),x:0,y:0,z:0,falloff:1};128&n&&(d.x=e.read_float(),d.y=e.read_float(),d.z=e.read_float(),d.falloff=e.read_float()),d.recipients.length&&(this.current_frame.sounds||(this.current_frame.sounds=[]),this.current_frame.sounds.push(d))}handle_chat(e){let t=e.read_uint8(),r=[];if(4&t&&r.push(void 0),2&t&&r.push("world"),1&t){let t=e.read_vlq();for(let a=0;a<t;a++){let t=this.client_id_to_ckey[e.read_uint16()];t&&r.push(t)}}if(8&t){let t=e.read_vlq();for(let r=0;r<t;r++)e.read_uint32()}let a=this.parse_string(e);this.add_chat({clients:r,message:16&t?{text:a}:{html:a}})}handle_client(e){var t,r,a,i,s;let n=e.read_uint16(),_=this.client_id_to_ckey[n],d=e.read_uint8();if(2&d&&null!=_&&(this.set_client_status(_,!1),this.set_mob(_,0),this.set_client_screen(_,[]),this.client_id_to_ckey[n]=void 0),1&d&&(_=this.parse_string(e),this.parse_string(e),this.set_client_status(_,!0),this.client_id_to_ckey[n]=_),4&d){let t=e.read_uint32();_&&this.set_mob(_,t)}if(8&d&&(e.read_uint8(),e.read_uint8()),16&d&&e.read_uint32(),32&d){let n=_&&null!==(a=null!==(r=null===(t=this.current_frame.forward.set_client_screen)||void 0===t?void 0:t.get(_))&&void 0!==r?r:this.running_client_screens.get(_))&&void 0!==a?a:[],d=new Set(n),l=e.read_vlq();for(let t=0;t<l;t++){let t=e.read_uint32();d.delete(t)}let o=e.read_vlq();for(let t=0;t<o;t++){let t=e.read_uint32();d.add(t)}_&&(o||l)&&this.set_client_screen(_,[...d]);let c=_?null===(i=this.current_frame.forward.client_del_images)||void 0===i?void 0:i.get(_):void 0,h=_?null===(s=this.current_frame.forward.client_add_images)||void 0===s?void 0:s.get(_):void 0,u=e.read_vlq();for(let t=0;t<u;t++){let t=e.read_uint32();c||(c=new Set),c.add(t),null==h||h.delete(t)}let f=e.read_vlq();for(let t=0;t<f;t++){let t=e.read_uint32();h||(h=new Set),h.add(t),null==c||c.delete(t)}_&&(this.current_frame.forward.client_add_images||(this.current_frame.forward.client_add_images=new Map),this.current_frame.forward.client_del_images||(this.current_frame.forward.client_del_images=new Map),h&&this.current_frame.forward.client_add_images.set(_,h),c&&this.current_frame.forward.client_del_images.set(_,c))}}handle_animate(e){for(var t,a,i,s,n,_,d;!e.reached_end();){let l=e.read_uint32(),o=null!==(t=this.parse_appearance(e))&&void 0!==t?t:this.appearance_id(r.ReaderAppearance.base),c=e.read_uint8(),h=e.read_uint16(),u=e.read_vlq(),f={base_appearance:o,end_appearance:o,start_time:this.current_frame.time,end_time:this.current_frame.time,duration:0,chain_end_time:this.current_frame.time,chain_parent:null,frames:[],loop:h,parallel:!!(2&c),end_now:!!(1&c)};!f.parallel&&f.end_now||(f.chain_parent=null!==(s=null!==(i=null===(a=this.current_frame.forward.set_animation)||void 0===a?void 0:a.get(l))&&void 0!==i?i:this.get_running_atom(l).animation)&&void 0!==s?s:null,f.chain_parent&&f.chain_parent.chain_end_time<f.start_time&&(f.chain_parent=null),f.chain_parent&&(f.chain_end_time=Math.max(f.end_time,f.chain_parent.chain_end_time)));for(let t=0;t<u;t++){let t={appearance:null!==(n=this.parse_appearance(e))&&void 0!==n?n:f.end_appearance,time:e.read_float(),easing:e.read_uint8(),linear_transform:!!(1&e.read_uint8())};f.frames.push(t),f.end_appearance=t.appearance,f.duration+=t.time}f.frames.length<=1&&(f.loop=1),f.end_time=h>0?f.start_time+f.duration*f.loop:1/0,f.chain_end_time=Math.max(f.end_time,f.chain_end_time);let p=null!==(d=null===(_=this.current_frame.forward.set_appearance)||void 0===_?void 0:_.get(l))&&void 0!==d?d:this.get_running_atom(l).appearance;0==f.frames.length||null==p||f.duration<=0?this.set_animation(l,null):this.set_animation(l,f)}}handle_atom_data(e,t){let r=0;switch(t){case 2:r=16777216;break;case 3:r=33554432;break;case 4:r=50331648;break;case 5:r=218103808;break;default:throw new Error("Invalid type for handle_atom_data")}let a=this.copy_bufs[r>>24];a||(a=this.copy_bufs[r>>24]={loc:0,vis_contents:[]});let i=0;for(;;){let t=e.read_vlq();if(0==t&&0!=i)break;i+=t;let s=e.read_vlq();for(let t=0;t<s;t++){let t=i|r,s=e.read_uint8();if(s||this.num_empty_updates++,128&s)throw new Error("Invalid atom update flags");if(1&s){let r=this.parse_appearance(e);this.set_appearance(t,r)}if(2&s){let r=this.convert_relative_ref(a.loc=e.read_uint32(),i);this.set_loc(t,r)}if(4&s){let r=[],a=e.read_vlq();for(let t=0;t<a;t++)r.push(this.convert_relative_ref(e.read_uint32(),i));this.set_vis_contents(t,r)}if(8&s&&(e.read_int16(),e.read_int16()),64&s&&this.set_mobextras(t,{sight:e.read_uint16(),see_invisible:e.read_uint8()}),16&s){let e=this.convert_relative_ref(a.loc,i);this.set_loc(t,e)}i++,this.load_end&&this.update_progress(Math.min(1,(e.i+e.start_abs_offset)/this.load_end),!1)}}}parse_appearance(e){let t=e.read_int32(),a=16777215&t;if(4261412864&t)throw new Error("Bad bits set in appearance data");if(16777216&t){if(65535==a)throw new Error("Non-null 0xFFFF(NONE) appearance");let t=Object.assign({},r.ReaderAppearance.base),i=e.read_uint32();if(t.appearance_flags=e.read_uint16(),t.dir=[2,1,4,8,6,10,5,9][7&i],t.opacity=!!(8&i),t.density=!!(16&i),t.dir_override=!!(128&i),256&i&&(t.name=this.parse_string(e)),512&i&&this.parse_string(e),1024&i&&(t.screen_loc=this.parse_string(e)),t.icon=this.parse_resource_id(e),t.icon_state=this.parse_string(e),2048&i&&(t.maptext={maptext:this.parse_string(e),x:e.read_int16(),y:e.read_int16(),width:e.read_int16(),height:e.read_int16()}),4096&i){let r=e.read_vlq(),a=[];for(let t=0;t<r;t++){let t=this.parse_appearance(e);null!=t&&a.push(t)}a.length&&(t.overlays=a);let i=e.read_vlq(),s=[];for(let t=0;t<i;t++){let t=this.parse_appearance(e);null!=t&&s.push(t)}s.length&&(t.underlays=s)}if(16384&i&&(t.invisibility=e.read_uint8()),65536&i&&(t.pixel_x=e.read_int16(),t.pixel_y=e.read_int16()),131072&i&&(t.pixel_w=e.read_int16(),t.pixel_z=e.read_int16()),32768&i&&(t.glide_size=e.read_float()),t.layer=8192&i?e.read_float():3,t.plane=262144&i?e.read_int16():-32767,524288&i){let r=[1,0,0,0,1,0];t.transform=r;for(let t=0;t<6;t++)r[t]=e.read_float()}if(1048576&i&&(t.color_alpha=e.read_uint32()),2097152&i&&(t.color_matrix=e.read_color_matrix()),t.animate_movement=i>>>22&3,t.blend_mode=i>>>24&7,t.mouse_opacity=i>>>27&3,536870912&i){let r=[],a=e.read_vlq();for(let t=0;t<a;t++){let t=this.parse_filter(e);t&&r.push(t)}r.length&&(t.filters=r)}return t.override=!!(1073741824&i),2147483648&i&&(t.vis_flags=e.read_uint8()),15!=t.plane||t.screen_loc||(t.blend_mode=4),this.appearance_refs[a]=this.appearance_id(t)}{if(65535==a)return null;let e=this.appearance_refs[a];if(null==e)throw new Error(`Reference to undefined appearance 0x${a.toString(16)}`);return e}}parse_filter(e){let t=e.read_int32(),a=16777215&t;if(4261412864&t)throw new Error("Bad bits set in filter data");if(16777216&t){if(65535==a)throw new Error("Non-null 0xFFFF(NONE) filter");let t=e.read_uint8(),i=e.read_uint8(),s=null;switch(t){case r.FilterType.Blur:s={type:t,id:i,x:e.read_float(),y:e.read_float(),size:e.read_float()};break;case r.FilterType.Outline:s={type:t,id:i,size:e.read_float(),color:e.read_uint32(),flags:e.read_uint8()};break;case r.FilterType.DropShadow:s={type:t,id:i,x:e.read_float(),y:e.read_float(),size:e.read_float(),offset:e.read_float(),color:e.read_uint32()};break;case r.FilterType.MotionBlur:s={type:t,id:i,x:e.read_float(),y:e.read_float()};break;case r.FilterType.Wave:s={type:t,id:i,x:e.read_float(),y:e.read_float(),size:e.read_float(),offset:e.read_float(),flags:e.read_uint8()};break;case r.FilterType.Ripple:s={type:t,id:i,x:e.read_float(),y:e.read_float(),size:e.read_float(),repeat:e.read_float(),radius:e.read_float(),falloff:e.read_float(),flags:e.read_uint8()};break;case r.FilterType.Alpha:s={type:t,id:i,x:e.read_float(),y:e.read_float(),icon:this.parse_resource_id(e),render_source:e.read_cstring()};break;case r.FilterType.Displace:s={type:t,id:i,x:e.read_float(),y:e.read_float(),size:e.read_float(),icon:this.parse_resource_id(e),render_source:e.read_cstring()};break;case r.FilterType.Color:s={type:t,id:i,color:e.read_color_matrix(),space:e.read_uint8()};break;case r.FilterType.RadialBlur:case r.FilterType.AngularBlur:s={type:t,id:i,x:e.read_float(),y:e.read_float(),size:e.read_float()};break;case r.FilterType.Rays:s={type:t,id:i,x:e.read_float(),y:e.read_float(),size:e.read_float(),color:e.read_uint32(),offset:e.read_float(),density:e.read_float(),threshold:e.read_float(),factor:e.read_float(),flags:e.read_uint8()};break;case r.FilterType.Layer:s={type:t,id:i,x:e.read_float(),y:e.read_float(),icon:this.parse_resource_id(e),render_source:e.read_cstring(),flags:e.read_uint8(),color:e.read_color_matrix(),transform:[e.read_float(),e.read_float(),e.read_float(),e.read_float(),e.read_float(),e.read_float()],blend_mode:e.read_uint8()};break;case r.FilterType.Bloom:s={type:t,id:i,color_alpha:e.read_uint32(),size:e.read_float(),offset:e.read_float()}}return this.filter_refs[a]=s}{if(65535==a)return null;let e=this.filter_refs[a];if(void 0===e)throw new Error(`Reference to undefined filter 0x${a.toString(16)}`);return e}}parse_string(e){let t=e.read_uint8(),r=t>>1&3,a=0;for(let t=0;t<r;t++)a<<=8,a+=e.read_uint8();if(1&t){let t=e.i;for(;0!=e.read_uint8(););return this.string_cache[a]=_.decode(e.data.subarray(t,e.i-1))}if(a){let e=this.string_cache[a];if(null==e)throw new Error(`Reference to undefined string 0x${a.toString(16)}`);return e}return""}parse_resource_id(e){let t=e.read_uint8(),r=t>>1&3;if(!r)return null;let a=0;for(let t=0;t<r;t++)a<<=8,a+=e.read_uint8();if(1&t){let t=e.i;for(;0!=e.read_uint8(););this.resource_loads.push({id:a,path:_.decode(e.data.subarray(t,e.i-1))})}return a}}class l{constructor(e,t=0,r=null){this.data=e,this.start_abs_offset=t,this.chunk_id=r,this.i=0,this.dv=new DataView(e.buffer,e.byteOffset,e.byteLength)}reached_end(){return this.i>=this.dv.byteLength}read_vlq(){let e=0;for(;;){if(e<<=7,this.i>=this.data.length)throw new Error("Reached end of data!");let t=this.data[this.i];if(e+=127&t,this.i++,!(128&t))break}return e}read_float(){let e=this.dv.getFloat32(this.i,!0);return this.i+=4,e}read_int32(){let e=this.dv.getInt32(this.i,!0);return this.i+=4,e}read_uint32(){let e=this.dv.getUint32(this.i,!0);return this.i+=4,e}read_int16(){let e=this.dv.getInt16(this.i,!0);return this.i+=2,e}read_uint16(){let e=this.dv.getUint16(this.i,!0);return this.i+=2,e}read_uint8(){let e=this.data[this.i];return this.i++,e}read_cstring(){let e=this.i;for(;0!=this.read_uint8(););return _.decode(this.data.subarray(e,this.i-1))}read_color_matrix(){let e=this.read_uint8(),t=new Float32Array(20),r=1&e?()=>this.read_float():()=>this.read_uint8()/255;return t[0]=r(),128&e?(t[1]=r(),t[2]=r()):t[2]=t[1]=t[0],64&e&&(t[3]=r()),t[4]=r(),128&e?(t[5]=r(),t[6]=r()):t[6]=t[5]=t[4],64&e&&(t[7]=r()),t[8]=r(),128&e?(t[9]=r(),t[10]=r()):t[10]=t[9]=t[8],64&e&&(t[11]=r()),16&e&&(t[12]=r(),128&e?(t[13]=r(),t[14]=r()):t[14]=t[13]=t[12]),32&e&&(t[15]=r()),2&e&&(t[16]=r(),t[17]=r(),t[18]=r()),4&e?t[19]=r():8&e&&(t[19]=1),t}toString(){return`(0x${this.start_abs_offset.toString(16)}:0x${this.i.toString(16)} (0x${(this.start_abs_offset+this.i).toString(16)}), chunk ${this.chunk_id})`}}function o(e,t,r){return"number"==typeof e?65535==(16777215&e)?0:e:null==e?0:16777216|e[0]-1+t*(e[1]-1+r*(e[2]-1))}class c extends n{constructor(){super(...arguments),this.text_decoder=new TextDecoder,this.partial_line="",this.version=-1,this.line_counter=1,this.maxx=0,this.maxy=0,this.maxz=0,this.turf_levels_loaded=0,this.obj_levels_loaded=0,this.null_loaded=!0,this.last_chat="",this.icon_cache=[],this.icon_state_caches=[],this.name_cache=[],this.resource_id_cache=new Map,this.resource_id_counter=0}async handle_data(e){this.partial_line+=this.text_decoder.decode(e,{stream:!0});let t=this.partial_line.split(/\r?\n/g);this.partial_line=t[t.length-1],t.length--;for(let e of t){this.handle_line(e)&&await new Promise((e=>setTimeout(e,16)))}}handle_line(e){var t,r,a,i;if(this.version<0){if(!e.startsWith("demo version "))throw new Error("No version");let t=+e.split(" ")[2];if(!(t>=1&&t<=1))throw new Error("Unsupported demo version "+t);return this.version=t,this.line_counter++,!1}if(this.turf_levels_loaded<this.maxz)return this.handle_turf_zlevel(e,++this.turf_levels_loaded),this.line_counter++,this.push_frame(),!0;if(this.obj_levels_loaded<this.maxz)return this.handle_obj_zlevel(e,++this.obj_levels_loaded),this.line_counter++,this.push_frame(),!0;if(!this.null_loaded&&this.maxz)return this.handle_obj_zlevel(e,null),this.null_loaded=!0,this.line_counter++,this.push_frame(),this.update_progress(1,!0),!0;let s=/^([a-z]+) /i.exec(e);if(!s)throw new Error("Could not parse line: "+e);let n=s[1],_=e.substring(n.length+1),d=new h(_,this.line_counter++,n.length+1);if("commit"==n)console.log("Commit "+_),this.set_rev_data({commit:_,repo:"yogstation13/Yogstation"});else if("init"==n)[this.maxx,this.maxy,this.maxz]=_.split(" ").map((e=>parseInt(e))),this.resize(this.maxx,this.maxy,this.maxz),this.null_loaded=!1;else if("time"==n)this.push_frame(+_);else if("new"==n)for(;d.idx<d.txt.length;){let e=d.read_ref();d.read_expected_char(" ");let t=o(d.read_loc(null),this.maxx,this.maxy);d.read_expected_char(" ");let r=this.read_appearance(d);this.set_appearance(e,this.appearance_id(r)),this.set_loc(e,t),","==d.curr()&&d.idx++}else if("del"==n)for(;d.idx<d.txt.length;){let e=d.read_ref();","==d.curr()&&d.idx++,this.set_appearance(e,null),this.set_loc(e,0)}else if("update"==n)for(;d.idx<d.txt.length;){let e=d.read_ref();d.read_expected_char(" ");let i=null!==(r=null===(t=this.current_frame.forward.set_loc)||void 0===t?void 0:t.get(e))&&void 0!==r?r:this.get_running_atom(e).loc,s=o(d.read_loc(i),this.maxx,this.maxy);d.read_expected_char(" ");let n=null===(a=this.current_frame.forward.set_appearance)||void 0===a?void 0:a.get(e);void 0===n&&(n=this.get_running_atom(e).appearance);let _=this.appearance_id(this.read_appearance(d,this.appearance_from_id(n)));i!=s&&this.set_loc(e,s),n!=_&&this.set_appearance(e,_),","==d.curr()&&d.idx++}else if("turf"==n)for(;d.idx<d.txt.length;){d.read_expected_char("(");let e=o(d.read_loc(null),this.maxx,this.maxy);d.read_expected_char(")"),d.read_expected_char("=");let t=null===(i=this.current_frame.forward.set_appearance)||void 0===i?void 0:i.get(e);void 0===t&&(t=this.get_running_atom(e).appearance);let r=this.appearance_id(this.read_appearance(d,this.appearance_from_id(t)));this.set_appearance(e,r),","==d.curr()&&d.idx++}else if("login"==n)this.set_client_status(_,!0);else if("logout"==n)this.set_client_status(_,!1),this.set_mob(_,0);else if("setmob"==n){let e=_.indexOf(" ");if(e<0)throw new Error("Setmob needs ckey and mob reference");d.idx=e+1;let t=_.substring(0,e),r=d.read_ref();this.set_mob(t,r)}else if("chat"==n){let e=/^([^ ]+) (.+)$/.exec(_);if(!e)throw new Error("Malformed chat");let t=e[1].split(","),r=e[2];"="==r?r=this.last_chat:(r=JSON.parse(r),this.last_chat=r),this.add_chat({clients:t,message:r})}else console.warn("Unrecognized command "+n);return!1}handle_turf_zlevel(e,t){let r=new h(e,this.line_counter,0),a=16777216+(t-1)*this.maxx*this.maxy,i=0,s=null,n=!1,_=this.maxx*this.maxy;for(;r.idx<r.txt.length;){if("0123456789".includes(r.curr())){let e=r.read_number();for(let r=1;r<e;r++)n&&(s=this.appearance_id(this.get_space_appearance(i%this.maxx+1,Math.floor(i/this.maxx)+1,t))),this.set_appearance(a+i++,s)}else"s"==r.curr()?(r.idx++,s=this.appearance_id(this.get_space_appearance(i%this.maxx+1,Math.floor(i/this.maxx)+1,t)),n=!0):(s=this.appearance_id(this.read_appearance(r,this.appearance_from_id(s),!0)),n=!1),this.set_appearance(a+i++,s);if(this.update_progress((t-1+(r.idx+1)/r.txt.length)/this.maxz*.4,!1),i>_)throw new Error(`Exceeded z-level size at ${r}`);","==r.curr()&&r.idx++}if(i!=this.maxx*this.maxy)throw new Error(`Z-level of size ${this.maxx}x${this.maxy} should have ${this.maxx*this.maxy} turfs, has ${i} turfs`)}handle_obj_zlevel(e,t){let r=new h(e,this.line_counter,0),a=null===t?0:16777216+(t-1)*this.maxx*this.maxy,i=0;for(;r.idx<r.txt.length;){if("0123456789".includes(r.curr())?i+=r.read_number():this.read_init_obj(r,a&&a+i),null!=t?this.update_progress(.4+(t-1+(r.idx+1)/r.txt.length)/this.maxz*.4,!1):this.update_progress(.8+(r.idx+1)/r.txt.length*.2,!1),i>this.maxx*this.maxy)throw new Error(`Exceeded z-level size at ${r}`);","==r.curr()&&r.idx++}}read_init_obj(e,t){let r=e.read_ref();this.set_loc(r,t),e.read_expected_char("=");let a=this.read_appearance(e);if(this.set_appearance(r,this.appearance_id(a)),"("==e.curr()){for(e.idx++;")"!=e.curr();){if(this.read_init_obj(e,r),!"),".includes(e.txt[e.idx]))throw new Error(`Expected ) or , at ${e}, found ${e.curr()} instead`);","==e.curr()&&e.idx++}e.idx++}}get_icon_resource(e){if(null==e)return null;let t=this.resource_id_cache.get(e);return null!=t||(t=++this.resource_id_counter,this.resource_id_cache.set(e,t),e&&this.resource_loads.push({id:t,path:e})),t}get_space_appearance(e=0,t=0,a=0){return Object.assign(Object.assign({},r.ReaderAppearance.base),{icon:this.get_icon_resource("icons/turf/space.dmi"),icon_state:""+((e+t^~(e*t)+a)%25+25)%25,name:"space",layer:1.8,plane:-95})}read_appearance(e,t=null,a=!0){if("n"==e.curr())return e.idx++,null;if("="==e.curr())return e.idx++,t;if("s"==e.curr()||"t"==e.curr()){let t=Object.assign(Object.assign({},r.ReaderAppearance.base),{icon:this.get_icon_resource("icons/turf/space.dmi"),icon_state:"1",name:"space",layer:1.8,plane:-95});return"t"==e.curr()&&(e.idx++,t.dir=+e.curr(),1==t.dir?t.transform=[-1,0,0,0,-1,0]:4==t.dir?t.transform=[0,-1,0,1,0,0]:8==t.dir&&(t.transform=[0,1,0,-1,0,0]),t.icon_state="speedspace_ns_?"),e.idx++,t}let i,s;if("~"==e.curr()?(e.idx++,t?(i=Object.assign({},t),a||(i.overlays=[],i.underlays=[])):(console.warn(`Comparison to null at ${e}`),i=Object.assign({},r.ReaderAppearance.base))):i=Object.assign({},r.ReaderAppearance.base),e.read_expected_char("{"),"}"==e.curr())return e.idx++,i;if(";"!=e.curr())if('"'==e.curr())i.icon=this.get_icon_resource(e.read_string()),this.icon_cache.push(i.icon),s=[],this.icon_state_caches.push(s);else if("n"==e.curr())e.idx+=4,i.icon=null,this.icon_cache.push(i.icon),s=[],this.icon_state_caches.push(s);else{let t=e.read_number();i.icon=this.icon_cache[t-1],s=this.icon_state_caches[t-1]}if(e.read_next_or_end())return i;if(";"!=e.curr()){if(!s)throw console.error(this.icon_cache),console.error(s),new Error(`Unknown icon at ${e}`);if('"'==e.curr())i.icon_state=e.read_string(),s.push(i.icon_state);else if("n"==e.curr())e.idx+=4,i.icon_state=null,s.push(i.icon_state);else{let t=e.read_number();i.icon_state=s[t-1]}}if(e.read_next_or_end())return i;if(";"!=e.curr()&&('"'==e.curr()?(i.name=e.read_string(),this.name_cache.push(i.name)):"n"==e.curr()?(e.idx+=4,i.name=null,this.name_cache.push(i.name)):i.name=this.name_cache[e.read_number()-1]),e.read_next_or_end())return i;if(";"!=e.curr()&&(i.appearance_flags=e.read_number()),e.read_next_or_end())return i;if(";"!=e.curr()&&(i.layer=e.read_number()),e.read_next_or_end())return i;if(";"!=e.curr()&&(i.plane=e.read_number(),15==i.plane?i.blend_mode=4:i.blend_mode=0),e.read_next_or_end())return i;if(";"!=e.curr()&&(i.dir=e.read_number()),0==i.dir&&(i.dir_override=!1),e.read_next_or_end())return i;if(";"!=e.curr())if("w"==e.curr())i.color_alpha=16777215|i.color_alpha,e.idx++;else if("#"==e.curr()){let t=e.txt.substring(e.idx+5,e.idx+7)+e.txt.substring(e.idx+3,e.idx+5)+e.txt.substring(e.idx+1,e.idx+3);i.color_alpha=parseInt(t,16)|4278190080&i.color_alpha,e.idx+=7}else{let t=new Float32Array(20),r=0;for(;"-.0123456789".includes(e.curr());)t[r++]=e.read_number()/255,","==e.curr()&&e.idx++;i.color_matrix=t}if(e.read_next_or_end())return i;if(";"!=e.curr()&&(i.color_alpha=16777215&i.color_alpha|Math.min(255,Math.max(0,e.read_number()))<<24),e.read_next_or_end())return i;if(";"!=e.curr()&&(i.pixel_x=e.read_number()),e.read_next_or_end())return i;if(";"!=e.curr()&&(i.pixel_y=e.read_number()),e.read_next_or_end())return i;if(";"!=e.curr()&&(i.blend_mode=e.read_number()),e.read_next_or_end())return i;if(";"!=e.curr())if("i"==e.curr())i.transform=r.ReaderAppearance.base.transform,e.idx++;else{i.transform=[1,0,0,0,1,0];let t=0;for(;"-.0123456789".includes(e.curr());)i.transform[t++]=e.read_number(),","==e.curr()&&e.idx++}if(e.read_next_or_end())return i;if(";"!=e.curr()&&(i.invisibility=e.read_number()),e.read_next_or_end())return i;if(";"!=e.curr()&&(i.pixel_w=e.read_number()),e.read_next_or_end())return i;if(";"!=e.curr()&&(i.pixel_z=e.read_number()),e.read_next_or_end())return i;if("["==e.curr()){for(i.overlays=[];"[,".includes(e.curr())&&(e.idx++,"]"!=e.curr());){let t=this.read_appearance(e,i,!1);t&&i.overlays.push(this.appearance_id(t))}if("["!=e.curr()||i.overlays.length||e.idx++,"]"!=e.curr())throw new Error(`Expected ] or , at ${e}, found ${e.curr()} instead`);e.idx++}if(e.read_next_or_end())return i;if("["==e.curr()){for(i.underlays=[];"[,".includes(e.curr())&&(e.idx++,"]"!=e.curr());){let t=this.read_appearance(e,i,!1);t&&i.underlays.push(this.appearance_id(t))}if("["!=e.curr()||i.underlays.length||e.idx++,"]"!=e.curr())throw new Error(`Expected ] or , at ${e}, found ${e.curr()} instead`);e.idx++}return e.read_expected_char("}"),i}}class h{constructor(e,t,r=0){this.txt=e,this.line=t,this.offset=r,this.idx=0}curr(){return this.txt[this.idx]}toString(e=this.idx){return`${this.line}:${e+this.offset+1}`}read_number(){let e=this.idx;for(;"1234567890.-eE".includes(this.curr());)this.idx++;return+this.txt.substring(e,this.idx)}read_ref(){if("["!=this.curr())throw new Error(`Expected [ at ${this}, found ${this.curr()} instead.`);let e=this.idx;for(;"[0x123456789abcdefABCDEF".includes(this.curr());)this.idx++;if("]"!=this.curr())throw new Error(`Expected ] at ${this}, found ${this.curr()} instead.`);this.idx++;let t=this.txt.substring(e+1,this.idx-1);return t.startsWith("0x")?+t:+t+33554432}read_loc(e){if("="==this.curr())return this.idx++,e;if("["==this.curr())return this.read_ref();if("n"==this.curr())return this.idx+=4,null;{let e=this.read_number();if(","!=this.curr())throw new Error(`Expected , at ${this}, found ${this.curr()} instead`);this.idx++;let t=this.read_number();if(","!=this.curr())throw new Error(`Expected , at ${this}, found ${this.curr()} instead`);return this.idx++,[e,t,this.read_number()]}}read_string(){let e=this.idx;if('"'!=this.curr())return"";for(this.idx++;'"'!=this.curr();)"\\"==this.curr()&&this.idx++,this.idx++;return this.idx++,JSON.parse(this.txt.substring(e,this.idx))}read_next_or_end(){if("}"==this.curr())return this.idx++,!0;if(";"!=this.curr())throw new Error(`Expected ; or } at ${this}, got ${this.curr()} instead`);return this.idx++,!1}read_expected_char(e){if(this.curr()!=e){let t=e;throw" "==t&&(t='" "'),new Error(`Expected ${t} at ${this}, found ${this.curr()} instead`)}this.idx++}}e.expose(new class{constructor(){this._frame_callbacks=[],this.rev_data=function(){let e=a,t=a,r=new Promise(((r,a)=>{e=r,t=a}));return e=e.bind(r),t=t.bind(r),Object.assign(r,{resolve:e,reject:t})}(),this.chat_css=this.rev_data.then((async e=>{let t=["tgui/packages/tgui-panel/styles/goon/chat-dark.scss","code/modules/goonchat/browserassets/css/browserOutput.css"],r="";e:for(let a of t)try{r="",a instanceof Array||(a=[a]);for(let t of a){let a=await fetch(`https://cdn.jsdelivr.net/gh/${e.repo}@${e.commit}/${t}`);if(!a.ok)continue e;r+=await a.text()}break}catch(e){console.error(e)}return r})),this._consuming_data=!1}async handle_data(e){this._parser||(203==e[0]?this._parser=new d(this._frame_callbacks,this.rev_data.resolve,await t.e()):this._parser=new c(this._frame_callbacks,this.rev_data.resolve,await t.e()),this._progress_callback&&(this._parser.progress_callback=this._progress_callback)),await this._parser.handle_data(e)}async wait_for_frames(e){for(;!(this._parser&&this._parser.frames.length>e);)await new Promise((e=>this._frame_callbacks.push(e)));return this._parser.frames.length}async consume_data(e){if(this._consuming_data)throw new Error("Data already being consumed");let t=0;for(;;){if(await this.wait_for_frames(0),!this._parser)continue;this._parser.frames[0]&&this._parser.frames[0].time;let a={frames:this._parser.frames.slice(0),appearances:this._parser.appearance_cache.slice(t),resource_loads:this._parser.resource_loads.slice(0)};if(this._parser instanceof d)for(let e=t;e<this._parser.appearance_cache.length;e++)this._parser.appearance_cache[e]=r.ReaderAppearance.base;this._parser.frames.length=0,this._parser.resource_loads.length=0,t=this._parser.appearance_cache.length,await e(a)}}async set_progress_callback(e){this._parser&&(this._parser.progress_callback=e),this._progress_callback=e}})}));
