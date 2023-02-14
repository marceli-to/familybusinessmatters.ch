menu.template = HMENU
menu.template {
	1 = TMENU
	1 {
		NO = 1
		NO {
			ATagTitle {
				field = title
				fieldRequired = nav_title
			}
			wrapItemAndSub = <li>|</li>
		}
		ACT < .NO
		CUR < .NO
	}
}
