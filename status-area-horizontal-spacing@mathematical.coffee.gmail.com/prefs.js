import Adw from 'gi://Adw';
import Gtk from 'gi://Gtk';

import { ExtensionPreferences, gettext as _ } from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';

export default class Prefs extends ExtensionPreferences {

    fillPreferencesWindow(window) {
        this._settings = this.getSettings();

        const width = 750;
        const height = 580;
        window.set_default_size(width, height);

        const page = Adw.PreferencesPage.new();

        const group = Adw.PreferencesGroup.new();
        this.addSlider(group, "hpadding", _("Horizontal Padding"), 0, 12, 0);

        page.add(group);

        window.add(page);
    }

    addSlider(group, key, labelText, lower, upper, decimalDigits) {
        const scale = new Gtk.Scale({
            digits: decimalDigits,
            adjustment: new Gtk.Adjustment({lower: lower, upper: upper}),
            value_pos: Gtk.PositionType.RIGHT,
            hexpand: true, 
            halign: Gtk.Align.END
        });
        scale.set_draw_value(true);    
        scale.set_value(this._settings.get_int(key));
        scale.connect("value-changed", (sw) => {
            this._settings.set_int(key, sw.get_value());
        });
        scale.set_size_request(400, 15);

        const row = Adw.ActionRow.new();
        row.set_title(labelText);
        row.add_suffix(scale);
        group.add(row);

        return scale;
    }

}