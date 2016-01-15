# VPCameraController

Controls the camera movement based on a target object. Allows several camera modes.

To make the camera compatible with VR the main camera component must be located in a child
GameObject of VRCameraController.

![VP Camera Controller Inspector](/img/components/vpp-camera-controller-inspector.png){: .img-medium .clickview }

Mode
:	How the camera moves and rotates with regards to the Target.

Target
:	Transform the camera movement will use / follow / rotate around / etc.
	If the target GameObject contains a [VPCameraTargetConfig](#vpcameratargetconfig) component,
	then some parameters of each mode may be loaded from it.

Change Camera Key
:	Key for cycling among the different camera modes, or `KeyCode.None` for no key.

#### Attach To

The camera will be attached to the specified transform, without any further movement.

![VP Camera Controller Attach-To](/img/components/vpp-camera-controller-inspector-attach-to.png){: .img-small .clickview }

Hot Key
:	Hot key for selecting this mode, or `KeyCode.None` for no key.

Attach target
:	Target transform the camera will be attached to.
	Filled with `VPCameraTargetConfig.attachToPoint` if Target contains a [VPCameraTargetConfig](#vpcameratargetconfig)
	component.

#### Smooth Follow

The camera follows the target's velocity with smooth movements. This is the typical external vehicle
camera.

![VP Camera Controller Smooth-Follow](/img/components/vpp-camera-controller-inspector-smooth-follow.png){: .img-small .clickview }

Hot Key
:	Hot key for selecting this mode, or `KeyCode.None` for no key.

Distance
:	Horizontal distance to the target. Filled with `VPCameraTargetConfig.viewDistance` if Target
	contains a [VPCameraTargetConfig](#vpcameratargetconfig) component.

Height
:	Vertical elevation to look at the target from. Filled with `VPCameraTargetConfig.viewHeigh` if
	Target contains a [VPCameraTargetConfig](#vpcameratargetconfig) component.

Height Multiplier
:	Height is multiplied by this value and applied to the position. Useful when Height is filled
	with a value from the Target, and you want to keep the view proportionally elevated to that
	height.

Height Damping
:	How fast the camera position responds to changes in elevation.

Rotation Damping
:	How fast the camera responds to orientation changes. Filled with `VPCameraTargetConfig.viewDamping`
	if Target contains a [VPCameraTargetConfig](#vpcameratargetconfig) component.

Follow Velocity
:	If checked the camera follows the direction of the velocity. Otherwise, it always follows the
	forward direction of the target.

Velocity Damping
:	How fast the camera responds to changes in the direction of the velocity.

#### Orbit

The camera moves around the target in world space.

![VP Camera Controller Orbit](/img/components/vpp-camera-controller-inspector-orbit.png){: .img-small .clickview }

Hot Key
:	Hot key for selecting this mode, or `KeyCode.None` for no key.

Distance
:	Horizontal distance to the target. Filled with `VPCameraTargetConfig.viewDistance` if Target
	contains a [VPCameraTargetConfig](#vpcameratargetconfig) component.

Min Vertical Angle, Max Vertical Angle
:	Allowed angle range of vertical movement.

Horizontal Speed
:	Horizontal movement speed around the target.

Vertical Speed
:	Vertical movement speed around the target.

Orbit Damping
:	How fast the camera responds to orbit movement.

Min Distance, MaxDistance
:	Allowed distance range to the target. _minDistance_ is filled with `VPCameraTargetConfig.viewDistance`
	if Target contains a [VPCameraTargetConfig](#vpcameratargetconfig) component.

Distance Speed
:	Speed of change of the distance to the target.

Distance Damping
:	How fast the camera responds to distance changes.

These axis must be defined at the Unity Input settings (Edit > Project Settings > Input), or left
blank for no assignment.

Horizontal Axis
:	Axis name for the horizontal rotation.

Vertical Axis
:	Axis name for vertical movement.

Distance Axis
:	Axis name for distance changes.

#### Look At

Looks at the target from a fixed point in world space. Uses the actual position of the camera
when the mode is selected.

![VP Camera Controller Look-At](/img/components/vpp-camera-controller-inspector-look-at.png){: .img-small .clickview }

Hot Key
:	Hot key for selecting this mode, or `KeyCode.None` for no key.

Damping
:	How fast the camera orientation respond to the Target's movement.

Min Fov, Max Fov
:	Range of Field Of View (degrees) allowed for the camera.

Fov Speed
:	Speed for the FoV changes.

Fov Damping
:	How fast the camera responds to FoV changes.

Fov Axis
:	Axis name for changing the FoV. Must be defined at the Unity Input settings (Edit > Project
	Settings > Input), or left blank for no assignment.

Enable Movement
:	Allow the camera position to be moved using an alternate set of axis.

Movement Speed
:	Maximum speed for the camera movement.

Movement Damping
:	How fast the camera position respond to the movement.

These axis must be defined at the Unity Input settings (Edit > Project Settings > Input), or left
blank for no assignment:

Forward Axis
:	Axis name for forwards movement.

Sideways Axis
:	Axis name for sideways movement.

Vertical Axis
:	Axis name for vertical movement.

# VPCameraTargetConfig

Add this component to a vehicle for configuring the camera when the vehicle is selected as Target
in the camera controller [VPCameraController](#vpcameracontroller).

![VP Camera Target Config Inspector](/img/components/vpp-camera-target-config-inspector.png){: .img-medium .clickview }

Look At Point
:	Transform the camera will point at when this vehicle is selected as Target. Use the Center Of
	Mass (CoM) of the vehicle for best results.

Attach To Point
:	Transform to attach the camera to in _Attach To_ mode. This is typically used for the
	first-person driver view.

View Distance
:	Distance from the camera to this vehicle when selected as target. Larger vehicles require larger
	view distances for the camera not to intersect with the geometry. Used in camera modes _Smooth
	Follow_ and _Orbit_.

View Height
:	Vertical elevation of the camera in the _Smooth Follow_ camera mode.

View Damping
:	How fast the camera follows the direction of the vehicle in _Smooth Follow_ camera mode.

View Min Distance
:	Minimum distance to the target in _Orbit_ camera mode.

View Min Angle
:	Minimum vertical angle in _Orbit_ camera mode.