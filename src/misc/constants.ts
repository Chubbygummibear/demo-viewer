export const LONG_GLIDE = 1;
export const RESET_COLOR = 2;
export const RESET_ALPHA = 4;
export const RESET_TRANSFORM = 8;
export const NO_CLIENT_COLOR = 16;
export const KEEP_TOGETHER = 32;
export const KEEP_APART = 64;
export const PLANE_MASTER = 128;
export const TILE_BOUND = 256;
export const PIXEL_SCALE = 512;
export const PASS_MOUSE = 1024;

export const BLIND = 1;
export const SEE_MOBS = 4;
export const SEE_OBJS = 8;
export const SEE_TURFS = 16;
export const SEE_SELF = 32;
export const SEE_INFRA = 64;
export const SEE_PIXELS = 256;
export const SEE_THRU = 512;
export const SEE_BLACKNESS = 1024;

export const VIS_INHERIT_ICON = 1;
export const VIS_INHERIT_ICON_STATE = 2;
export const VIS_INHERIT_DIR = 4;
export const VIS_INHERIT_LAYER = 8;
export const VIS_INHERIT_PLANE = 16;
export const VIS_INHERIT_ID = 32;
export const VIS_UNDERLAY = 64;
export const VIS_HIDE = 128;

export const SOUND_MUTE = 1;
export const SOUND_PAUSED = 2;
export const SOUND_STREAM = 4;
export const SOUND_UPDATE = 16;

export const MAX_LAYER : number = 32;

export const enum AppearanceAttributeIndex{
    TRANSFORMATION_MATRIX_3x3_A,
    TRANSFORMATION_MATRIX_3x3_B,
    TRANSFORMATION_MATRIX_3x3_C,
    TRANSFORMATION_MATRIX_3x3_D,
    TRANSFORMATION_MATRIX_3x3_E,
	TRANSFORMATION_MATRIX_3x3_F,
	
	ICON_BOUND_X_1,
	ICON_BOUND_Y_1,
	ICON_BOUND_X_2,
	ICON_BOUND_Y_2,
	
    ICON_LAYER,
    ICON_PLANE,
	
	COLOR_MATRIX_RED,
	COLOR_MATRIX_RED_GREEN,
	COLOR_MATRIX_RED_BLUE,
	COLOR_MATRIX_RED_ALPHA,

	COLOR_MATRIX_GREEN_RED,
	COLOR_MATRIX_GREEN,
	COLOR_MATRIX_GREEN_BLUE,
	COLOR_MATRIX_GREEN_ALPHA,

	COLOR_MATRIX_BLUE_RED,
	COLOR_MATRIX_BLUE_GREEN,
	COLOR_MATRIX_BLUE,
	COLOR_MATRIX_BLUE_ALPHA,

	COLOR_MATRIX_ALPHA_RED,
	COLOR_MATRIX_ALPHA_GREEN,
	COLOR_MATRIX_ALPHA_BLUE,
	COLOR_MATRIX_ALPHA_ALPHA,

	COLOR_MATRIX_COMPONENT_RED,
	COLOR_MATRIX_COMPONENT_GREEN,
	COLOR_MATRIX_COMPONENT_BLUE,
	COLOR_MATRIX_COMPONENT_ALPHA,

    COLOR_RGBA_RED = 12,
    COLOR_RGBA_GREEN = 13,
    COLOR_RGBA_BLUE = 14,
    COLOR_RGBA_ALPHA = 15,
}

///All relevant planes used by Yogstation categorized into an enum of their values
export const enum Planes{
    LOWEST_EVER_PLANE = -10000,
    CLICKCATCHER_PLANE = -99,
    SPACE_PLANE = -95,
    FLOOR_PLANE = -2,
    GAME_PLANE = -1,
    BLACKNESS_PLANE = 0,
    EMISSIVE_BLOCKER_PLANE = 12,
    EMISSIVE_PLANE = 13,
    EMISSIVE_UNBLOCKABLE_PLANE = 14,
    LIGHTING_PLANE = 15,
    O_LIGHTING_VISUAL_PLANE = 16,
    FLOOR_OPENSPACE_PLANE = 17,
    BYOND_LIGHTING_PLANE = 18,
    CAMERA_STATIC_PLANE = 19,
    HIGHEST_EVER_PLANE = 10000,
}

export const enum SeeInvisibility{
    SEE_INVISIBLE_MINIMUM = 5,
    SEE_INVISIBLE_LIVING = 25,
    SEE_INVISIBLE_OBSERVER = 60,
    INVISIBILITY_MAXIMUM = 100,
    INVISIBILITY_ABSTRACT = 101,
}

export const enum BlendMode {
	/**
	 * Also called BLEND_OVERLAY by Byond
	 */
	DEFAULT = 1,
	ADD = 2,
	SUBTRACT = 3,
	MULTIPLY = 4,
	INSET_OVERLAY = 5,
	ALPHA = 6,
	ALPHA_INVERTED = 7,
}