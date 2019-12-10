# VPVehicleToolkit

This component provides a handy set of properties, methods and context menu options exposing the
most commonly used vehicle features.

VPVehicleToolkit may also be used to learn how to interact with the vehicle from scripting.

&fa-thumbs-up:lg; The latest version available in the VPP repositories may already expose more
	features than those listed here.
	{: .alert .alert-success }

#### Properties

	float speed
	float speedInKph
	float speedInMph
	float engineRpm
	float engineLoad
	int engagedGear
	int automaticMode
	bool isEngineStarting
	bool isEngineStarted
	bool hasEngineStalled
	float longitudinalG
	float lateralG
	float verticalG
	float pitch
	float roll
	float yaw
	float pitchVelocity
	float rollVelocity
	float yawVelocity
	float throttlePedal
	float brakePedal
	float clutchPedal

#### Methods

&fa-info-circle:lg; All methods that don't require arguments are also available via component's
	context menu.
	{: .alert .alert-info }

	void StartEngine ()
	void StopEngine ()
	void ToggleStartStopEngine ()
	void SetSteering (float steering)
	void SetThrottle (float throttle)
	void SetBrake (float brake)
	void SetHandbrake (float handBrake)
	void SetClutch (float clutch)
	void SetAutomaticModeM ()
	void SetAutomaticModeP ()
	void SetAutomaticModeR ()
	void SetAutomaticModeN ()
	void SetAutomaticModeD ()
	void ToggleAutomaticModeP ()
	void SetNextAutomaticMode ()
	void SetPreviousAutomaticMode ()
	void SetGear (int gear)
	void ShiftGearUp ()
	void ShiftGearDown ()

### Source code

The full source code in VPVehicleToolkit.cs is provided here for reference.


