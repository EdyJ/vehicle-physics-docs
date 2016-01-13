# Creating add-on components

You can write Unity components requiring a [VehiclePhysics.VehicleBase](vehiclebase-reference.md)
component for adding or modifying the vehicle's behavior. Requiring `VehicleBase` makes the add-on
component compatible with any vehicle controller, including [custom vehicle controllers](custom-vehicles.md).

You can interact with the vehicle with these properties exposed at VehicleBase:

VehicleBase.data
:	Access to the internal [Data Bus](databus-reference.md), which provides a lot of internal
	information that can be read and modified.

	Some add-ons included in VPP as example:

	- The [VPVisualEffects](../components/vehicle-addons.md#vpvisualeffects) component reads the
		actual steering value from the data bus and rotates the steering wheel mesh accordingly.
	- The [VPStandardInput](../components/vehicle-input.md#vpstandardinput) component reads the
		Unity Input values and write them to the data bus.

VehicleBase.wheelState
:	Access to the individual states of each wheel. There's a lot of information per wheel available
	here. For example, the [VPAudio](../components/vehicle-addons.md#vpaudio) component reads the sliding state of each wheel here and
	produces the tire skid sound.

Additionally, you can read `VehicleBase.cachedTransform` and `VehicleBase.cachedRigidbody` for
optimized access to these components of the vehicle.