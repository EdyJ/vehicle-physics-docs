# Release Notes - SDK v9.8

Refer to the [Setting Up Vehicle Physics Pro](/user-guide/setting-up-vpp) section for download links and setup instructions.

---

## Removed Dependency on Unity's Legacy Input Manager

#### Input Axes

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

#### Keyboard Keys

All references to `KeyCode` have been replaced with `EdyCommonTools.UnityKey`, a key subset specifically used by VPP. These values are directly compatible with `KeyCode`, so existing properties are automatically upgraded to their `UnityKey` equivalents.

---

#### Configuring Predefined Axes

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

#### Using the Legacy Input Manager

If you need to use the original axes from Unity’s legacy Input Manager, you can enable **legacy mode** on
any of the `UnityInput` axes. This forces the selected axis to read from a named axis in the legacy Input
Manager and ignore all other built-in `UnityInput` settings.

**Note:** This feature is only available when the legacy Input Manager is enabled in the project settings.

Example: Forcing the `UnityAxis.Steer` axis to read the legacy `"Horizontal"` axis:

```csharp
UnityInput.steer.legacyMode = true;
UnityInput.steer.legacyAxis = "Horizontal";
```

This allows, for example, to read the inputs from joysticks via the legacy Input Manager.

---

## Other Additions, Improvements, and Changes

- **VPWheelDeviceInput** updates:
    - Added a setting to specify the steering axis number and range.
    - Force feedback now remains active when the application is not in focus, if Run In Background mode is enabled.
- Added new **Gearbox** options to improve engine braking in manual auto-shift mode.
- Added new **VPBlockDebugger** options to display net torque per block.