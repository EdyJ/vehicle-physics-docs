
# Extending Vehicle Physics Pro

VPP may be extended in a variety of ways without needing to modify the source code.

NOTE: Modifying the source code is discouraged not only because you will likely experience
significant issues when upgrading, but also I can provide support for unmodified VPP codebases only.
There's surely a better way of configuring VPP to your needs using the available API.

### Add-on components

You may write Unity components deriving from VehicleBehaviour instead of MonoBehaviour. The lifecycle
in these components is bound to the vehicle they belong to. Also, you may arrange them anywhere in
the hierarchy of the vehicle and enable/disable them anytime. Most of VPP components are already
implemented this way.

[Learn more on writing add-on components]()

### Custom vehicles

The standard vehicle controller (VPVehicleController) implements the most common vehicle types.
However, you may write a custom vehicle controller by writing a class that inherits from VehicleBase.

Put it simple, VehicleBase implements the chassis and the wheels of the vehicle. You may then add
functional components or _Blocks_ arranged in any number and combination, and connect the output
to the wheels. Engine, gearbox, differential, clutch, steering, etc are all Blocks you may use
(or not) in your custom vehicle. VPVehicleController is a VehicleBase with the standard components
in standard vehicle layouts.

This way you may implement non-standard or unconventional vehicles not supported by the standard
vehicle controller component. For example, you may create a vehicle where each wheel is powered by
an independent motor.

[Learn more on writing custom vehicles]()

### Custom blocks

VPP includes a variety of powertrain functional parts or _Blocks_ to be used in vehicles.
The standard vehicle controller already uses these blocks, and you may use them in your own custom
vehicle controllers. But if you need to simulate functional parts not included in VPP then you may
write your own custom blocks and use them in your custom vehicle controller.

For example, a continuously variable transmission (CVT) may be easily implemented as custom block.

[Learn more on writing custom blocks]()

### Advanced handlers

VehicleBase and VPVehicleController exposes some advanced handlers intended for implementing
advanced functionalities. For example, the replay component makes use of these handlers.
