page = PAGE
page {
	
	typeNum = 0
	config {
		disableAllHeaderCode = 1
	}
	
	10 = FLUIDTEMPLATE 
	10 {
		file.cObject = CASE
		file.cObject {
			key.data = levelfield:-1, backend_layout_next_level,slide
			key.override.field = backend_layout
			
			default = TEXT
			default.value = fileadmin/templates/Standard.html
			
			1 = TEXT
			1.value = fileadmin/templates/Standard.html

			2 = TEXT
			2.value = fileadmin/templates/Home.html
		}

		partialRootPath = fileadmin/templates/partials/
		layoutRootPath = fileadmin/templates/layouts/
		
		variables {
			pageTitle < lib.pageTitle
			menuMain < menu.menuMain
			menuLanguage < menu.menuLanguage
			contentBlockOne < lib.contentBlockOne
			contentBlockTwo < lib.contentBlockTwo
			languageKey < lib.languageKey
		}
	}
}

plugin.tx_form {
    settings {
        yamlConfigurations {
            100 = fileadmin/templates/extensions/form/setup.yaml
        }
    }
}