# VehicleBehaviour reference

`VehiclePhysics.VehicleBehaviour` is the base class for components that belong to a vehicle in
Vehicle Physics Pro. VehicleBehaviour inherits from MonoBehaviour so these add-on components are
standard components in Unity.

VehicleBehaviours have these advantages:

- Events in VehicleBehaviour are invoked in sync with the vehicle state.
- VehicleBehaviours may be added to any GameObject in the hierarchy of the vehicle.
- VehicleBehaviours may be enabled or disabled anytime, either the component itself or their
	GameObject or any of its ancestors.
- VehicleBehaviours expose a handy `vehicle` property for referencing the vehicle they belong to.

VehicleBehaviours support these runtime situations:

- Vehicle enabled/disabled .
- Added/removed/enabled/disabled from scripting with vehicle enabled or disabled.
- Added/removed/enabled/disabled from the Editor with the vehicle enabled or disabled.
- Scripts recompiled in the Editor while in Play mode.
- Scripts execution order configured before and after the vehicle controller.
- Added to any GameObject in the hierarchy of the vehicle.
- Disabled inside the _OnEnableVehicle_ event (enabled=false): assumes failed initialization so
	_OnDisableVehicle_ won't be invoked.
- Disabled inside the _OnEnableComponent_ event (enabled=false): assumes failed component
	initialization so no further VehicleBehaviour events will be invoked.
- Disabled inside notifications (enabled=false): Supported but discouraged. No errors, but other
	components might be skipped for that notification that frame.

Check out [Creating add-on components](/advanced/custom-addons) for an example add-on with source
code. Most components included in VPP are already VehicleBehaviours.

## VehicleBehaviour events

#### OnEnableVehicle

Called right after the vehicle has been initialized.

#### OnDisableVehicle

Called right before the vehicle is finalized.

#### UpdateVehicle

Replacement for Update. Called each visual frame.

It's always called after OnEnableVehicle. There are no further calls after OnDisableVehicle.

#### FixedUpdateVehicle

Replacement for FixedUpdate. Called right after each vehicle physics step. Use for stuff that
depends on physics values from the vehicle.

It's always called after OnEnableVehicle. There are no further calls after OnDisableVehicle.

#### GetUpdateOrder

Execution order for UpdateVehicle, FixedUpdateVehicle and the additional notification events with
respect to other VehicleBehaviours. Smaller order executes first. Default is 0 (default order).

This order does NOT affect the execution order for OnEnableVehicle, OnDisableVehicle,
OnEnableComponent, or OnDisableComponent.

#### UpdateVehicleSuspension

Specialized vehicle suspension update method. Allows the component to modify the suspension
parameters in runtime. Called from inside the vehicle dynamics code at the proper time.

These parameters have been already updated and are available to read:

	vehicle.speed
	vehicle.speedAngle
	vehicle.localAcceleration

	wheelState.grounded
	wheelState.hit
	wheelState.contactDepth
	wheelState.lastContactDepth
	wheelState.suspensionCompression

	wheelState.wheelCol.lastRuntimeSpringRate
	wheelState.wheelCol.lastRuntimeDamperRate
	wheelState.wheelCol.lastRuntimeSuspensionTravel

All other parameters contain the state from the previous physics step. The component should leave
the new suspension parameters in these properties:

	wheelState.wheelCol.runtimeSpringRate
	wheelState.wheelCol.runtimeDamperRate
	wheelState.wheelCol.runtimeSuspensionTravel

These properties are reset to 0 at the beginning of each dynamics step. Note that other components
may have already modified them. It's up to the component to override the properties with its own
values or add them to the existing ones.

#### OnEnableComponent<br>OnDisableComponent

Use OnEnableComponent and OnDisableComponent if you need to trace whether
this precise component gets enabled or disabled in Unity.

- The vehicle might or might now have been already initialized when OnEnableComponent is called.
- OnEnableComponent will always be called before OnEnableVehicle.
- OnDisableComponent will always be called after OnDisableVehicle.

&fa-exclamation-circle:lg; **Do NOT override OnEnable or OnDisable!** Always use OnEnableComponent and
OnDisableComponent instead if you need to trace the initialization of this precise component in
Unity.
{: .alert .alert-danger }

#### OnReposition

The vehicle has been repositioned (position & rotation) in a discontinuous way via `VehicleBase.Reposition()`.

- OnReposition is not invoked on disabled vehicles.
- The new position and rotation are now in vehicle.cachedTransform.position & rotation.

#### OnEnterPause<br>OnLeavePause

Vehicle enters or leaves the paused state via `VehicleBase.paused`.

Within the pause state the vehicle solver doesn't run, and UpdateVehicle / FixedUpdateVehicle
are not invoked regularly. Only they get invoked once when `vehicle.SingleStep()` is called.
In this case, a single FixedUpdateVehicle call is followed by a single UpdateVehicle call.

OnEnterPause and OnLeavePause, if invoked, always occur after OnEnableVehicle and before
OnDisableVehicle.

## Gathering vehicle data

You may access the vehicle with the `vehicle` property (VehicleBase) in VehicleBehaviour.
VehicleBase exposes these properties among others:

VehicleBase.data
:	Access to the internal [Data Bus](databus-reference.md), which provides a lot of internal
	information that may be read and modified.

