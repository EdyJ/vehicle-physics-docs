# Torque splitter block

The torque splitter block consists of one input and two outputs. Input is coupled to the first
output, and the parameters configure the coupling to the second output.

When both outputs rotate at the same rate the torque from the input is applied to the first output.
When there's a difference of angular velocity between the outputs then part of the torque is routed
to the second output.

The standard [Vehicle Controller](/components/vehicle-controller) exposes the torque splitter
configuration under the [Driveline section](/components/vehicle-controller/#driveline) when the
selected [driveline layout](/blocks/driveline) includes a torque splitter.

This block simulates some AWD transmissions such as the [Haldex Traction](https://en.wikipedia.org/wiki/Haldex_Traction)
available in some 4x4 models (i.e. Audi Quattro), which engages drive torque the second axle when
main driven axle starts to slip.

![VP Vehicle Controller torque splitter](/img/blocks/vpp-torque-splitter-inspector.png){: .clickview }

Preload
:	Minimum coupling torque (Nm) between both outputs. Same effect as the preload in a differential.

Stiffness
:	Stiffness of the viscous coupling between both outputs.

	- 0.0 is no viscous coupling. Only preload is applied.
	- 1.0 represents a rigid axle connecting both outputs. Up to 100% of the torque can be
		transfered to the second output (i.e. 100% when the first output doesn't have any load).
