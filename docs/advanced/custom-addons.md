# Creating add-on components

You may write an add-component for your vehicles easily by deriving from [VehicleBehaviour](/advanced/vehiclebehaviour-reference/)
instead of MonoBehaviour. VehicleBehaviours are similar to standard MonoBehaviour components, but
they expose virtual methods that are invoked in sync with the vehicle's state. VehicleBehaviours may
be added anywhere in the hierarchy of the vehicle.

- Implement the OnEnableVehicle and OnDisableVehicle events for initialization and finalization.
- Access the vehicle the component is attached to via `VehicleBehaviour.vehicle` property.
- Implement FixedUpdateVehicle for stuff that depends on or modifies the vehicle's simulation values.
- Implement UpdateVehicle for stuff that must be updated each visual frame.

Other events are available. Check out [VehicleBehaviour reference](/advanced/vehiclebehaviour-reference/)
for full details.

&fa-exclamation-triangle:lg; **Never override OnEnable or OnDisable in a VehicleBehaviour!** Use
OnEnableComponent and OnDisableComponent instead if you need to trace the initialization of the
component in Unity.
{: .alert .alert-warning }

## Example source code

**SimpleVehicleAddon.cs**
```
using UnityEngine;
using UnityEngine.UI;
using VehiclePhysics;

public class SimpleVehicleAddon : VehicleBehaviour
	{
	public Text uiText;

	public override void OnEnableVehicle ()
		{
		// Check for the component initialization conditions.
		// If they're not met the component gracefully terminates here.

		if (uiText == null)
			{
			DebugLogError("This component requires an UI Text label. Component disabled.");
			enabled = false;
			return;
			}

		Debug.Log("Vehicle enabled. " + vehicle.wheelCount + " wheels");
		}

	public override void OnDisableVehicle ()
		{
		uiText.text = "";

		Debug.Log("Vehicle disabled");
		}

	public override void UpdateVehicle ()
		{
		// Read the RPMs of all the wheels and display them in the UI label.

		string text = "";

		for (int i = 0; i < vehicle.wheelState.Length; i++)
			{
			VehicleBase.WheelState ws = vehicle.wheelState[i];

			text += string.Format("{0}:  {1:0.}\n", ws.wheelCol.name, ws.angularVelocity * Block.WToRpm);
			}

		uiText.text = text;
		}
	}
```