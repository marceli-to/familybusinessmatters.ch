# Get page uid
lib.pageUid = TEXT
lib.pageUid.data = page:uid

# Get page pid
lib.pagePid = TEXT
lib.pagePid.data = page:pid

# Set page title
lib.pageTitle = TEXT
lib.pageTitle {
	field = subtitle // title
	noTrimWrap = |<title>| &nbsp;- Familybusinessmatters.ch</title>|	
}

# Language Key - German
lib.languageKey = TEXT
lib.languageKey.value = de

# Language Key - English
[globalVar = GP:L = 1]
	lib.languageKey = TEXT
	lib.languageKey.value = en
[global]
