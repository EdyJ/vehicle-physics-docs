# Creating add-on components

You may write an add-component for your vehicles easily by deriving from [VehicleBehaviour](/advanced/vehiclebehaviour-reference)
instead of MonoBehaviour.

- Access the vehicle the component belongs to via `VehicleBehaviour.vehicle` property.
- Implement the OnEnableVehicle and OnDisableVehicle events for component initialization and
	finalization.
- Implement UpdateVehicle for stuff that must be updated each visual frame.
- Implement FixedUpdateVehicle for stuff that depends on or modifies the vehicle's physics values.

&fa-exclamation-circle:lg; **Never override OnEnable or OnDisable in a VehicleBehaviour!** Use
OnEnableComponent and OnDisableComponent instead if you need to trace the initialization of the
component in Unity.
{: .alert .alert-danger }

Other events are available. Check out [VehicleBehaviour reference](/advanced/vehiclebehaviour-reference)
for full details.

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
		// If they're not met the component can gracefully terminate here.

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