```
//--------------------------------------------------------------
//      Vehicle Physics Pro: advanced vehicle physics kit
//          Copyright © 2011-2019 Angel Garcia "Edy"
//        http://vehiclephysics.com | @VehiclePhysics
//--------------------------------------------------------------

// VPVehicleToolkit: useful high-level tools
//
// Useful tools, procedures and data exposed in a single place.
// Also an example on dealing with the vehicle from scripting.

// NOTE:
//		For the input methods to have effect there should be no other components sending
// 		input data to the vehicle, for example VPStandardInput. Disable or remove these from the
// 		vehicle for the input methods in this component to have effect.
//
// 		Otherwise, both components will be overriding the same values in the data bus and the
//		result will be undefinded (sometimes one will work, sometimes the other will work).


using UnityEngine;
using EdyCommonTools;


namespace VehiclePhysics
{

public class VPVehicleToolkit : VehicleBehaviour
	{
	public enum AutomaticMode { M, P, R, N, D, L };

	[Header("Startup")]
	public bool pressBrake = false;
	[Space(5)]
	public bool setAutomaticMode = false;
	public AutomaticMode defaultAutomaticMode = AutomaticMode.P;
	[Space(5)]
	public bool startEngineOnEnable = false;


	// Commonly used vehicle data
	//
	// The units and the resolution of the data (dividers) are taken from the data bus specification:
	// https://vehiclephysics.com/advanced/databus-reference/


	// Speed is m/s. Use speedInKph or speedInMph to get the speed in km/h or mph respectively.

	public float speed
		{
		get
			{
			if (vehicle == null) return 0.0f;
			return vehicle.data.Get(Channel.Vehicle, VehicleData.Speed) / 1000.0f;
			}
		}

	public float speedInKph
		{
		get
			{
			return speed * 3.6f;
			}
		}

	public float speedInMph
		{
		get
			{
			return speed * 2.237f;
			}
		}

	public float engineRpm
		{
		get
			{
			if (vehicle == null) return 0.0f;
			return vehicle.data.Get(Channel.Vehicle, VehicleData.EngineRpm) / 1000.0f;
			}
		}

	public float engineLoad
		{
		get
			{
			if (vehicle == null) return 0.0f;
			return vehicle.data.Get(Channel.Vehicle, VehicleData.EngineLoad) / 1000.0f;
			}
		}

	public int engagedGear
		{
		get
			{
			if (vehicle == null) return 0;
			return vehicle.data.Get(Channel.Vehicle, VehicleData.GearboxGear);
			}
		}


	// The automatic mode will always be M in manual transmissions.

	public AutomaticMode automaticMode
		{
		get
			{
			if (vehicle == null) return AutomaticMode.M;
			return (AutomaticMode)vehicle.data.Get(Channel.Vehicle, VehicleData.GearboxMode);
			}
		}


	// Return true when the engine is starting but hasn't reached the working rpms yet

	public bool isEngineStarting
		{
		get
			{
			if (vehicle == null) return false;
			return vehicle.data.Get(Channel.Vehicle, VehicleData.EngineStarting) != 0;
			}
		}


	// Returns true when the engine is switched on and running

	public bool isEngineStarted
		{
		get
			{
			if (vehicle == null) return false;
			return vehicle.data.Get(Channel.Vehicle, VehicleData.EngineWorking) != 0;
			}
		}


	// Returns true when the engine is stopped but hasn't been switched off

	public bool hasEngineStalled
		{
		get
			{
			if (vehicle == null) return false;
			return vehicle.data.Get(Channel.Vehicle, VehicleData.EngineStalled) != 0;
			}
		}


	// Acceleration readings in G factors

	public float longitudinalG
		{
		get
			{
			if (vehicle == null) return 0.0f;
			return vehicle.localAcceleration.z / Gravity.reference;
			}
		}

	public float lateralG
		{
		get
			{
			if (vehicle == null) return 0.0f;
			return vehicle.localAcceleration.x / Gravity.reference;
			}
		}

	public float verticalG
		{
		get
			{
			if (vehicle == null) return 0.0f;
			return vehicle.localAcceleration.y / Gravity.reference;
			}
		}


	// Pitch and roll in degrees in range -180..+180

	public float pitch
		{
		get
			{
			Vector3 angles = vehicle.cachedTransform.eulerAngles;
			return MathUtility.ClampAngle(angles.x);
			}
		}

	public float roll
		{
		get
			{
			Vector3 angles = vehicle.cachedTransform.eulerAngles;
			return MathUtility.ClampAngle(angles.z);
			}
		}


	// Yaw in degrees in range 0..360

	public float yaw
		{
		get
			{
			Vector3 angles = vehicle.cachedTransform.eulerAngles;
			return angles.y;
			}
		}


	// Pitch, roll and yaw velocities in radians per second

	public float pitchVelocity
		{
		get
			{
			return vehicle.cachedRigidbody.angularVelocity.x;
			}
		}

	public float rollVelocity
		{
		get
			{
			return vehicle.cachedRigidbody.angularVelocity.z;
			}
		}

	public float yawVelocity
		{
		get
			{
			return vehicle.cachedRigidbody.angularVelocity.y;
			}
		}


	// Start the engine

	[ContextMenu("Start Engine")]
	public void StartEngine ()
		{
		if (vehicle == null) return;

		// Already started? do nothing

		if (isEngineStarted) return;

		// Move the ignition key to Start.
		// When the engine starts the key is moved back to Acc-On (see UpdateVehicle below)

		vehicle.data.Set(Channel.Input, InputData.Key, 1);
		}


	// Stop the engine

	[ContextMenu("Stop Engine")]
	public void StopEngine ()
		{
		if (vehicle == null) return;

		// Move the ignition key to Off

		vehicle.data.Set(Channel.Input, InputData.Key, -1);
		}


	// Start or stop the engine based on current state.
	// Useful for implementing a toggle start/stop button.
	// Also, if the engine is stalled then restarts it.

	[ContextMenu("Toggle Engine On/Off")]
	public void ToggleStartStopEngine ()
		{
		if (vehicle == null) return;

		if (!isEngineStarted || hasEngineStalled)
			StartEngine();
		else
			StopEngine();
		}


	// Steering and pedals
	//
	// Units, ranges and resolution (multipliers) are defined in the data bus specification:
	// https://vehiclephysics.com/advanced/databus-reference/


	// Steering:
	//	-1.0	full left
	//	 0.0	center
	// 	+1.0	full right

	public void SetSteering (float steering)
		{
		if (vehicle == null) return;

		vehicle.data.Set(Channel.Input, InputData.Steer, (int)(steering * 10000.0f));
		}

	// Throttle: 0.0f to 1.0f

	public void SetThrottle (float throttle)
		{
		if (vehicle == null) return;

		vehicle.data.Set(Channel.Input, InputData.Throttle, (int)(throttle * 10000.0f));
		}

	// Brake: 0.0f to 1.0f

	public void SetBrake (float brake)
		{
		if (vehicle == null) return;

		vehicle.data.Set(Channel.Input, InputData.Brake, (int)(brake * 10000.0f));
		}

	// Handbrake: 0.0f to 1.0f

	public void SetHandbrake (float handbrake)
		{
		if (vehicle == null) return;

		vehicle.data.Set(Channel.Input, InputData.Handbrake, (int)(handbrake * 10000.0f));
		}

	// Clutch: 0.0f to 1.0f

	public void SetClutch (float clutch)
		{
		if (vehicle == null) return;

		vehicle.data.Set(Channel.Input, InputData.Clutch, (int)(clutch * 10000.0f));
		}


	// Current positions of the pedals
	//
	// These are the "physical" pedal positions, but they don't necessarily represent the
	// input being applied to the vehicle. For example, the gas pedal may not be pressed but the
	// engine could be receiving throttle from cruise control or self-driving systems.
	//
	// Positions may also be set here instead of calling the methods above


	// Throttle: 0.0f to 1.0f

	public float throttlePedal
		{
		get
			{
			if (vehicle == null) return 0.0f;
			return Mathf.Clamp01(vehicle.data.Get(Channel.Input, InputData.Throttle));
			}

		set
			{
			SetThrottle(value);
			}
		}

	// Brake: 0.0f to 1.0f

	public float brakePedal
		{
		get
			{
			if (vehicle == null) return 0.0f;
			return Mathf.Clamp01(vehicle.data.Get(Channel.Input, InputData.Brake));
			}

		set
			{
			SetBrake(value);
			}
		}

	// Clutch: 0.0f to 1.0f

	public float clutchPedal
		{
		get
			{
			if (vehicle == null) return 0.0f;
			return Mathf.Clamp01(vehicle.data.Get(Channel.Input, InputData.Clutch));
			}

		set
			{
			SetClutch(value);
			}
		}


	// Switching modes in the automatic transmission may require additional conditions.
	//
	//	- If "Strict P Mode" is enabled in the Gearbox section, then brakes must be pressed to
	//	  enter or leave the P mode.
	//	- Engaging D from R or vice-versa requires the car to be stopped.
	//	- No effect if the vehicle has a manual transmission
	//
	// The numbers sent to the data bus are taken from the data bus specification:
	// https://vehiclephysics.com/advanced/databus-reference/
	//
	// The L mode (Low) is rarely used so it's excluded from this utility component.


	[ContextMenu("Set Automatic Mode M")]
	public void SetAutomaticModeM ()
		{
		if (vehicle == null) return;

		vehicle.data.Set(Channel.Input, InputData.AutomaticGear, 0);
		}

	[ContextMenu("Set Automatic Mode P")]
	public void SetAutomaticModeP ()
		{
		if (vehicle == null) return;

		vehicle.data.Set(Channel.Input, InputData.AutomaticGear, 1);
		}

	[ContextMenu("Set Automatic Mode R")]
	public void SetAutomaticModeR ()
		{
		if (vehicle == null) return;

		vehicle.data.Set(Channel.Input, InputData.AutomaticGear, 2);
		}

	[ContextMenu("Set Automatic Mode N")]
	public void SetAutomaticModeN ()
		{
		if (vehicle == null) return;

		vehicle.data.Set(Channel.Input, InputData.AutomaticGear, 3);
		}

	[ContextMenu("Set Automatic Mode D")]
	public void SetAutomaticModeD ()
		{
		if (vehicle == null) return;

		vehicle.data.Set(Channel.Input, InputData.AutomaticGear, 4);
		}

	[ContextMenu("Toggle Automatic Mode P")]
	public void ToggleAutomaticModeP ()
		{
		if (vehicle == null) return;

		if (automaticMode == AutomaticMode.P)
			SetAutomaticModeN();
		else
			SetAutomaticModeP();
		}


	// Switch to the next or previous automatic gear mode with these rules:
	//
	//	- Will switch the sequence R - N - D modes only.
	//	- From P will always switch to N.
	//  - Won't engage P - the SetAutomaticModeP method must be called explicitly for that.


	[ContextMenu("Set Next Automatic Mode")]
	public void SetNextAutomaticMode ()
		{
		if (vehicle == null) return;

		// This is a different way for accessing a channel in the bus.
		// It's useful when accesing several values or modifying existing values.

		int[] inputChannel = vehicle.data.Get(Channel.Input);

		// Get current value, apply the selection logic, and send the new value.

		int currentMode = inputChannel[InputData.AutomaticGear];
		int newMode = currentMode;

		if (currentMode == 1)		// P
			newMode = 3;			// N
		else
		if (currentMode < 4)		// D
			newMode++;

		inputChannel[InputData.AutomaticGear] = newMode;
		}


	[ContextMenu("Set Previous Automatic Mode")]
	public void SetPreviousAutomaticMode ()
		{
		if (vehicle == null) return;

		// This is a different way for accessing a channel in the bus.
		// It's useful when accesing several values or modifying existing values.

		int[] inputChannel = vehicle.data.Get(Channel.Input);

		// Get current value, apply the selection logic, and send the new value.

		int currentMode = inputChannel[InputData.AutomaticGear];
		int newMode = currentMode;

		if (currentMode == 1)		// P
			newMode = 3;			// N
		else
		if (currentMode > 2)		// R
			newMode--;

		inputChannel[InputData.AutomaticGear] = newMode;
		}


	// Engage a specific gear
	//
	//	0		Neutral gear
	//	> 0		Forward gears
	//	< 0		Reverse gears
	//
	// In auto-shift or automatic modes the requested gear may not be engaged if it doesn't
	// fit within the configured rpm range.


	public void SetGear (int gear)
		{
		if (vehicle == null) return;

		vehicle.data.Set(Channel.Input, InputData.ManualGear, gear);
		}


	// Shifting gears up / down in manual transmission or in the M mode of automatic transmissions
	//
	// This value accumulates to any existing value in the bus. It's reset to 0 when the gear
	// shift request has been aknowledged by the gearbox.
	//
	// This way this method may be called twice (or more) quickly, meaning shifting two gears up
	// or down at once.


	[ContextMenu("Shift Gear Up")]
	public void ShiftGearUp ()
		{
		if (vehicle == null) return;

		// This is a different way for accessing a channel in the bus.
		// It's useful when accesing several values or modifying existing values.

		int[] inputChannel = vehicle.data.Get(Channel.Input);

		inputChannel[InputData.GearShift] += 1;
		}


	[ContextMenu("Shift Gear Down")]
	public void ShiftGearDown ()
		{
		if (vehicle == null) return;

		// This is a different way for accessing a channel in the bus.
		// It's useful when accesing several values or modifying existing values.

		int[] inputChannel = vehicle.data.Get(Channel.Input);

		inputChannel[InputData.GearShift] -= 1;
		}


	// Component's OnEnable


	public override void OnEnableVehicle ()
		{
		// Set default values

		if (setAutomaticMode)
			{
			// Note: if "Strict Park Mode" is enabled in the Gearbox, then changing mode
			// from/to P requires brakes to be pressed.
			//
			// Enable "Press Brake" in this component to ensure the P mode may be set on startup.

			vehicle.data.Set(Channel.Input, InputData.AutomaticGear, (int)defaultAutomaticMode);
			}

		if (pressBrake)
			{
			vehicle.data.Set(Channel.Input, InputData.Brake, 10000);
			}

		if (startEngineOnEnable)
			StartEngine();
		}


	// Component's per-frame update.
	// Vehicle is guaranteed to be non-null here.


	public override void UpdateVehicle ()
		{
		// If starting the engine (Ignition Key = 1) move the ignition key back to Acc-On when the engine is started

		if (vehicle.data.Get(Channel.Input, InputData.Key) == 1 && isEngineStarted)
			{
			vehicle.data.Set(Channel.Input, InputData.Key, 0);
			}
		}
	}

}
```