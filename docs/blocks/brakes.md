# Brakes helper

![VP Vehicle Controller brakes](/img/blocks/vpp-brakes-inspector.png){: .clickview }




### ABS calibration

The ABS system can be configured to provide the best performance on each vehicle setup.

**ABS Pressure Ratio** is the proportion of braking torque that is allowed to pass-thru when the
ABS reduces the pressure on the brakes.

- 0 means no braking at all, which might affect the braking efficiency (there are time slices where
	the brakes haven't any effect).
- A value too large means that the wheel may still get locked even when the ABS has released the
	full brake pressure. This is best noticeable when braking and steering at the same time. If the
	wheel still gets locked in this situation then the ABS pressure ratio is too large.

The best value for the pressure ratio is the higher value that doesn't lock the wheel while heavily
braking and steering at the same time.

**ABS Trigger Offset** is a slip amount (m/s) that is applied to the slip point of maximum grip in
the tire friction curve. If the tire's forward slip surpasses this point (slip of maximum grip +
offset) then the ABS is triggered and the brake torque gets multiplied by the pressure ratio.

- 0 means the ABS gets triggered at the slip point of maximum grip exactly.
- A value too large means that the tire would have to suffer a lot of forward slip before the ABS
	gets actually triggered. This would greatly affect both the braking efficiency (as a typical
	tire has less grip with more slip) and the manoeuvrability while braking.

A good value for offset is the tire slip point right before the grip suffers a significant drop.
This allows the tire to in a slip range with good grip the most time while braking with ABS.

**Example:** given the values shown at the inspector pic above (_ABS Trigger Offset_ = 0.75) then the
ABS would be trigger when the forward tire slip goes beyond ~2 m/s:

![VPP ABS calibration](/img/blocks/vpp-brakes-abs-calibration.png){: .clickview }

Once the ABS gets triggered the brake pressure would be reduced the 30% of the nominal pressure
(from 1400 Nm to 420 Nm in the front brakes). When the slip goes below the trigger point, the brakes
would be back to full pressure.