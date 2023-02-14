config {
	# cat=config; type=boolean; label=Admin Panel: Turn on admin panel (mainly for testing purposes only)
	adminPanel = 0

	# cat=config; type=boolean; label=Debugging: Turn on debugging (testing purposes only)
	debug = 1

	# cat=config; type=string; label=Domain name for Base URL: (excluding slashes and protocol like http://)
	# domain = 

	# cat=config; type=string; label=Absolute URI prefix: (use "/" if running on top level; use empty value to use relative URI)
	absRefPrefix = /

	# cat=config/enable; type=boolean; label=Enable RealURL (speaking URL path segments)
	tx_realurl_enable = 1
}

plugin.meta {
	# cat=plugin.meta; type=string; label= Description: Write a short abstract for your website.
	description = 

	# cat=plugin.meta; type=string; label= Keywords: Enter a comma separated list of keywords.
	keywords = 

	# cat=plugin.meta; type=string; label= Robots: Use for instance these codes: Index all pages: "all".  Index no pages: "none". Only this page: "index,nofollow".  Only subpages: "noindex,follow"
	robots = all

	# cat=plugin.meta; type=string; label= Reply-to email
	email =

	# cat=plugin.meta; type=string; label= Author: Enter name of author.
	author = 

	# The meta tags below are not used on this website, if you want to use these, you can configure that in TypoScript template page.meta

	# cat=plugin.meta; type=boolean; label=Always include global.
	includeGlobal = 0

	# cat=plugin.meta; type=options[,Arabic=ar,Chinese=zh,Danish=dk,Dutch=nl,English=en,Finnish=fi,French=fr,German=de,Greek=el,Hebrew=he,Icelandic=is,Italian=it,Japanese=ja,Norwegian=no,Polish=pl,Portuguese=pt,Russian=ru,Spanish=es,Swedish=sv,Turkish=tr,Multi language=mul]; label= Language: Select language of the content.
	language = de

	# cat=plugin.meta; type=string; label= Distribution
	distribution = GLOBAL

	# cat=plugin.meta; type=options[,General,Mature,14 years,Restricted]; label= Rating
	rating = General
}

styles.templates {
    templateRootPath = fileadmin/templates/fluid/Resources/Private/Templates/
    partialRootPath = fileadmin/templates/fluid/Resources/Private/Partials/
    layoutRootPath = fileadmin/templates/fluid/Resources/Private/Layouts/
}

styles {
    content {
        textmedia {
            # maximum width of generated images
            maxW = 1000
            # maximum width of generated images (beside text)
            maxWInText = 600
            # column spacing in pixels for multiple image columns
            columnSpacing = 10
            # row spacing in pixels for multiple image rows
            rowSpacing = 10
            # spacing to the text
            textMargin = 10
        }
    }
}