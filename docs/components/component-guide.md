# Component Guide

[TOC]

## VehiclePhysics

```
namespace VehiclePhysics
```

Main namespace for Vehicle Physics Pro components and scripts.

### Essential

Minimum components required for simulating a vehicle in Vehicle Physics Pro.

[VPVehicleController](https://vehiclephysics.com/components/vehicle-controller/)
:	Vehicle simulation and setup for most types of vehicles.
	<br>[[Guide for creating vehicles]](https://vehiclephysics.com/user-guide/vehicle-creation/)

[VPWheelCollider](https://vehiclephysics.com/components/wheel-collider/)
:	Replacement to the standard WheelCollider component.
	<br>[[Guide for configuring vehicles]](https://vehiclephysics.com/user-guide/vehicle-setup/)

[VPVehicleToolkit](https://vehiclephysics.com/components/vehicle-toolkit/)
:	Exposes the most commonly used functions of a vehicle as properties and methods to be used from scripting.

### Camera

Components for handling the camera, point of view, control modes...

[VPCameraController](https://vehiclephysics.com/components/camera-controller/)
:	Controls a camera offering the typical camera modes: fixed, follow, orbit, etc.

[VPCameraTarget](https://vehiclephysics.com/components/camera-controller/#vpcameratargetsetup)
:	Defines how the camera controller should take this specific vehicle.

### Ground Materials

Components for configuring the ground materials and their properties.

[VPGroundMaterialManager](https://vehiclephysics.com/components/ground-materials/)
:	Provides grip and drag setup for the physic materials in the scene.

[VPGroundMarksRenderer](https://vehiclephysics.com/components/ground-materials/#vpgroundmarksrenderer)
:	Renders skid marks and wheel trails for a given ground material type.

[VPGroundParticleEmitter](https://vehiclephysics.com/components/ground-materials/#vpgroundparticleemitter)
:	Controls a ParticleSystem component for a given ground material type.

[VPGroundRumbleEffect](https://vehiclephysics.com/components/ground-materials/#vpgroundrumbleeffect)
:	Simulates bumps when driving on a given ground material type.

### Input

Add-on components for processing the vehicle input (throttle, brake, steer, ...)

[VPStandardInput](https://vehiclephysics.com/components/vehicle-input/)
:	Reads Unity's standard Input and applies it to the vehicle.

[VPDeviceInput](https://vehiclephysics.com/components/vehicle-input/#vpdeviceinput)
:	Reads the input from a DirectInput device and applies it to the vehicle (Windows only).

VPXboxInput
:	Reads the input from a XBox controller and applies it to the vehicle (Windows only).

VPCloneInput
:	Reads the input from another vehicle and applies it to current one. Useful for passive
	vehicles such as trailers.

### Replay

Replay allows to record a vehicle and reproduce the exact sequence.

VPReplay
:	Provides record and replay capabilities to the vehicle.

VPReplayController
:	Provides high-level methods and hot keys for controlling the replay component of a vehicle.

### Telemetry

Add-on components for displaying the vehicle's internal data.

[VPTelemetry](https://vehiclephysics.com/components/vehicle-telemetry/)
:	Shows detailed information in runtime on the vehicle.

[VPPerformanceDisplay](https://vehiclephysics.com/components/vehicle-telemetry/#vpperformancedisplay)
:	A realtime chart exposing the vehicle state in a variety of aspects. Useful for fine tunning.

VPDiagnosticsCharts
:	Adds a set of custom charts to VPPerformanceDisplay for diagnosing specific situations.

VPSuspensionGraph
:	Draws a chart with the suspension forces.

[VPForceCones](https://vehiclephysics.com/components/vehicle-telemetry/#vpforcecones)
:	Shows each wheel's downforce in the scene as solid cones.

### Suspension

Add-on components for improving the suspension behavior.

[VPAntiRollBar](https://vehiclephysics.com/components/vehicle-suspension/#vpantirollbar)
:	Provides roll stabilization.

[VPDynamicSuspension](https://vehiclephysics.com/components/vehicle-suspension/#vpdynamicsuspension)
:	Dynamically adjusts the suspension spring in a set of wheels based on the cumulative load.

[VPProgressiveSuspension](https://vehiclephysics.com/components/vehicle-suspension/#vpprogressivesuspension)
:	Progressively increases the suspension spring based on the contact depth.

[VPAdvancedDamper](https://vehiclephysics.com/components/vehicle-suspension/#vpadvanceddamper)
:	Provides advanced damper features: bump, rebound, slow/fast bump, slow/fast rebound.

### Dynamics

Add-on components that implement specific dynamic behaviors.

[VPAeroSurface](https://vehiclephysics.com/components/vehicle-dynamics/#vpaerosurface)
:	Applies aerodynamic drag and downforce to the vehicle's body.

[VPRollingFriction](https://vehiclephysics.com/components/vehicle-dynamics/#vprollingfriction)
:	Applies rolling resistance to the wheels based on the wheel load.

VPTireFrictionModifier
:	Modifies the tire friction curve in a specific wheel or axle.

VPSolidCargo
:	Simulates a solid cargo in a vehicle in volume, mass, position and load level.

VPLiquidCargo
:	Simulates a sloshing liquid in a confinement tank.

[VPVehicleJoint](https://vehiclephysics.com/components/vehicle-joint/)
:	Link two rigidbodies together applying specific constraints.

### Effects

Add-on components providing a variety of visual and audio effects in the vehicle.

[VPAudio](https://vehiclephysics.com/components/vehicle-addons/#vpaudio)
:	Implements audio effects for engine, wheels, skid sounds, impacts, etc-

VPDamage
:	Deforms the vehicle as for impacts. May be configured for affect the handling as well.

VPHeadMotion
:	Implements inertial movement for the first-person view.

VPSegmentedSpeedGauge
:	A speed gauge with different speed scales.

[VPTireEffects](https://vehiclephysics.com/components/vehicle-addons/#vptireeffects)
:	Triggers the tire marks and particle effects based on the actual ground material and the state of the tire.

[VPVisualEffects](https://vehiclephysics.com/components/vehicle-addons/#vpvisualeffects)
:	Provides steering wheel rotation, lights and other visual effects.

### Advanced / Experimental

VPSelfDrive
:	Building brick for AI systems.

VPSettingsSwitcher
:	Helper for storing and applying different configuration sets.

VPTwoWheelController
:	Controller for two-wheeled vehicles such as bikes and motorcycles.

## VehiclePhysics.Examples

```
namespace VehiclePhysics.Examples
```

SimpleVehicleController
:	A really simple custom vehicle built with VPP blocks.

SimpleVehicleControllerInput
:	Control script for SimpleVehicleController.

SimpleTrackController
:	A simple track/caterpillar based vehicle controller.

SimpleTrackControllerInput
:	Control script for SimpleTrackController.

## VehiclePhysics.Timing

```
namespace VehiclePhysics.Timing
```

LapTimer
:	Measures lap and sector times.

LapSectorMark
:	Mark for sectors and start/finish line.

LapInvalidator
:	Detects shortcuts and speed cheating.

Transponder
:	Detection point in the vehicle.

## VehiclePhysics.Utility

```
namespace VehiclePhysics.Utility
```

AutoBrakeZone
:	Applies brakes in the vehicle so it leaves the zone at a given speed.

BlowShadow
:	Controls a Projector component for drawing a vehicle's shadow.

ConfigureCenterOfMass
:	Set the center of mass in generic rigidbodies (not vehicles). Examples: cargo, attachments,
	scene objects...

FollowHeading
:	Controls the steering via VPStandardInput component keeping vehicle following a direction.

MovableObject
:	Applies a simple cyclic movement to an object. Useful for dynamics tests.

SpeedLimitZone
:	Limits throttle so the vehicle doesn't surpass the given speed.

VariableCargo
:	Configures mass and center of mass among two values and positions.

## VehiclePhysics.UI

```
namespace VehiclePhysics.UI
```

- BasicDashboard
- DrivingAidsPanel
- ManettinoDial
- ReplayPanel
- SetableSlider
- TimerDisplay
- UIHandler

## VehiclePhysics.Specialized

```
namespace VehiclePhysics.Specialized
```

- DumperControl
- DumperControlInput
- ExcavatorControl
- ExcavatorControlInput
- TrackVehicleController
- TrackVehicleControllerInput
- WheelLoaderControl
- WheelLoaderControlInput

## EdyCommonTools

```
namespace EdyCommontools
```

Generic tools and utilities for Unity

### Application

- ApplicationCursor
- ApplicationQuit

### Camera

- CameraFovController
- CameraFovInput
- CameraShift

### Scene

- SceneReload
- ScreenBug
- ScreenNotes
- TimeScale

### Transform

- AttachToTarget
- BindLocalRotation
- PositionController
- PositionInput
- RotationController
- RotationInput
- ScaleController