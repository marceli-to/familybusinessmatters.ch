menu.menuLanguage = COA
menu.menuLanguage {
    20 = HMENU
    20 {
        special = language
        special.value = 0,1
        special.normalWhenNoLanguage = 0
        wrap =
        1 = TMENU
        1 {
            noBlur = 1
            NO = 1
            NO {
                doNotLinkIt = 1
                linkWrap = <li>|</li>
                stdWrap.override = DE || EN
                stdWrap {
                    typolink {
                        parameter.data = page:uid
                        additionalParams = &L=0 || &L=1
                        ATagParams = hreflang="de-DE" || hreflang="en-EN"
                        addQueryString = 1
                        addQueryString.exclude = L,id,cHash,no_cache
                        addQueryString.method = GET
                        useCacheHash = 1
                        no_cache = 0
                    }
                }
            }

            ACT < .NO
            ACT.linkWrap = <li>|</li>

            USERDEF1 < .NO
            USERDEF1 {
                linkWrap = <li>|</li>
                stdWrap.typolink >
            }

            USERDEF2 < .ACT
            USERDEF2 {
                linkWrap = <li>|</li>
                stdWrap.typolink >
            }
        }
    }

    wrap = <ul class="site-language">|</ul>
}