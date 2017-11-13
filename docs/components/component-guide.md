# Component Guide

### Namespace VehiclePhysics

#### Essential

Minimum components required for simulating a vehicle in Vehicle Physics Pro.

VPVehicleController
:	Vehicle simulation and setup for most types of vehicles.

VPWheelCollider
:	Replacement to the standard WheelCollider component.

#### Camera

Components for handling the camera, point of view, control modes...

VPCameraController
:	Controls a camera offering the typical camera modes: fixed, follow, orbit, etc.

VPCameraTarget
:	Defines how the camera controller should take this specific vehicle.

#### Ground Materials

Components for configuring the ground materials and their properties.

VPGroundMaterialManager
:	Provides grip and drag setup for the physic materials in the scene.

VPGroundMarksRenderer
:	Renders skid marks and wheel trails for a given ground material type.

VPGroundParticleEmitter
:	Controls a ParticleSystem component for a given ground material type.

#### Input

Add-on components for processing the vehicle input (throttle, brake, steer, ...)

VPStandardInput
:	Reads Unity's standard Input and applies it to the vehicle.

VPDeviceInput
:	Reads the input from a DirectInput device and applies it to the vehicle (Windows only).

VPXboxInput
:	Reads the input from a XBox controller and applies it to the vehicle (Windows only).

VPCloneInput
:	Reads the input from another vehicle and applies it to current one. Useful for passive
	vehicles such as trailers.

#### Replay

Replay allows to record a vehicle and reproduce the exact sequence.

VPReplay
:	Provides record and replay capabilities to the vehicle.

VPReplayController
:	Provides high-level methods and hot keys for controlling the replay component of a vehicle.

#### Telemetry

Add-on components for displaying the vehicle's internal data.

VPTelemetry
:	Shows detailed information in runtime on the vehicle.

VPPerformanceDisplay
:	A realtime chart exposing the vehicle state in a variety of aspects. Useful for fine tunning.

VPDiagnosticsCharts
:	Adds a set of custom charts to VPPerformanceDisplay for diagnosing specific situations.

VPSuspensionGraph
:	Draws a chart with the suspension forces.

VPForceCones
:	Shows each wheel's downforce in the scene as solid cones.

#### Suspension

Add-on components for improving the suspension behavior.

VPAntiRollBar
:	Provides roll stabilization.

VPDynamicSuspension
:	Dynamically adjusts the suspension spring in a set of wheels based on the cumulative load.

VPProgressiveSuspension
:	Progressively increases the suspension spring based on the contact depth.

#### Dynamics

Add-on components that implement specific dynamic behaviors.

VPAeroSurface
:	Applies aerodynamic drag and downforce to the vehicle's body.

VPRollingFriction
:	Applies rolling resistance to the wheels based on the wheel load.

VPTireFrictionModifier
:	Modifies the tire friction curve in a specific wheel or axle.

VPLiquidCargo
:	Simulates a sloshing liquid in a confinement tank.

VPVehicleJoint
:	Link two rigidbodies together applying specific constraints.

#### Effects

Add-on components providing a variety of visual and audio effects in the vehicle.

VPAudio
:	Implements audio effects for engine, wheels, skid sounds, impacts, etc-

VPDamage
:	Deforms the vehicle as for impacts. May be configured for affect the handling as well.

VPHeadMotion
:	Implements inertial movement for the first-person view.

VPSpeedGauge
VPTireEffects
VPVisualEffects

#### Advanced / Experimental

VPSelfDrive
VPSettingsSwitcher
VPTwoWheelController


### Namespace VehiclePhysics.Examples

SimpleVehicleController
SimpleVehicleControllerInput
SimpleTrackController
SimpleTrackControllerInput

### Namespace VehiclePhysics.Timing

LapTimer
LapSectorMark
LapInvalidator
Transponder

### Namespace VehiclePhysics.Utility

AutoBrakeZone
BlowShadow
ConfigureCenterOfMass
MovableObject
SpeedLimitZone

FollowHeading -> Advanced / Experimental
VariableCargo -> Dynamics

### Namespace VehiclePhysics.UI

BasicDashboard
DrivingAidsPanel
ManettinoDial
ReplayPanel
SetableSlider
TimerDisplay
UIHandler

### Namespace VehiclePhysics.Specialized

DumperControl
DumperControlInput
ExcavatorControl
ExcavatorControlInput
TrackVehicleController
TrackVehicleControllerInput
WheelLoaderControl
WheelLoaderControlInput

### Namespace EdyCommonTools

#### Application

ApplicationCursor
ApplicationQuit

#### Camera

CameraFovController
CameraFovInput
CameraShift

#### Scene

SceneReload
ScreenBug
ScreenNotes
TimeScale

#### Transform

AttachToTarget
BindLocalRotation
PositionController
PositionInput
RotationController
RotationInput
ScaleController