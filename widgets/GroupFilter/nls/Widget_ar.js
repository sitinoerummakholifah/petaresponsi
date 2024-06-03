// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define({"widgets/GroupFilter/nls/strings":{_widgetLabel:"\u0639\u0627\u0645\u0644 \u062a\u0635\u0641\u064a\u0629 \u0627\u0644\u0645\u062c\u0645\u0648\u0639\u0629",label1:"\u0639\u0646\u0635\u0631 \u0648\u0627\u062c\u0647\u0629 \u0645\u0633\u062a\u062e\u062f\u0645 \u062a\u0635\u0641\u064a\u0629 \u0627\u0644\u0645\u062c\u0645\u0648\u0639\u0629",labels:{selectGroup:"\u062d\u062f\u062f \u0645\u062c\u0645\u0648\u0639\u0629 \u0644\u062a\u0635\u0641\u064a\u062a\u0647\u0627",criteriaHeading:"\u0645\u0639\u064a\u0627\u0631 \u0639\u0627\u0645\u0644 \u0627\u0644\u062a\u0635\u0641\u064a\u0629",
uploadHeading:"\u062a\u062d\u0645\u064a\u0644 \u0645\u0644\u0641 \u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a",saveHeading:"\u062d\u0641\u0638 \u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u062d\u0627\u0644\u064a\u0629",saveHint:"\u0627\u062d\u0641\u0638 \u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u062a\u0635\u0641\u064a\u0629 \u0627\u0644\u062d\u0627\u0644\u064a\u0629 \u0641\u064a \u0645\u0644\u0641. \u0642\u0645 \u0628\u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u0644\u0641 \u0623\u062f\u0646\u0627\u0647 \u0644\u0627\u0633\u062a\u0631\u062f\u0627\u062f \u0647\u0630\u0647 \u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0644\u0627\u062d\u0642\u064b\u0627.",
layerOptionHeading:"\u062e\u064a\u0627\u0631\u0627\u062a \u0627\u0644\u062a\u0635\u0641\u064a\u0629",AppendDefHeading:"\u0625\u0644\u062d\u0627\u0642 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u062a\u0639\u0631\u064a\u0641\u0627\u062a \u062d\u0627\u0644\u064a\u0629",PersistDefHeading:"\u0627\u0644\u0627\u062d\u062a\u0641\u0627\u0638 \u0628\u0639\u0648\u0627\u0645\u0644 \u0627\u0644\u062a\u0635\u0641\u064a\u0629 \u0628\u0639\u062f \u0625\u063a\u0644\u0627\u0642 \u0639\u0646\u0635\u0631 \u0648\u0627\u062c\u0647\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645",
RefreshValueList:"\u064a\u0633\u062d\u0628 \u062a\u063a\u064a\u064a\u0631\u0627\u062a \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0644\u062a\u062d\u062f\u064a\u062b \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0642\u064a\u0645 \u0641\u064a \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0646\u0633\u062f\u0644\u0629 \u0644\u0639\u0646\u0635\u0631 \u0627\u0644\u062a\u0635\u0641\u064a\u0629.",RefreshButton:"\u062a\u062d\u062f\u064a\u062b",RefreshHeading:"\u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a",
operatorLabel:"\u062a\u062d\u062f\u064a\u062f \u0639\u0627\u0645\u0644 \u062a\u0634\u063a\u064a\u0644"},buttons:{save:"\u062d\u0641\u0638",addCriteria:"\u0625\u0636\u0627\u0641\u0629 \u0645\u0639\u0627\u064a\u064a\u0631",applyCriteria:"\u062a\u0637\u0628\u064a\u0642",removeCriteria:"\u0625\u0639\u0627\u062f\u0629 \u062a\u0639\u064a\u064a\u0646"},inputs:{optionOR:"'\u0623\u0648'",optionAND:"AND",optionEQUAL:"\u064a\u064f\u0633\u0627\u0648\u064a",optionNOTEQUAL:"\u0644\u0627 \u064a\u064f\u0633\u0627\u0648\u064a",
optionGREATERTHAN:"\u0623\u0643\u0628\u0631 \u0645\u0646",optionGREATERTHANEQUAL:"\u0623\u0643\u0628\u0631 \u0645\u0646 \u0623\u0648 \u064a\u064f\u0633\u0627\u0648\u064a",optionLESSTHAN:"\u0623\u0642\u0644 \u0645\u0646",optionLESSTHANEQUAL:"\u0623\u0642\u0644 \u0645\u0646 \u0623\u0648 \u064a\u064f\u0633\u0627\u0648\u064a",optionSTART:"\u064a\u0628\u062f\u0623 \u0628\u0640",optionEND:"\u064a\u0646\u062a\u0647\u064a \u0628\u0640",optionLIKE:"\u064a\u062d\u062a\u0648\u064a \u0639\u0644\u0649",optionLIKESPECIFIC:"\u064a\u062d\u062a\u0648\u064a \u0639\u0644\u0649 \u0642\u064a\u0645 \u0645\u062d\u062f\u062f\u0629",
optionNOTLIKE:"\u0644\u0627 \u064a\u062d\u062a\u0648\u064a \u0639\u0644\u0649",optionNOTLIKESPECIFIC:"\u0644\u0627 \u064a\u062d\u062a\u0648\u064a \u0639\u0644\u0649 \u0642\u064a\u0645 \u0645\u062d\u062f\u062f\u0629",optionONORBEFORE:"\u064a\u0643\u0648\u0646 \u0639\u0644\u0649 \u0623\u0648 \u0642\u0628\u0644",optionONORAFTER:"\u064a\u0643\u0648\u0646 \u0639\u0644\u0649 \u0623\u0648 \u0628\u0639\u062f",textboxNumber:"\u0628\u064a\u0646 ${0} \u0648${1}",textboxText:"\u0627\u0643\u062a\u0628 \u0642\u064a\u0645\u0629"},
files:{jsonFile:"MapFilterSettings"},_localized:{}}});