# Component Guide

[TOC]

### VehiclePhysics

`namespace VehiclePhysics`

Main namespace for Vehicle Physics Pro components and scripts.

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

VPSpeedGauge -> VPNonLinearSpeedGauge
:	A speed gauge with different speed scales.

VPTireEffects
:	Triggers the tire marks and particle effects based on the actual ground material and the state of the tire.

VPVisualEffects
:	Provides steering wheel rotation, lights and other visual effects.

#### Advanced / Experimental

VPSelfDrive
:	Building brick for AI systems.

VPSettingsSwitcher
:	Helper for storing and applying different configuration sets.

VPTwoWheelController
:	Controller for two-wheeled vehicles such as bikes and motorcycles.

### VehiclePhysics.Examples

`namespace VehiclePhysics.Examples`

SimpleVehicleController
:	A really simple custom vehicle built with VPP blocks.

SimpleVehicleControllerInput
:	Control script for SimpleVehicleController.

SimpleTrackController
:	A simple track/caterpillar based vehicle controller.

SimpleTrackControllerInput
:	Control script for SimpleTrackController.

### VehiclePhysics.Timing

`namespace VehiclePhysics.Timing`

LapTimer
:	Measures lap and sector times.

LapSectorMark
:	Mark for sectors and start/finish line.

LapInvalidator
:	Detects shortcuts and speed cheating.

Transponder
:	Detection point in the vehicle.

### VehiclePhysics.Utility

`namespace VehiclePhysics.Utility`

AutoBrakeZone
:	Applies brakes in the vehicle so it leaves the zone at a given speed.

BlowShadow
:	Controls a Projector component for drawing a vehicle's shadow.

ConfigureCenterOfMass
:	Set the center of mass in generic rigidbodies (not vehicles). Examples: cargo, attachments,
	scene objects...

MovableObject
:	Applies a simple cyclic movement to an object. Useful for dynamics tests.

SpeedLimitZone
:	Limits throttle so the vehicle doesn't surpass the given speed.

- FollowHeading -> Advanced / Experimental
- VariableCargo -> Dynamics

### VehiclePhysics.UI

`namespace VehiclePhysics.UI`

- BasicDashboard
- DrivingAidsPanel
- ManettinoDial
- ReplayPanel
- SetableSlider
- TimerDisplay
- UIHandler

### VehiclePhysics.Specialized

`namespace VehiclePhysics.Specialized`

- DumperControl
- DumperControlInput
- ExcavatorControl
- ExcavatorControlInput
- TrackVehicleController
- TrackVehicleControllerInput
- WheelLoaderControl
- WheelLoaderControlInput

### EdyCommonTools

`namespace EdyCommontools`

Generic tools and utilities for Unity

#### Application

- ApplicationCursor
- ApplicationQuit

#### Camera

- CameraFovController
- CameraFovInput
- CameraShift

#### Scene

- SceneReload
- ScreenBug
- ScreenNotes
- TimeScale

#### Transform

- AttachToTarget
- BindLocalRotation
- PositionController
- PositionInput
- RotationController
- RotationInput
- ScaleController