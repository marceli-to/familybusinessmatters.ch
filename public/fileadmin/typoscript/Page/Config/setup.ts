config {
	
	// Administrator settings
	admPanel = {$config.adminPanel}
	debug = 1
	contentObjectExceptionHandler = 0

	doctype = html5
	htmlTag_setParams = none
	// Include Boilerplate handling for IE browsers
	htmlTag_stdWrap {
		setContentToCurrent = 1
		cObject = COA
		cObject {
			10 = LOAD_REGISTER
			10 {
				newLine.char = 10
				tagEnd {
					current = 1
					split.max = 2
					split.token = <html
					split.returnKey = 1
				}
			}

			20 = TEXT
			20.value = <!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7"{register:tagEnd} <![endif]-->
			20.wrap = |{register:newLine}
			20.insertData = 1
			30 < .20
			30.value = <!--[if IE 7]> <html class="no-js lt-ie9 lt-ie8"{register:tagEnd} <![endif]-->
			40 < .20
			40.value = <!--[if IE 8]> <html class="no-js lt-ie9"{register:tagEnd} <![endif]-->
			50 < .20
			50.value = <!--[if gt IE 8]> <!--><html class="no-js"{register:tagEnd} <!--<![endif]-->

			90 = RESTORE_REGISTER
		}
	}

	// Character sets
	renderCharset = utf-8
	metaCharset = utf-8

	// Cache settings
	cache_period = 86400
	
	no_cache = 0
	
	sendCacheHeaders = 1

	// URL Settings
	tx_realurl_enable = 1
	simulateStaticDocuments = 0

	// Language Settings
	uniqueLinkVars = 1
	linkVars = L(0-2)
	defaultGetVars {
		L = 0
	}
	sys_language_uid = 0
	sys_language_overlay = 0
	sys_language_mode = content_fallback
	language = de
	locale_all = de_DE.UTF-8
	htmlTag_langKey = de
	htmlTag_setParams = lang="de"
	
	baseURL =
	
	// Link settings
	absRefPrefix = {$config.absRefPrefix}
	prefixLocalAnchors = all
	
	// Remove targets from links
	intTarget =
	extTarget =

	// Indexed Search
	index_enable = 1
	index_externals = 1

	// Code cleaning
	disablePrefixComment = 1

	// Move default CSS and JS to external file
	removeDefaultJS = external
	inlineStyle2TempFile = 1

	// Protect mail addresses from spamming
	spamProtectEmailAddresses = 0
	spamProtectEmailAddresses_atSubst = @<span style="display:none;">remove-this.</span>

	noPageTitle = 2
	
	frontend_editing = 1	
}

config {
	htmlTag_langKey = de
	htmlTag_setParams = lang="de"
	sys_language_uid = 0
	language = de
	locale_all = de_DE.UTF-8
	metaCharset = utf-8
}

[globalVar = GP:L = 1]
config {
	htmlTag_langKey = en
	htmlTag_setParams = lang="en"
    sys_language_uid = 1
    language = en
    locale_all = en_EN
    htmlTag_langKey = en
}
[global]