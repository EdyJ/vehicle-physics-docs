# Changelog

Brief summary of the most significant additions to Vehicle Physics Pro over time.

Full development details are available via GIT revision logs ([VPP subscription required](/about/licensing/)):

- [Vehicle Physics Core (Professional Edition)](https://vehiclephysics.repositoryhosting.com/trac/vehiclephysics_vehicle-physics-pro-sdk/log/)
- [Vehicle Physics Core (Enterprise Edition)](https://vehiclephysics.repositoryhosting.com/trac/vehiclephysics_vehicle-physics-core/log/)
- [Specialized Assets (Enterprise edition)](https://vehiclephysics.repositoryhosting.com/trac/vehiclephysics_vehicle-physics-specialized-assets/log/)
- [Sample Assets (all editions)](https://vehiclephysics.repositoryhosting.com/trac/vehiclephysics_vehicle-physics-sample-assets/log/)

Release notes and upgrade guides:

- [SDK v9.7 Release Notes](/about/release-notes-sdk-v9.7)
- [SDK v9.5 Release Notes](/about/release-notes-sdk-v9.5)

----

&fa-thumbs-up:lg; This page is updated from time to time.<br><br>Check out [@VehiclePhysics on X](https://x.com/VehiclePhysics){: .alert-link } for weekly updates. The hashtag [#VPPDev](https://twitter.com/search?q=%23vppdev&src=hashtag_click&f=live) shows the recent developments.
{: .alert .alert-success }

#### Now in the _develop_ branch (2025):

These features are working in the [PERRINN 424 project](https://github.com/PERRINN/project-424-unity), available on GitHub.

Kinematic suspension model
:	- Simulation of the suspension geometry for true wheel motions.
	- Configuration of instant centers, instant axis, roll center.
	- Unsprung mass.
	- Steering axis and caster via configurable kingpin.
	- Hard collisions (wheel rim) and soft collisions (tire).
	- Separate suspension and tire stiffness properties.

Advanced tire contact patch
:	- Compute the contact patch out of several contact points.
	- Vertical tire stiffness.
	- Longitudinal (radial) and lateral tire stiffness properties.
	- Carcass simulation (relevant when riding kerbs).
	- Tire deformation.
	- Elastic adherence when stopped.

Tire Friction Model 2.0 (SDK V10 alpha)
:	- Advanced industry-grade tire friction model: slip ratio, slip angle, load function.
	- Detailed editors with graphic charts for analysis.
	- Scriptable Tire Friction architecture: custom tire friction models may be implemented and used seamlessly.
	- New realtime telemetry plots: Slip Ratio, Slip Angle, Wheel Torque.
	- Reorganized telemetry data widget with slip and ground material properties always visible.
	- New traction and steering aids designed for this model.

Scriptable Wheel Collision model
:	- New VPP WheelCollider component completely replacing Unity's.
	- Custom wheel collision models may be implemented and plugged into VPP vehicles.
	- Vehicles may use different wheel collision models simultaneously.

New Input Devices Manager
:	- Learn and configure any device in seconds
	- Support any number of simultaneous devices
	- Load and save device setup to file / JSON
	- As simple to use as current Unity Input
	- Support for hot plugging devices

Electric MGU (Motor Generator Units)
:	- Parametric torque maps
	- Efficiency factor
	- Regenerative braking
	- Front-rear axle balancing
	- Detailed editors with graphics charts
	- Combination with mechanical brakes

Advanced telemetry system
:	- Multiple channels with different update frequencies and ranges
	- Easily extensible from vehicle components (VehicleBehaviour)
	- Different chart types: time/distance based, scatter plots, histogram

Engine-independent code (in process)
:	- Custom API exposing all elements and features required by VPP.
	- Interoperability with the equivalent elements in the host engine (i.e. Vector3, Transform...)
	- Math, physics, graphics, application, etc.
	- All engine-dependent code resides in a single location. Easily portable to other engines.

----

#### April 2025 - SDK V9.7

**Unity 6 API compatibility** without requiring script updates.<br>
See the **[Release notes for the SDK v9.7](/about/release-notes-sdk-v9.7)** for more details and
upgrade guide.

#### January 2025 - SDK V9.6

- Up to 50% more performance in Professional and Community Editions.
- Fixed **IL2CPP** errors in the Professional edition.
- New components for simulating massive diesel-electric mining dumper trucks: **VPDieselElectricController2**, **DumperControl**, **DumperExtendedControl**.
- New Engine **Power Cap** setting for realistic power curves in combustion engines.
- New **VPRetarderBrakeAudio** component for implementing the sound caused by the retarder brake.
- **Brake** block may now be used anywhere in a custom driveline layout.
- New **DryClutch** block implementing a standard friction clutch that may be used anywhere in a custom driveline layout.
- New **PowerDiverter** helper block to distribute power between two paths in custom driveline layouts.
- New **RegenerativeSteering** block for simulating regenerative steering system as typically used in tanks.
- Improved **VPBlockDebugger** component for better readability.
- Improved **VPTireAudio** to play the audio based on the contacted surface.
- Minimum Unity version supported: 2019.4.

#### September 2024 - SDK V9.5

Significant changes in the stable branch (_master_) of Vehicle Physics Pro.

See the **[Release notes for the SDK v9.5](/about/release-notes-sdk-v9.5)** for more details and
upgrade guide.

- New contact point model
- Improved wheel integration model
- Improved rolling friction model
- New Electric Motor model (MGU)
- Improved force feedback model

#### January 2024

- New **VPP Wheel Collider** component completely replacing Unity's WheelCollider.
- **Custom Wheel Collision Models** may be implemented as vehicle add-ons and used by VPP.

## 2023

#### September 2023

- Started working on the **foundation for upcoming engine-independent developments** in Vehicle
	Physics Pro. Initially, a new wheel collider implementation **replacing Unity's WheelCollider**
	will be developed on top of this foundation. Other Wheel contact models will follow. In the long term,
	this will allow porting VPP to other engines in the future.

	More information:<br>
	[https://twitter.com/VehiclePhysics/status/1706293552571920804](https://twitter.com/VehiclePhysics/status/1706293552571920804)<br>
	[https://mastodon.gamedev.place/@VehiclePhysics/111261878091480607](https://mastodon.gamedev.place/@VehiclePhysics/111261878091480607)

#### August 2023

- New **VPTirePressureEmulator** component which emulates changes in the tire pressure by modifying
	wheel radius, suspension rates, and tire friction.
- New **panning feature** in Orbit camera mode. Also new initialization options. ([Post](https://mastodon.gamedev.place/@VehiclePhysics/111046746970239518))
- New **VPWindAudio** component featuring a better model to simulate the wind audio volume. ([Post](https://mastodon.gamedev.place/@VehiclePhysics/110888181172676984))
- New **dual torque map model for MGUs** in 100% electric cars, allowing to configure front-rear power
	balance with a single settings file. ([Post](https://mastodon.gamedev.place/@VehiclePhysics/110967418197376127))
- New empty scene which uses **built-in lighting settings** added to the Examples repo. This scene
	doesn't require or generate a separate lighting file in Unity 2021+.
- New features for the **LapTimer** component: best lap, ideal lap, lap list. ([Post](https://mastodon.gamedev.place/@VehiclePhysics/110769296823684249))

#### June 2023

- The FFB component **VPWheelDeviceInput** can now actively limit the wheel's range when configured to a
	value larger than vehicle's steering wheel range.

#### May 2023

- New **electric motor block** for electric/hybrid vehicles ([Post](https://mastodon.gamedev.place/@VehiclePhysics/110491883492084042))
- Precise torque control in the new electric motor block allowing **accurate Traction Control (TCS)**. ([Post](https://mastodon.gamedev.place/@VehiclePhysics/110593039176650363))
- New sensor implementation for reading accurate telemetry values from the powertrain.

#### April 2023 - SDK V9.4

- New force feedback effect in **VPWheelDeviceInput** to simulate vibrations due to engine stall.
- New example scrips for new features: GearRangeLimit.cs, SetEngineRpm.cs.

#### January 2023

- New **Motor Grader Control** component to control all the features and mechanisms of a motor grader ([Tweet](https://twitter.com/VehiclePhysics/status/1613543552386048000)).

## 2022

#### December 2022

- New methods **ResetTargetPosition** and **ResetTargetRotation** in [VPVehicleJoint](/components/vehicle-joint/) to teleport the rigidbody to a given position or rotation of the joint without physics effects.
- Major improvements in the [**Vehicle Joint**](/components/vehicle-joint/) component for stability and consistency.
- New **Actuator** classes to simulate mechanisms with vehicle joints ([Example: motor grader](https://twitter.com/VehiclePhysics/status/1613543552386048000)).
- New **Linear** and **Rotary** actuator classes to simulate articulations in mechanisms.

#### November 2022

- New **IAudioSourceSettings** interface that unifies the audio settings of all audio sources in a vehicle.
- New components **MasterAudioSourceSettings** and **AudioClipSource** to configure multiple audio sources in the vehicle easily with the audio settings centralized in a single place.
- **VPAudioExtras** and **VPTireAudio** components now make use of the centralized audio settings.

#### August 2022

- New **gearbox range override** setting in the [Data Bus](/advanced/databus-reference/#settings-channel). Allows add-on components to define a custom range of gears in the gearbox.
- New **DirectInput Buttons** component to read inputs from buttons in any DirectInput device.
- New virtual methods in **VPWheelDeviceInput** to allow custom implementations of input and force feedback algorithms.

#### June 2022 - SDK V9.3-R2

- Major **DirectInput** review for reliability. Among other improvements, now supports hot device connect/disconnect.
- New **rumble effects** for steering wheel devices.
- New event method **UpdateVehicleInput** in [VehicleBehaviour](/advanced/vehiclebehaviour-reference/) to implement vehicle input. This ensures the input devices to be read and applied to the vehicle within the same simulation step.
- New **gearbox options** to protect the engine by shifting up above the given Max Rpm.
- [VehicleBase](/advanced/vehiclebase-reference/#properties) now exposes **angular accelerations**.
- The Professional edition is now **compatible with IL2CPP** scripting backend.

#### March 2022 - SDK V9.3

- New **front / rear differential lock settings** allowing to specify which	differential(s)
	should be locked or open. [Databus](/advanced/databus-reference/#settings-channel)
- Improved **downshifting in Limited Drive Modes (D1-D5)**, allowing better use of engine brake. [Gearbox](/blocks/gearbox/)
- New **Steering wheel range** property per vehicle. [Steering](/blocks/steering/)
- New **physical steering wheel range** setting (_configuredWheelRange_) in the device input components.
- New **force feedback rumble effects** based in engine rpm, speed, and suspension bumps.
- Major **DirectInput overhaul**: support device reconnection, improved reliability, more force feedback effects.
- New **rpm scaling** property in VPAudio. Better handing of engine rpm audio.

Check the file **Changelist.txt** in the Unity project for compatibility-breaking changes.

## 2021

#### December 2021 - SDK V9.2

- New **Limited Drive modes (D1-D5)** in automatic gearbox. These modes work like the regular D
	mode but using up to the specified gear only (i.e. up to 3nd gear in D3). [Gearbox](/blocks/gearbox/)
- New **Variable Vehicle Cargo** component that simulates cargo in any vehicle easily by
	modifying mass and center of mass.
- New **DirectInput Steer, Pedals and Shifter** components to configure individual
    DirectInput devices separately, each device providing a different functionality.

#### September 2021

- New **Multi-vehicle telemetry** display allowing convenient analysis of multiple vehicles at once. This is specially useful to monitor articulated and multi-articulated vehicles. [Tweet](https://twitter.com/VehiclePhysics/status/1443205817055039490)

#### July 2021

- New **6x6 driveline layouts** for vehicles with [three driven axles](/blocks/driveline/#three-driven-axles).
- New: VPP source code may now be built to **assemblies** by importing an unitypackage with the assembly definitions.

#### June 2021

- New **Aerodynamic Drag Models** added: cubic, mixed. Allows matching the simulated aerodynamic profile with actual data.
- New **Power Analysis Tool** for analyzing the effects of the aerodynamic and rolling drags with the speed. [Tweet](https://twitter.com/VehiclePhysics/status/1404430618218356736?cxt=HHwWgICz6ZmNxf0mAAAA)

#### February 2021 - SDK V9

- Vehicles now support **Floating Origin** and soft reposition with preservation of the physics state.
- New **Hard Reposition** feature for translating/respawning vehicles while restarting their physics state.

## 2020

#### December 2020

- New **UpdateAfterFixedUpdate** event in VPVehicleBehavior. Called only on those Update events that happen right after a FixedUpdate event.
- New **Combined Retarder Brake** option in the brakes section to apply retarder brake automatically from the brake pedal.

#### November 2020

- Fixed wheel suspension issues caused by Unity/PhysX faked **sprung mass model**.
- New **VPAudioExtras** component for additional sound effects, starting with **engine starting sound**.

#### October 2020

- New **VPWheelFrameMonitor** component for calculating ride heights and roll angles.

#### August 2020

- New **Max Distance** parameter in VPVehicleJoint for limiting the maximum distance allowed between anchor points.
- New **Limit Reverse Speed** option in Speed Control section.

#### June 2020

- New **Vehicle Creation Tool** for easily creating a working vehicle with all the essential components out of a 3D model.
- New **Inertia Tensor Matrix** feature allowing to configure inertia using an actual inertia tensor matrix.
- New **Throttle Sensitivity** setting for automatic gear shifts based on throttle pressure.

#### April 2020

- New **Aerial Control** system for hydraulic aerial devices (ladder, basket, stabilizers).

#### March 2020 - SDK V8

- **Unitypackages** are now provided for downloading Vehicle Physics Pro and configuring the Project Settings. [Learn more](/user-guide/setting-up-vpp/)
- **Tire friction model improved** providing smoother and much more realistic behavior. [Video](https://twitter.com/VehiclePhysics/status/1239565257519050758)
- **Anti-roll bar improved** for better control at high speeds. [Tweet](https://twitter.com/VehiclePhysics/status/1237023540722966531)
- New **ground rumble effects** providing physics relief effects on flat geometry. [Tweet](https://twitter.com/VehiclePhysics/status/1242097538775334912)
- New **Transmission Efficiency** parameter in the Driveline to simulate power loss due to internal frictions. [Tweet](https://twitter.com/VehiclePhysics/status/1234485207052562432)
- New **VPTireAudio** component providing accurate tire skid audio per-wheel independently.

#### February 2020

- New fast and accurate Spline **projection** and **distance measurement** methods. [Video](https://twitter.com/VehiclePhysics/status/1225066029807800320)
- New **PID-based VPTargetChaser** component for precisely follow a moving target. [Video](https://twitter.com/VehiclePhysics/status/1232680344404611077)
- Spa-Francorchamps example track reworked and simplified.

#### January 2020

- New **bucket auto-leveling system** in excavators [video](https://twitter.com/VehiclePhysics/status/1212743983497195520).

## 2019

#### November 2019 - SDK V7

- New component **[VPVehicleToolkit](/components/vehicle-toolkit/)** providing an useful high-level interface to the most commonly used vehicle features.
- New support for the **Fanatec Podium Wheel Base DD2** steering wheel.
- Added support to 3D vehicle models oriented in any axis, not necessarily "front +Z".
- New **camera movement** option in first person (driver) view.
- Splines may now be imported from **CSV** files.

#### October 2019

- New **electric vehicle controller** providing precise simulation of electric motors with regenerative braking. [Tweet](https://twitter.com/VehiclePhysics/status/1196435439588118529)
- Added support **CXC** motion cueing systems. [Info on CXC](https://www.cxcsimulations.com)
- New **automatic spring and damper setup** via context menu option in the VPWheelCollider component.
- New **example scripts** for writing custom input logic, custom wheel effects and custom handling setup.
- New components to precisely configure timing and inertias in the excavator controller.

#### August 2019 - SDK V6

- **The City scenery** reworked, including a 5km (3mi) long, 6-lanes highway for high speed tests. [Twitter announcement](https://twitter.com/VehiclePhysics/status/1167067113128960001)
- New **Sport Coupe Demo** scene featuring the new **Sport Coupe** car in the improved The City scenery.
- New **Simtools** motion platform support. [Info on Simtools](https://www.xsimulator.net/community/threads/how-to-write-a-game-plugin-for-simtools-2-0-api-documentation.9107/)
- VPP Demos now include support for **D-BOX** and **Simtools** motion platforms.
- New **Spline** component with integration with Unity's Timeline. Includes path-follow components to drive the vehicles. [Tweet 1](https://twitter.com/VehiclePhysics/status/1162356846830739456) [Tweet 2](https://twitter.com/VehiclePhysics/status/1163446654151921664) [Youtube video](https://www.youtube.com/watch?v=gu9c6M7keqk)
- New clutch type: **Torque Converter Limited**

#### July 2019

- VPP Demos: new Configuration dialog with camera settings (FoV, head motion).
- New graphic chart component for monitoring the **kinetic energy** (add-on to VPPerformanceChart).

#### June 2019

- DirectInput and XBoxInput can now handle **multiple devices** at the same time.
- New **diesel-electric** vehicle controller.
- New **diesel-hydraulic** vehicle controller.
- New **excavator loader** control script.
- New component **VPTireFrictionMultiplier** for applying a friction ratio to the tires.

#### May 2019

- Improved the **Xbox input component** now providing customizable smooth steering.
- Improved the **Custom Cameras** feature, now allowing several cameras to share the same activation key.
- UI: **Ignition Key UI** for switching the engine on/off with mouse or touch. Added to the [demos](/about/demos/).

#### April 2019

- **[New VPP Demos Released!](/about/demos/)** Available for PC/Windows and Mac OS X.
- New **Optimal gear shift calculation** feature. Computes the exact point where shifting up (or down) provides more acceleration than current gear. Used in the [Ascari Demo](/about/demos/#ascari-demo).
- UI: Timer display component provides **sector times**.
- UI: **Quick Start** pop up.
- UI: Toolbar for the Telemetry Chart.
- UI: **Gear Mode Selector** for automatic transmissions.

#### March 2019

- New **auto-shift in reverse gears** option, in both manual and automatic transmissions.
- UI: **Driver Assists panel** showing the available assists and allowing to selectively disable them.

#### February 2019

- New **EnergyProvider** component that simulates energy consumption from vehicle subsystems such as power steering, alternator, hydraulic systems, etc.
- UI: Simple UI for displaying the inputs received by the vehicle (throttle, brake, clutch, steering).
- UI: **Procedurally generated gauges** for speed and rpms adapting to the specific ranges of each vehicle.
- UI: **Generic dashboard** showing speed, rpm, stall lights, handbrake, warning sign.

#### January 2019 - SDK V5

- New **Engine Curve Fitting Tool** providing a procedure for configuring the Engine curves based on real curve data. Unity menu > Tools > Vehicle Physics > Engine Curve Fit Tool.
- New **rpm limiter mode selector** in the engine. The new **Injection Limit** reduces the throttle to keep the rpms under or at the limit. Previously, only Injection Cut mode was available to cut throttle at small intervals.
- **Compatibility Upgrade** that requires applying a patch (included) to the Unity project. [More information](https://www.edy.es/dev/2019/01/2019-01-25-compatibility-upgrade-for-vehicle-physics-pro/)

## 2018

#### November 2018 - SDK V4

- New **VPAdvancedDamper** component for detailed bump / rebound damper settings.
- Updated vehicle **JPickup v2**: The JPickup 3D model has been completely reworked (hierarchy, materials, spare parts...)

#### October 2018

- New **Vehicle Inertia** settings included as essential part of the vehicle controller.
- Updated vehicle **L200 Pickup Truck**: 3D model reworked (hierarchy, materials).

#### September 2018

- New **throttle mapping curve** feature in the Engine block providing a smooth engine control along all the throttle range.
- Improved **fuel consumption model** based on a much more precise **engine load** calculation.

#### August 2018

- New **MatchInertia** utility to help rigging complex multi-body vehicles (i.e. excavators).
- Improvements in a variety of components: VPWheelCollider, VPVehicleJoint, VPSolidCargo.

#### July 2018

- New **VPSolidCargo** component for easily configuring the cargo in the vehicle (volume, mass and position).
- New **VPWeightData** telemetry component that displays the weight per axle or group of axles.
- New **bump stops** feature preventing the suspension to reach its limits.
- New **Truck Audio** prefab with complete audio settings for trucks.

#### June 2018

- New **VPChassisInertia** component that configures a specific set of colliders to represent the inertia of the vehicle chassis. The inertia defines the understeer / oversteer behaviour.
- Support for the **Logitech G29** steering wheel.

#### May 2018

- New individual **Clutch block** that may be inserted in any point of the driveline (note that this block is not a replacement for the standard clutch, which is part of the Engine block).
- New **block debugger** component that shows the state values of each block in the driveline.

#### April 2018 - SDK V3

- New **snapshot save / restore** feature. Allows to save the full state of the vehicle and completely restore it later. Very useful on automated tests.
- New engine type: **Synchronous Drive**. Simulates a synchronous electric motor that enforces a specific RPMs in the output applying up to a given amount of torque.
- Support for **D-BOX motion platforms** [[D-BOX site]](https://catalogue.d-box.com/en/video-games/3910932/). The new add-on component VPDboxOutput sends all the vehicle telemetry and state to the D-BOX API.
- New **dual-drive steering** vehicle setup for caterpillars (TrackVehicleController). Supports smooth speed transitions and neutral rotation.
- New **Bulldozer controller** (VPBulldozerController) for simulating this very special type of vehicle: engine, torque converter, locked differential, two clutches and two caterpillars.

#### March 2018

- New components for designing and implementing **automated vehicle tests**.
- New automated tests: acceleration times, braking time and distance.
- New feature to **export telemetry data to CSV** for further analysis. This is especially useful in automated tests.

## 2017

#### December 2017

- New **minimal build mode** keeping the essential vehicle features only.
- Unity menu integration (Component > Vehicle Physics).

#### November 2017 - SDK V2

- Major reorganization of files and folders
- New **driveline helper** script for easily building common drivelines.

#### June 2017

- Support for **Multi-body vehicles**. Wheels may now belong to different rigidbodies in the same vehicle.

#### April 2017

- New component **VPTireFrictionModifier** for configuring tire friction for specific wheels.
- New **damper calculation** replacing PhysX's (faulty by design)
- New high-level component for managing the vehicle settings in a comprehensive way (i.e. safe, sport, race...)
- New experimental **bike controller** (two-wheeled vehicle)
- New **leaf spring** suspension simulation.

#### March 2017

- Suspension may now be modified via vehicle add-ons (VehicleBehaviour).
- Major suspension improvements.

#### February 2017

- New **VPXboxInput** component for simulating gamepads and other devices via XInput.
- Support for **Thrustmaster T500RS** steering wheel.

#### January 2017

- New component for **non-linear speed gauges** (i.e. Volkswagen Scirocco).
- New **VPLiquidCargo** component for simulating sloshing liquids in confined tanks (liquid cargo, fuel tank...)

## 2016

#### December 2016

- **Custom camera modes**: different camera configurations may now be specified per vehicle.
- Significant performance optimizations based on the profiler data.
- New **VPSelfDrive** component designed to be the building brick for AI and autonomous vehicles.

#### November 2016

- **Electronic Stability Control (ESC)**. Applies the brakes to individual wheels asymmetrically in order to counteract oversteer / understeer.
- **Anti-Spin Regulation (ASR)**. Allows the vehicle to move when one of the traction wheels loses grip. In such case, brakes are applied to the wheel with less traction.

#### September 2016

- New **Steering Aids**: limit the steering angle with speed, automatic counter-steering.
- Added order of execution for the VehicleBehaviour Update and FixedUpdate methods.
- New camera **auto-FoV** feature in the LookAt mode.
- New **Speed Control Aids**: cruise speed, speed limiter.

#### August 2016

- New **Replay system** with rewind & continue, playback forwards / reverse, jump, fast forward / reverse, save and load.
- New VPHeadMotion component for easily setup the driver's view with inertial movements.

#### July 2016

- **Traction Control System (TCS)**. Limits the tire slip by reducing or suppressing engine torque.

#### May 2016

- New **vehicle component protocol**. Vehicle add-on components now inherit from VehicleBehaviour for keeping in sync with their host vehicle.

#### April 2016

- New **fuel consumption model** for combustion engine
- New **VPVehicleJoint** component for easily rigging articulated vehicles
- New **VPDeviceInput** component [[documentation]](/components/vehicle-input/#vpdeviceinput) for using any DirectInput device including force feedback
- New **anti-roll bar** component providing suspension linkage between two wheels
- New **dynamic suspension** component for adjusting suspension with load dynamically

#### March 2016

- New **VPPerformanceDisplay** component [[documentation]](/components/vehicle-telemetry/#vpperformancedisplay) providing live performance charts for a variety of data from the vehicle.

#### February 2016

- **Anti-lock braking system (ABS)** [[video]](https://www.youtube.com/watch?v=t0NFt3d-jbg). Releases the brake pressure in each wheel to prevent wheel slip.
- New **VPDamage** component for modifying meshes and wheels with impacts.

#### January 2016

- Major code refactoring.

## 2015

#### November 2015

- New **retarder brake** feature. Mostly used on transport
- New inspector drawers for blocks and components

#### October 2015

- New **drag factor** for the ground materials.
- New experimental mass scale factor.

#### September 2015

- New ground materials feature: grip, visual effects, audio effects.
- Support for the **Logitech G27** steering wheel.
- New **visual effects** component: dashboard lights and gauges, steering wheel, brake lights, reverse lights.

#### August 2015

- New wheel sleep feature. Keeps the vehicle perfectly steady on slopes.
- New custom gravity feature.

## From 2010 to 2015

_Code name: NinjaVehicle_

- Engine (incl. torque curves, inertia, idle control, stall)
- Clutch (incl. torque converter)
- Gearbox (incl. manual, automatic, auto-shift, parking mode)
- Steering (incl. ackerman, toe, multi-axle steering)
- Transmission (incl. differential and transfer case settings)
- Axles (incl. brake circuits and steering modes)
- Differential (incl. open, locked, viscous, LSD, torsen)
- Wheels (incl. tire friction, suspension)
- Direct drive motor
- Telemetry
- Brakes
- Aerodynamics
- Dynamics solver
- Vehicle Controller inspector
