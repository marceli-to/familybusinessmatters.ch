plugin.tx_news {
	rss.channel {
		title = Dummy Title
		description =
		link = http://example.com
		language = en-gb
		copyright = TYPO3 News
		category =
		generator = TYPO3 EXT:news
	}

	opengraph {
		site_name =
		twitter {
			card = summary
			site =
			creator =
		}
	}

	view {
		templateRootPath = fileadmin/templates/extensions/news/Resources/Private/Templates/
		partialRootPath = fileadmin/templates/extensions/news/Resources/Private/Partials/
		layoutRootPath = fileadmin/templates/extensions/news/Resources/Private/Layouts/
	}

	settings {
		cssFile = EXT:news/Resources/Public/Css/news-basic.css
	}
}