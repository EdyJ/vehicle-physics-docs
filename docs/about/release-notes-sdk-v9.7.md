# Release Notes - SDK v9.7

Check out the section [Setting Up Vehicle Physics Pro](/user-guide/setting-up-vpp) for download links and instructions.

### Unity 6 API compatibility

VPP now compiles in the supported Unity versions, including Unity 6, without console warnings or errors,
nor requiring any API updates.

Existing projects may throw compilation errors, which can be resolved easily with these changes:

```C#
	GroundMaterial.physicMaterial → GroundMaterial.physicsMaterial
	cachedRigidbody.velocity      → cachedRigidbody.linearVelocity
	cachedRigidbody.drag          → cachedRigidbody.linearDamping
	cachedRigidbody.angularDrag   → cachedRigidbody.angularDamping
```
If you get an error when using some cachedRigidbody member, just assign the cachedRigidbody reference to a Rigidbody variable first:

```C#
	bool sleeping = vehicle.cachedRigidbody.IsSleeping();   // Error

	Rigidbody rb = vehicle.cachedRigidbody;
	bool sleeping = rb.IsSleeping();						// Ok
```

### Other Additions, Improvements, and Changes

- New helper class **MethodInvokerThread** to call any method in a dedicated thread at a precise frequency. Will be used for real-time communications with hardware devices, for example steering wheels with force feedback.
- New font **DejaVu Sans Mono** replacing the old Veramono. The new font has significantly more glyphs available, including many useful symbols.
- New **VPEngineBrakeAudio** component for emulating the sound caused by combustion engines in braking mode.
- Many updates to **DumperExtendedControl**:
	- Brake Bias and ARC improvements
	- Improved engine protection
	- Implemented engine brake
	- More data shown in Telemetry
	- Fixed issue with overriding brake inputs
