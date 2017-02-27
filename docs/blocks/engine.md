# Engine block

![VP Vehicle Controller engine](/img/blocks/vpp-engine-inspector.png){: .clickview }

#### Power curve

Most of the shape of the engine power curve depends on the idle, peak and max rpm settings. Circles
in the graph represent these settings (horizontal: rpms, vertical: torque in Nm). _Curve Bias_
values adjust the shape of the curve.

- **Idle**: Rpms and torque when no throttle is applied.
- **Peak**: Rpms and torque when the engine generates most power internally. This power also
	compensates the engine friction, so the maximum effective torque will probably be located elsewhere.
- ** Max rpm**: Maximum rpms the engine can reach on its own (without external torques).

Check out the calculated values below the graph for the engine performance data.

#### Inertia


#### Engine friction


#### Idle and stall

The idle state can be enforced in two ways:

- **Passive**: The engine applies the exact torque that compensates the friction at idle rpms.
	Works better with a steep friction curve.
- **Active**: Vehicle's electronic system actively applies as much torque as available for
	keeping the idle rpms.

With **Can Stall** enabled the engine stalls if the rpms fall below the calculated stall rpms. This
is the point in the graph near the origin where the torque curve is negative. The **Stall
Sensitivity** settings helps adjusting the stall point. Check out the calculated values in the
inspector for the exact data.


#### References

[Brake Specific Fuel Consumption (BSFC)](https://en.wikipedia.org/wiki/Brake_specific_fuel_consumption)<br>
[Fuel consumption analysis of motor vehicle](http://www.posterus.sk/?p=14506)<br>
[Fuel densities](https://en.wikipedia.org/wiki/Diesel_fuel#Fuel_value_and_price)<br>