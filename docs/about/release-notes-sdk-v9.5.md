# Release Notes - SDK v9.5

### Main Changes from v9.4

New contact point model
: Tires now calculate and apply their forces by counteracting any external force applied to them. As a result, tire forces accurately respond to environmental factors such as uneven terrain, slopes, and collisions. This leads to high precision in low-speed maneuvers, and all tire forces work cooperatively at medium and high speeds.

Improved wheel integration model
: The numerical model that integrates the wheel momentum (from throttle, brake, tire) has been significantly improved. The wheel momentum is now highly accurate, often requiring less than half the solver substeps needed in the previous version. The simulation of vehicles with complex transmissions and a high number of differentials is now much more precise, with a reduced CPU footprint.

Improved rolling friction model
: Rolling friction is now calculated and applied within the wheel integration model. This enables the simulation of situations where the vehicle can get stuck in loose terrain, such as sand, mud, etc.

New electric motor model (MGU)
: The `ElectricMotor` block now implements a realistic simulation of an MGU (Motor Generator Unit) with proper torque, power, and efficiency parameters. The previous `ElectricMotor` block has been renamed to `ElectricMotorLegacy`.

Improved force feedback model
: The force feedback model now supports bump stops at rotation limits, allowing you to configure the steering wheel’s rotation range without needing to adjust the actual device settings.

#### Other Additions, Improvements, and Changes

- New tire pressure emulator component (`VPTirePressureEmulator`).
- New wind audio component with an improved speed-based audio model (`VPWindAudio`).
- New camera options in some camera modes.
- New `ParkingLock` block, which simulates a transmission lock.
- Wheel radius can now change dynamically.
- Brake-assist driving aids improved (ABS, ASR, ESC).
- Transmission: Fixed misbehavior in locking/unlocking detachable differentials.
- Engine: Fixed behavior when RPM is negative.
- Engine: Friction alone can now keep the car stopped.
- Gearbox: Relaxed speed requirement to engage/disengage park mode.
- TireFriction: Default values now represent standard street tires.
- `VPAudioExtras`: Fixed issue where pitch was not being applied.
- `VPRollingFriction`: Now applies rolling friction within the wheel model instead of applying external forces.
- `VPTelemetry`: Improved fuel consumption display.
- `VPTireAudio`: Fixed errors when audio components already exist in the wheel `GameObject`.
- Fixed errors related to the 32/64-bit versions of `xinput1_3.dll`.
- Camera Orbit mode: By default, right mouse button is now required to rotate the view.
- Camera Orbit mode now supports Target Relative rotation and panning.

### Project Upgrade Guide

#### Vehicle Controllers

##### Deprecated and Removed

Any code related to these elements can be safely removed. The new contact point model resolves all issues associated with them.

- `integrationUseRK4`
- `tireSideDeflection`
- `tireSideDeflectionRate`
- `tireAdherentImpulseRatio`
- `wheelSleepVelocity`
- `wheelSleepCriteria`
- `inhibitWheelSleepThreshold`
- `inhibitWheelSleepTime`

##### Advanced Suspension Damper Deprecated

May cause instabilities with the new contact point model. However, it can still be enabled via an external script.

- `advancedSuspensionDamper`
- `suspensionDamperLimitFactor`

##### Renamed

- `integrationSteps` renamed to `solverSubsteps`

##### Added

- `wheelMomentumFactor`: Reduce in cases of numerical instabilities related to high center of mass and/or low inertia.
- `wheelMomentumModel`: Use the alternate model for complex multi-body vehicles that fail to remain stationary with the default model.

##### Substeps

Substeps in vehicle controllers can now be significantly reduced:

- 2 for NPC vehicles
- 4 for player vehicles with 1 driven axle
- 6 for vehicles with 2 driven axles
- 8 for vehicles with 3 driven axles
- 10-12 for vehicles with 4 driven axles

##### Engine Reaction Factor / Park Mode Reaction Factor

Both values should be set to 1 to work properly with the new wheel contact point model.

#### VPProgressiveSuspension

Vehicles using the `VPProgressiveSuspension` component may experience excessive suspension bouncing and/or cyclic bouncing, even when stationary. The suspension in these vehicles must be reconfigured to work with the new SDK version. While precise settings depend on the specific vehicle and setup, here are some common guidelines:

- Increase the damper value in the affected wheel colliders.
- Configure `Min Compression` in `VPProgressiveSuspension` to be as low as possible. A value below 0.5 is highly recommended; 0 is ideal. This may require reducing `Max Spring Rate Offset`.
- Enable `Adjust Damper` in `VPProgressiveSuspension` and configure a damper value similar to the damper value in the wheel collider.

#### Custom Vehicle Controllers

##### ElectricMotor

Custom vehicle controllers using this block should rename `ElectricMotor` to `ElectricMotorLegacy`, or upgrade to the new `ElectricMotor` block.
