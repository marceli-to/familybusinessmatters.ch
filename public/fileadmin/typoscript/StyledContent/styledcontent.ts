lib.parseFunc_RTE.tags {
  b = TEXT
  b {
    current=1
    wrap= <strong>|</strong>
  }
  
  i = TEXT
  i {
  	current=1
    wrap= <em>|</em>
  }
}

plugin.tx_cssstyledcontent._CSS_DEFAULT_STYLE >

tt_content.stdWrap.dataWrap >
tt_content.stdWrap.innerWrap >
tt_content.mailform.20.stdWrap.wrap >

#csc-header entfernen
lib.stdheader.stdWrap.dataWrap >

#Überschriften ohne Zusätze
lib.stdheader.2.headerStyle >
lib.stdheader.3.headerClass >

lib.parseFunc_RTE.nonTypoTagStdWrap.encapsLines.addAttributes.P.class =

tt_content.stdWrap.innerWrap.cObject.default >