# Show only the chosen columns in the page module
# 0=normal, 1=left, 2=right, 3=border
mod.SHARED.colPos_list = 0,1,2,3

# Set the default label and flag
mod.SHARED.defaultLanguageLabel = German
mod.SHARED.defaultLanguageFlag = de.gif

# Show the content element wizard with tabs (for consistency)
mod.wizards.newContentElement.renderMode = tabs

TCEFORM {
	pages {
		layout {
			# Rename the default options for the layout field in table pages
			altLabels.0 = Standard
			altLabels.1 = (not in use)
			altLabels.2 = (not in use)
			altLabels.3 = (not in use)
		}
		# There is no need for the Alias field in page properties when we use RealURL
		alias.disabled = 1
	}

	tt_content {
		# Remove the 'border' option from selectbox 'column' in content records
		colPos.keepItems = 0,2
	}
}

// If an editor creates a page it should be visible to all editors and admins
TCEMAIN {
	// group "all users"
	permissions.groupid = 5

	user = show,edit,delete,new,editcontent
	group = show,edit,delete,new,editcontent
	everybody =
}

RTE.default.preset = rte_custom