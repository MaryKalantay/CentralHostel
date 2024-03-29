
<?php
 //error_reporting(-1);
 //ini_set('display_errors', 'On');
 $current_error_reporting = error_reporting();


function showLogs() 
{
	return false;
}

function handleJSONError()
{
	if (showLogs())
	{
	    switch (json_last_error()) {
	        case JSON_ERROR_NONE:
	            echo ' - Ошибок нет';
	        break;
	        case JSON_ERROR_DEPTH:
	            echo ' - Достигнута максимальная глубина стека';
	        break;
	        case JSON_ERROR_STATE_MISMATCH:
	            echo ' - Некорректные разряды или несоответствие режимов';
	        break;
	        case JSON_ERROR_CTRL_CHAR:
	            echo ' - Некорректный управляющий символ';
	        break;
	        case JSON_ERROR_SYNTAX:
	            echo ' - Синтаксическая ошибка, некорректный JSON';
	        break;
	        case JSON_ERROR_UTF8:
	            echo ' - Некорректные символы UTF-8, возможно неверно закодирован';
	        break;
	        default:
	            echo ' - Неизвестная ошибка';
	        break;
	    }		
    }		
}

function processHTMLNode($htmlNode, $translationDitionary)
{
	foreach ($htmlNode->childNodes as $item)	
	{
		if ($item->nodeType === XML_ELEMENT_NODE)
		{
			$translationKey = $item->getAttribute('data-i18n');
			if ($translationKey !== NULL && strlen($translationKey) > 0)
			{
				$atrubuteName = '';
				$posLeftAttributeBracket = strpos($translationKey, '[');
				if ($posLeftAttributeBracket !== false)
				{
					$posRightAttributeBracket = strpos($translationKey, ']');
					if ($posRightAttributeBracket !== false && $posLeftAttributeBracket < $posRightAttributeBracket)
					{
						$atrubuteName = substr($translationKey, $posLeftAttributeBracket + 1, $posRightAttributeBracket - ($posLeftAttributeBracket + 1));
						$translationKey = substr($translationKey, $posRightAttributeBracket + 1);
					}
				}

				$translationValue = $translationDitionary[$translationKey];
				if ($translationValue !== NULL)
				{
					if ($atrubuteName === '')
					{
						$item->textContent = $translationValue;
					}
					else
					{
						$item->setAttribute($atrubuteName, $translationValue);	
					}
				}
				else if (showLogs())
				{
					echo "Unable to find translation for key: ".$translationKey."<br>";
				}
			}
		}
		if ($item->nodeType === XML_ELEMENT_NODE || $item->nodeType === XML_ENTITY_NODE || $item->nodeType === XML_DOCUMENT_NODE)
		{
			processHTMLNode($item, $translationDitionary);
		}
	}
}

$doc = new DOMDocument();
$file = file_get_contents('./index_nolang.html', true);
$doc->loadHTML($file);

$resultString = "";
$langVal = $_GET["lang"];

$shouldTranslateOnLoad = false;
if (empty($langVal))
{
	// Translate to russian by default
	$langVal = 'ru';
	$shouldTranslateOnLoad  = false;
	$translatedHtmlFilePath = './index_'.$langVal.'_translate_on_load.html';
}
else
{
	$translatedHtmlFilePath = './index_'.$langVal.'.html';
}
if (file_exists($translatedHtmlFilePath))
{
	$resultString = file_get_contents($translatedHtmlFilePath, true);
}
else
{
	$langJSONPath = './locales/'.$langVal.'/translation.json';
	if (file_exists($langJSONPath))
	{
		$json = file_get_contents($langJSONPath, FILE_USE_INCLUDE_PATH);
		//var_dump($json);
		$jsonIterator = json_decode($json, JSON_UNESCAPED_UNICODE);

		
		handleJSONError();

		if (json_last_error() === JSON_ERROR_NONE)
		{
			processHTMLNode($doc, $jsonIterator);

		}
		
		if ($shouldTranslateOnLoad === false)
		{
			// Disable OnLoad page translation
			$doc->documentElement->setAttribute('noinitialtranslate', 'true');
		}
		$doc->documentElement->setAttribute('lang', $langVal);
		$doc->documentElement->setAttribute('creationDate', date("Y-m-d H:i:s"));
		$resultString = html_entity_decode($doc->saveHTML(), ENT_NOQUOTES, 'UTF-8');

		// Apply settings
		$settingsJSONFile = 'settings.json';
		if (file_exists($settingsJSONFile))
		{
			$json = file_get_contents($settingsJSONFile, FILE_USE_INCLUDE_PATH);
			$jsonIterator = json_decode($json, JSON_UNESCAPED_UNICODE);

			handleJSONError();

			if (json_last_error() === JSON_ERROR_NONE)
			{

				$appMinJSFile = './assets/js/app.min.js';
				$appJS = file_get_contents($appMinJSFile, FILE_USE_INCLUDE_PATH);

				$femalePriceValue = strval($jsonIterator['female_regular_price']);
				$resultString = str_replace('female_regular_price', $femalePriceValue, $resultString);
				$appJS = str_replace('female_regular_price', $femalePriceValue, $appJS);

				$femaleWeekendsPriceValue = strval($jsonIterator['female_weekends_price']);
				$resultString = str_replace('female_weekends_price', $femaleWeekendsPriceValue, $resultString);
				$appJS = str_replace('female_weekends_price', $femaleWeekendsPriceValue, $appJS);
								
				$regularPriceValue = strval($jsonIterator['regular_price']);
				$resultString = str_replace('regular_price', $regularPriceValue, $resultString);
				$appJS = str_replace('regular_price', $regularPriceValue, $appJS);

				$weekendsPriceValue = strval($jsonIterator['weekends_price']);
				$resultString = str_replace('weekends_price', $weekendsPriceValue, $resultString);
				$appJS = str_replace('weekends_price', $weekendsPriceValue, $appJS);

				$breakfastPriceValue = strval($jsonIterator['breakfast_price']);
				$resultString = str_replace('breakfast_price', $breakfastPriceValue, $resultString);
				$appJS = str_replace('breakfast_price', $breakfastPriceValue, $appJS);

				file_put_contents($appMinJSFile, $appJS);


				$jivositeCode = $jsonIterator['jivo_'.$langVal];

				if ($weekendsPriceValue !== NULL && $weekendsPriceValue !== '' && isset($jsonIterator['jivo_'.$langVal]))
				{
					$resultString = str_replace('rMTKjMEysI', $jivositeCode, $resultString);					
				}
			}
			else
			{
				echo 'Unable to open settings.json';
			}
		}
		else
		{
			echo 'Unable to find settings.json';
		}			

		/*if (strtoupper($langVal) !== 'RU')
		{
			$resultString = str_replace('<script src="//code.jivosite.com/widget/rMTKjMEysI" async></script>', '<script src="//code.jivosite.com/widget/DuGM4gb2Vo" async></script>', $resultString);
		}*/

		$resultString = str_replace('/?lang=ru', '/', $resultString);

		file_put_contents($translatedHtmlFilePath, $resultString);
	}
	else
	{
		if (showLogs())
		{
			echo 'Translation file:  '.$langJSONPath.' did not found';
		}
	}
}

if ($resultString === '')
{
	$resultString = file_get_contents('./index_nolang.html', true);
}
echo $resultString;

?>
