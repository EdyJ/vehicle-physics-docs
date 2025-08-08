# Release Notes - SDK v9.8

Refer to the [Setting Up Vehicle Physics Pro](/user-guide/setting-up-vpp) section for download links and setup instructions.

---

## Removed Dependency on Unity's Legacy Input Manager

### Input Axes

VPP no longer requires Unity’s legacy Input Manager to be enabled. As a result, any axis configurations in the legacy Input Manager are now ignored.

Instead, VPP uses a set of predefined and preconfigured axes available in the enum `EdyCommonTools.UnityAxis`, located in the **Common Tools Core** repository:

```csharp
public enum UnityAxis
{
    None,

    // Vehicle control
    Steer,
    ThrottleAndBrake,
    Clutch,
    Handbrake,
    GearShift,
    GearMode,

    // Uniform 3D motion (e.g. for cameras)
    Sideways,
    Forwards,
    Upwards,

    // Generic uniform motion
    Horizontal,
    Vertical,

    // Mouse control
    MouseX,
    MouseY,
    MouseScrollWheel,
}
```

If you're using any of the following components from **Vehicle Common Tools**, you must reconfigure their axis properties to use elements from `UnityAxis`:

`PositionInput`
: - `inputAxisX` (default: `UnityAxis.MouseX`)
 	- `inputAxisY` (default: `UnityAxis.MouseY`)

`RotationInput`
: - `horizontalAxis` (default: `UnityAxis.MouseX`)
  - `verticalAxis` (default: `UnityAxis.MouseY`)

`CameraFovInput`
: - `fovAxis` (default: `UnityAxis.MouseScrollWheel`)

---

### Keyboard Keys

All references to `KeyCode` have been replaced with `EdyCommonTools.UnityKey`, a key subset specifically used by VPP. These values are directly compatible with `KeyCode`, so existing properties are automatically upgraded to their `UnityKey` equivalents.

---

### Configuring Predefined Axes

Predefined axes are accessible via the static class `EdyCommonTools.UnityInput` in the **Common Tools Core** repository:

```csharp
UnityInput.steerAxis
UnityInput.throttleAndBrakeAxis
UnityInput.clutchAxis
...
```

Each axis is preconfigured with default settings. However, you can modify these settings individually:

```csharp
public class UnityAxisControl
{
    public UnityKey negativeButton;
    public UnityKey positiveButton;
    public UnityKey altNegativeButton;
    public UnityKey altPositiveButton;

    public float sensitivity;
    public float gravity;
    public bool snap;
}
```

Example: To set the sensitivity of the steer axis to 5:

```csharp
UnityInput.steerAxis.sensitivity = 5.0f;
```

**Note:** Settings are not persistent. Custom modifications should be applied from the `OnEnable` method of a `MonoBehaviour` component in your scene.

---

## Other Additions, Improvements, and Changes

AQUI - TODO