menu.menuMain < menu.template
menu.menuMain {
		
	wrap = <ul>|</ul>
	
	1 {
		expAll = 1 
		NO {
			wrapItemAndSub = <li>|</li>
		}

		ACT < .NO
		ACT {
			wrapItemAndSub = <li class="is-active">|</li>
			ATagParams = class="is-active"
		}

		CUR < .ACT
	}
	
	2 < .1
	2 {
		wrap = <ul>|</ul>
		expAll = 1

		NO {
			wrapItemAndSub = <li>|</li>
		}
		
		ACT < .NO
		ACT {
			wrapItemAndSub = <li>|</li>
			ATagParams = class="is-active"
		}
		
		CUR < .ACT		
	}

	3 < .1
}