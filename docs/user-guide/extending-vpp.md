
# Extending Vehicle Physics Pro

VPP can be extended in several ways without modifying the source code.

### Add-on components

You can write Unity components deriving from ```VehicleBehaviour``` instead of MonoBehaviour. The
life cycle in these components (initialization, release, update) is bound to the vehicle they belong
to. Also, you can place them anywhere in the hierarchy of the vehicle and enable/disable them
anytime. Most of VPP components are already implemented this way.

- [Writing add-on components](/advanced/custom-addons/)
- [VehicleBehaviour reference](/advanced/vehiclebehaviour-reference/)

Add-ons use the protected property **vehicle** to reference the VehicleBase vehicle they belong to.
Then they may use the API exposed by ```VehicleBase``` and/or the vehicle's **Data Bus**.

- [VehicleBase API](/advanced/vehiclebase-reference/#scripting-reference)
- [Data Bus reference](/advanced/databus-reference/)

### Custom vehicles

The standard vehicle controller (```VPVehicleController```) implements the most common vehicle types.
However, you can write a custom vehicle controller by writing a class that inherits from
```VehicleBase```. This way you car implement non-standard or unconventional vehicles not supported
by the standard vehicle controller component, such as electric or hybrid multi-motor cars.

Put it simple, VehicleBase implements the chassis and the wheels of the vehicle. You can then add
functional components or **_Blocks_** arranged in any number and combination, then connect their
outputs to the wheels. Engine, gearbox, differential, clutch, steering, etc are all Blocks you may
use (or not) in your custom vehicle. ```VPVehicleController``` is already a ```VehicleBase```-derived
class with the typical components arranged in standard vehicle layouts.

- [Writing custom vehicles](/advanced/custom-vehicles/)
- [VehicleBase reference and API](/advanced/vehiclebase-reference/)

### Custom blocks

If you need to simulate functional parts not included in VPP then you may implement your own custom
parts or **_Blocks_** and use them in your custom vehicle controller.

For example, a continuously variable transmission (CVT) may be easily implemented as custom block.

- [Writing custom blocks](/advanced/custom-blocks/)
- [Block reference](/advanced/block-reference/)

### Advanced events

```VehicleBase``` exposes some advanced event handlers launched at specific stages of the simulation
cycle. These are intended for implementing very specific advanced functionalities within custom
add-on components. They shouldn't be needed in most cases.

For example, the ```VPReplay``` component makes use of these events for recording the vehicle state
and tweak the simulation during the replay.

- [VehicleBase Events](/advanced/vehiclebase-reference/#events)

### Custom Ground Materials

By inheriting from ```GroundMaterialManagerBase``` you could write your own Ground Material Manager
component that provides VPP vehicles with the ground properties based on your own criteria.

```GroundMaterialManagerBase.GetGroundMaterial``` receives the information on the contact in
```GroundMaterialHit```, including contacted collider, physics material and contact point. The
method then returns a ```GroundMaterial``` instance with the ground properties (grip, drag,
effects...).

- [Ground Materials reference and API](/components/ground-materials/)

