# Tire settings

The Tires inspector defines the tire friction curve for the wheels in the vehicle.

![Vehicle Physics Pro tires inspector](/img/blocks/vpp-tires-inspector.png){: .clickview }

The horizontal axis is slip in m/s (each vertical green line is 1 m/s). The slip velocity is the
velocity the surface of the tire slides with respect to the ground. The vertical axis is the
coefficient of friction for a given slip velocity.

The coefficient of friction is a function of the actual slip velocity. A small slip velocity
increases the coefficient of friction up to the tire's peak friction. But if the slip gets
increased beyond that peak point then the friction rapidly decreases to lower values.

This is the default tire friction curve in VPP:

![Vehicle Physics Pro default tires](/img/blocks/vpp-tires-inspector-default.png){: .clickview }

- For slips < 0.5 m/s the coefficient of friction is 0.95
- For slips > 0.5 m/s the coefficient of friction increases progressively up to 1.1 at 1.5 m/s.
- For slips > 1.5 m/s the coefficient of friction decreases progressively down to 0.8 at 4 m/s
- For slips > 4 m/s the coefficient remains constant at 0.8

That tire needs quite a lot of slip for the coefficient of friction to decrease with respect to the
adherent state, and the different is small. This default tire setup is very forgiving and
allows a good control of the vehicle in most situations.

A competition tire looks more like this:

![Vehicle Physics Pro competition tire](/img/blocks/vpp-tires-inspector-competition.png){: .clickview }

In this tire the peak friction (1.1) is reached at just 0.6 m/s. Any slip beyond that, and the
friction rapidly drops 0.6. Real racing drivers have a great ability to apply the correct throttle
to keep the tire at its maximum friction.

A more realistic friction shape can be achieved using the Pacejka friction model:

![Vehicle Physics Pro competition tire](/img/blocks/vpp-tires-inspector-pacejka.png){: .clickview }

In this case Stiffness value to configures the slip where the curve reaches the peak friction at.

### See Also

[Advanced topics on tire friction: <br> - Grip, torque and acceleration <br> - Slip Ratio and Slip Angle <br> - Understanding steering, friction, and lateral slip / forces](/advanced/misc-topics-explained/#tire-friction)