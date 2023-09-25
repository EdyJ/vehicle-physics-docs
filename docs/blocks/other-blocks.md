# Other blocks

These are not used by [VPVehicleController](/components/vehicle-controller/), but they're still
available for [custom vehicle controllers](/advanced/custom-vehicles/).

[Learn more about the Block protocol](/advanced/block-reference/)

### DirectDrive

Ideal motor that applies a torque and reaches up to the given rpm. This block exposes one output,
no inputs.

```cs
namespace VehiclePhysics
{

public class DirectDrive : Block
	{
	// Motor input (0..1)
	public float motorInput = 0.0f;

	// Settings. Torque is Nm.
	public float maxMotorTorque = 100.0f;
	public float maxRpm = 500.0f;

	// Drive state
	public float angularVelocity { get; }
	public float torque { get; }
	public float sensorLoad { get; }

	// Numerical damping helps preventing resonances, but also reduces the precision of the values.
	public float damping = 0.95f;
	}

}
```

### SynchronousDrive

A direct drive motor that enforces a RPM value using the given torque amount.

```cs
namespace VehiclePhysics
{

public class SynchronousDrive : Block
	{
	// Rpm to enforce
	public float targetRpm = 0.0f;

	// Max allowed torque (Nm)
	public float maxTorque = 100.0f;

	// Drive state
	public float angularVelocity { get { return m_output.L / m_output.I; } }
	public float torque { get { return m_output.outTd; } }

	// Numerical damping helps preventing resonances, but also reduces the precision of the values.
	public float damping = 0.95f;
	}

}
```

### Gear

A single gear ratio imposed between the input and output blocks.

- Ratio > 1 increase torque and decrease angular velocity.
- Ratio < 1 decrease torque and increase angular velocity.

Ratio can be negative but cannot be zero or close to zero.

```cs
namespace VehiclePhysics
{

public class Gear : Block
	{
	public float ratio = 1.0f;
	}
}
```

### Gearset

Block providing a set of gears to select from.

Imposes the selected gear ratio between input and output. Simple implementation. Provides
immediate shifting and no neutral.

```cs
namespace VehiclePhysics
{

public class Gearset : Block
	{
	// Selected gear
	public int gearInput = 0;

	// Settings with the gear ratios
	public Settings settings = new Settings();

	public class Settings
		{
		public float[] ratios = { 1.0f, 2.0f };
		}
	}

}
```

### TorqueInjector

Injects the specific amount of torque to the output block

```cs
namespace VehiclePhysics
{

public class TorqueInjector : Block
	{
	// Torque in Nm
	public float torque = 0.0f;
	}

}

```

### Clutch

A simple lock-ratio based clutch that may be inserted anywhere in the drivetrain. Intended for
disengaging parts of the transmission (i.e. as in a bulldozer).

The [Engine block](/blocks/engine/) includes its own, more complete, clutch implementation.

```cs
namespace VehiclePhysics
{

public class Clutch : Block
	{
	// Lock ratio of the clutch. 0 = fully disconnected, 1 = hard connection

	public float lockRatio = 1.0f;

	// Proportion of the input inertia to be preserved when the cluch disengages the input.
	// Best value: the smallest value that preserves the numerical stability.
	//
	// A value too low may cause numerical blow up if the clutch is placed after a differential.

	public float inertiaRatio = 0.1f;
	}
}
```

### Brake

Block providing a brake between the input and the wheel. Requires its output to be connected
directly to a Wheel block.

For most vehicles it's better to Use the [Brakes helper](/blocks/brakes/) class instead, which
controls all brakes once providing brake balancing, handbrake and ABS as well.

```cs
namespace VehiclePhysics
{

public class Brake : Block
	{
	// Brake input (0..1)
	public float brakeInput = 0.0f;

	// Maximum brake torque (Nm)
	public float maxBrakeTorque = 500.0f;
	}
}
```



