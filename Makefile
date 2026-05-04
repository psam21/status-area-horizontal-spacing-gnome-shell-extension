#=============================================================================
EXTENSION=status-area-horizontal-spacing
EXTENSION_BASE=@mathematical.coffee.gmail.com
FILES=metadata.json *.js stylesheet.css schemas
#=============================================================================
default_target: all
.PHONY: clean all zip

clean:
	rm -f $(EXTENSION)$(EXTENSION_BASE).shell-extension.zip $(EXTENSION)$(EXTENSION_BASE)/schemas/gschemas.compiled

# nothing in this target, just make the zip
all: $(EXTENSION)$(EXTENSION_BASE)/schemas/gschemas.compiled

$(EXTENSION)$(EXTENSION_BASE)/schemas/gschemas.compiled: $(EXTENSION)$(EXTENSION_BASE)/schemas/org.gnome.shell.extensions.status-area-horizontal-spacing.gschema.xml
	glib-compile-schemas $(EXTENSION)$(EXTENSION_BASE)/schemas

zip: all
	gnome-extensions pack --force $(EXTENSION)$(EXTENSION_BASE)
