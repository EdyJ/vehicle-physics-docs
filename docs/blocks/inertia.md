# Inertia helper

The inertia defines the distribution of mass in the vehicle. Inertia plays a critical role in the
handling (understeer / oversteer) of the vehicle. The Inertia helper provides handy options for
configuring the vehicle's inertia easily.

![Inertia inspector and parametric gizmo](/img/blocks/vpp-inertia-inspector-parametric-gizmo.png){: .clickview }

&fa-thumbs-up:lg; **Hint:** You may hide the inertia gizmo (the orange box in the picture) by
collapsing the Inertia section in the Vehicle Controller inspector.
{: .alert .alert-success }

In runtime the inspector shows the Inertia Tensor values actually applied to the vehicle:

![Inertia inspector in runtime](/img/blocks/vpp-inertia-inspector-parametric-runtime.png)

## Configuration modes

#### Default

![Inertia inspector in Default mode](/img/blocks/vpp-inertia-inspector-default.png)

In the default mode the vehicle inertia isn't configured at all. The inertia will take the default
value as computed by Unity out of the collision mesh. Typically this produces cars with heavy
understeering.

It is advised to configure the inertia and not to leave the Default mode, as the handling will be
likely unrealistic.

Alternatively, you may use the VPVehicleInertia component anywhere in the vehicle to configure the
inertia separately from the VPVehicleController component (i.e. in [custom vehicles](/advanced/custom-vehicles)).

#### Parametric (recommended)

![Inertia inspector in Parametric mode](/img/blocks/vpp-inertia-inspector-parametric.png)

Most convenient method. Configure the chassis dimensions to roughly match the bottom part of the
vehicle, with the chassis and the engine. A box of the given dimensions is drawn in the scene view.

The Inertia Bias is a dimensionless factor that configures the longitudinal distribution of the mass:

- Positive values: there's more mass at the front of the vehicle. Positive values increase oversteer.
- Negative values: there's more mass at the rear of the vehicle. Negative values increase understeer.
- Neutral: the mass is evenly distributed around the center of mass. Balanced behavior.

The larger the magnitude, the more the effect of the bias.

#### Inertia Colliders

![Inertia inspector in Inertia Colliders mode](/img/blocks/vpp-inertia-inspector-colliders-gizmo.png){: .img-medium }

The inertia will be computed out of a specific set of colliders resembling the vehicle's most
massive parts (chassis, engine, transmission). These colliders won't be used as collision mesh.

Some properly shaped colliders are available in the repository Vehicle Physics Sample Assets
(/Art/Models/Chassis Parts).

When the set of colliders is left-right symmetric, then the same inertia effect may be achieved
with the Parametric method.

#### Explicit

![Inertia inspector in Default mode](/img/blocks/vpp-inertia-inspector-explicit.png)

Specify the inertia values directly as the Inertia Tensor and its rotation (in Euler angles).