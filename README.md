# Status Area Horizontal Spacing

A GNOME Shell extension that reduces the horizontal spacing between status
indicators on the right side of the top panel. It applies an inline
`-natural-hpadding` style to the panel buttons in that area and restores their
previous inline styles when disabled.

## Compatibility

- GNOME Shell 46, 47, 48, 49, 50, and 51.
- Fedora Linux 45 Workstation with GNOME Shell 51.1.

The supported GNOME Shell versions are listed in the extension's
[`metadata.json`](./status-area-horizontal-spacing@mathematical.coffee.gmail.com/metadata.json).

## Features and configuration

The preferences window provides a **Horizontal Padding** slider from 0 to 12
pixels. The default is 6 pixels. Values below 6 also lower the panel button's
minimum horizontal padding.

Open the extension's preferences from the GNOME Extensions app, or run:

```sh
gnome-extensions prefs status-area-horizontal-spacing@mathematical.coffee.gmail.com
```

The setting is stored as the `hpadding` key in the
`org.gnome.shell.extensions.status-area-horizontal-spacing` GSettings schema.

## Dependencies

At runtime, the extension uses GNOME Shell, GJS, and GLib GSettings. Its
preferences use GTK 4 and libadwaita; these are provided by a standard GNOME
desktop installation.

To build the extension from source, install `make`, `gnome-extensions`, and
`glib-compile-schemas` (provided by the GNOME Shell and GLib packages on Fedora).

## Build and install

From a source checkout:

```sh
make zip
gnome-extensions install --force status-area-horizontal-spacing@mathematical.coffee.gmail.com.shell-extension.zip
```

Then enable **Status Area Horizontal Spacing** in the GNOME Extensions app, or
run:

```sh
gnome-extensions enable status-area-horizontal-spacing@mathematical.coffee.gmail.com
```

`make` compiles the GSettings schema, and `make zip` creates the installable
extension bundle. The bundle can also be installed from the Extensions app.
