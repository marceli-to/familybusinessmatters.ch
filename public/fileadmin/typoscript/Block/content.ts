lib.content < styles.content.get

lib.contentBlockOne = COA
lib.contentBlockOne {
	1 < styles.content.get
	1.select.where = colPos=0
	1 {
		wrap = |
	}
}

lib.contentBlockTwo = COA
lib.contentBlockTwo {
	1 < styles.content.get
	1.select.where = colPos=1
	1 {
		wrap = |
	}
}