VehicleBase.wheelState
:	Access to the individual [WheelState](/advanced/vehiclebase-reference#nested-classes) data of
	each wheel. There's a lot of information per wheel available. For example, the [VPAudio](../components/vehicle-addons.md#vpaudio)
	component reads the sliding state of each wheel here and produces the tire skid sound.

	&fa-thumbs-up:lg; The number of wheels and the size of the wheelState array are guaranteed not
	to change between the OnEnableVehicle - OnDisableVehicle calls (both included).
	{: .alert .alert-success }

VehicleBase.cachedTransform<br>VehicleBase.cachedRigidbody
:	Optimized access to the Transform and Rigidbody components in the vehicle.

Check out [VehicleBase's Scripting Reference](/advanced/vehiclebase-reference#scripting-reference)
for a full list.

# Scripting reference

```
public abstract class VehicleBehaviour : MonoBehaviour
```

### Properties

```
	// The vehicle that owns this component

	public VehicleBase vehicle { get; }
```

### Methods

```
	// Log messages to Unity's console including component and gameobject information

	public void DebugLogWarning (string message)
	public void DebugLogError (string message)
```

### Virtual Methods

```
	// OnEnableVehicle is called right after the vehicle has been initialized

	public virtual void OnEnableVehicle ()

	// OnDisableVehicle is called right before the vehicle is finalized

	public virtual void OnDisableVehicle ()

	// UpdateVehicle is a regular Update call invoked between OnEnableVehicle and OnDisableVehicle.
	// Use for visual stuff.

	public virtual void UpdateVehicle ()

	// FixedUpdateVehicle is called right after each vehicle physics step.
	// Use for stuff that depends on physics values from the vehicle.

	public virtual void FixedUpdateVehicle ()

	// Execution order for UpdateVehicle, FixedUpdateVehicle and the additional notification events.
	// Smaller order executes first. Default is 0 (default order).
	//
	// This order does NOT affect OnEnableVehicle or OnEnableComponent.

	public virtual int GetUpdateOrder ()

	// Specialized suspension update method
	//
	// Allows the component to modify the suspension parameters in runtime.
	// Called from inside the vehicle dynamics code at the proper time.
	//
	// Updated parameters available:
	//
	//		vehicle.speed
	//		vehicle.speedAngle
	//		vehicle.localAcceleration
	//
	//		wheelState.grounded
	//		wheelState.hit
	//		wheelState.contactDepth
	//		wheelState.lastContactDepth
	//		wheelState.suspensionCompression
	//
	//		wheelState.wheelCol.lastRuntimeSpringRate
	//		wheelState.wheelCol.lastRuntimeDamperRate
	//		wheelState.wheelCol.lastRuntimeSuspensionTravel
	//
	// All other parameters contain the state from the previous physics step.
	// Suspension parameters that may be modified within this method:
	//
	//		wheelState.wheelCol.runtimeSpringRate
	//		wheelState.wheelCol.runtimeDamperRate
	//		wheelState.wheelCol.runtimeSuspensionTravel

	public virtual void UpdateVehicleSuspension ()

	// Don't override OnEnable and OnDisable.
	//
	// Use OnEnableComponent and OnDisableComponent if you need to trace whether
	// this precise component gets enabled or disabled in Unity.
	//
	// - The vehicle might have been initialized or not at OnEnableComponent.
	// - OnEnableComponent will always be called before OnEnableVehicle.
	// - OnDisableComponent will always be called after OnDisableVehicle.

	// You may handle Update and FixedUpdate directly in your component.
	// They will be tied to this component's state, but not the vehicle's.

	public virtual void OnEnableComponent ()
	public virtual void OnDisableComponent ()

	// The vehicle has been repositioned (position & rotation) in a discontinuous way.
	//
	// - OnReposition gets invoked when VehicleBase.Reposition() is called.
	// - OnReposition doesn't happen on disabled vehicles.
	// - The new position and rotation are now in vehicle.cachedTransform.position & rotation.

	public virtual void OnReposition ()

	// Vehicle enters or leaves the Paused state.
	//
	// Within the pause state the vehicle solver doesn't run, and UpdateVehicle / FixedUpdateVehicle
	// are not invoked regularly. Only they get invoked once when vehicle.SingleStep() is called.
	// In this case, a single FixedUpdateVehicle call is followed by a single UpdateVehicle call.
	//
	// OnEnterPause and OnLeavePause, if invoked, always occur after OnEnableVehicle and before
	// OnDisableVehicle.

	public virtual void OnEnterPause ()
	public virtual void OnLeavePause ()

	// Virtual method for retrieving the vehicle component.
	// Searches the component in the ancestors by default, but it may be overridden.
	//
	// NOTE: if the VehicleBehaviour is not part of the hierarchy of its vehicle, then it must
	// monitor the vehicle's initialized flag from Update or FixedUpdate and register itself when
	// vehicle.initialized changes from false to true:
	//
	//		if (vehicle.initialized == true && m_lastInitialized == false)
	//			{
	//			vehicle.RegisterVehicleBehaviour(this);
	//			{
	//
	//  	m_lastInitialized = vehicle.initialized;

	protected virtual VehicleBase GetVehicle()
```
