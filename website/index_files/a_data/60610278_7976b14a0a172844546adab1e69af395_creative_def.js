(function() {
  var creativeDefinition = {
    customScriptUrl: '',
    isDynamic: false,
    delayedImpression: false,
    standardEventIds: {
      DISPLAY_TIMER: '72',
      INTERACTION_TIMER: '73',
      INTERACTIVE_IMPRESSION: '74',
      MANUAL_CLOSE: '75',
      BACKUP_IMAGE_IMPRESSION: '76',
      EXPAND_TIMER: '77',
      FULL_SCREEN: '78',
      VIDEO_PLAY: '79',
      VIDEO_VIEW_TIMER: '80',
      VIDEO_COMPLETE: '81',
      VIDEO_INTERACTION: '82',
      VIDEO_PAUSE: '83',
      VIDEO_MUTE: '84',
      VIDEO_REPLAY: '85',
      VIDEO_MIDPOINT: '86',
      VIDEO_STOP: '87',
      VIDEO_UNMUTE: '88',
      DYNAMIC_CREATIVE_IMPRESSION: '',
      HTML5_CREATIVE_IMPRESSION: ''
    },
    exitEvents: [
      {
        name: 'backup_image',
        reportingId: '22937306',
        url: 'https://partners.wsj.com/accenture/power-of-the-new/higher-ai-investment-can-boost-revenue-and-employment/',
        targetWindow: '_blank',
        windowProperties: ''
      }
    ],
    timerEvents: [
    ],
    counterEvents: [
      {
        name: 'breadcrumb',
        reportingId: '181368767',
        videoData: null
      },
      {
        name: 'left arrow',
        reportingId: '181360708',
        videoData: null
      },
      {
        name: 'right arrow',
        reportingId: '181360705',
        videoData: null
      },
      {
        name: 'slot1',
        reportingId: '22886666',
        videoData: null
      },
      {
        name: 'slot10',
        reportingId: '22938746',
        videoData: null
      },
      {
        name: 'slot2',
        reportingId: '22886426',
        videoData: null
      },
      {
        name: 'slot3',
        reportingId: '22938026',
        videoData: null
      },
      {
        name: 'slot4',
        reportingId: '22938266',
        videoData: null
      },
      {
        name: 'slot5',
        reportingId: '22937546',
        videoData: null
      },
      {
        name: 'slot6',
        reportingId: '22937786',
        videoData: null
      },
      {
        name: 'slot7',
        reportingId: '22938986',
        videoData: null
      },
      {
        name: 'slot8',
        reportingId: '22939466',
        videoData: null
      },
      {
        name: 'slot9',
        reportingId: '22938506',
        videoData: null
      }
    ],
    childFiles: [
      {
        name: 'ajax-loader.gif',
        url: '/ads/richmedia/studio/pv2/60628656/20180404171005040/img/ajax-loader.gif',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: '600x400.png',
        url: '/ads/richmedia/studio/pv2/60628656/20180404171005040/img/600x400.png',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'line_items.js',
        url: '/ads/richmedia/studio/pv2/60628656/20180404171005040/js/line_items.js',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'main.css',
        url: '/ads/richmedia/studio/pv2/60628656/20180404171005040/css/main.css',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'normalize.min.css',
        url: '/ads/richmedia/studio/pv2/60628656/20180404171005040/css/normalize.min.css',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'background.jpg',
        url: '/ads/richmedia/studio/pv2/60628656/20180404171005040/img/background.jpg',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'backup.jpg',
        url: '/ads/richmedia/studio/pv2/60628656/20180404171005040/img/backup.jpg',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'main.js',
        url: '/ads/richmedia/studio/pv2/60628656/20180404171005040/js/main.js',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'learn_more.jpg',
        url: '/ads/richmedia/studio/pv2/60628656/20180404171005040/img/learn_more.jpg',
        isVideo: false,
        transcodeInformation: null
      }
    ],
    videoFiles: [
    ],
    videoEntries: [
    ],
    primaryAssets: [
      {
        id: '66171939',
        artworkType: 'HTML5',
        displayType: 'BANNER',
        width: '970',
        height: '250',
        servingPath: '/ads/richmedia/studio/pv2/60628656/20180404171005040/index.html',
        zIndex: '1000000',
        customCss: '',
        flashArtworkTypeData: null,
        htmlArtworkTypeData: {
          isTransparent: false,
          sdkVersion: '01_221' // Duplicating sdk version in subsequent field as version format not the same.
        },
        floatingDisplayTypeData: null,
        expandingDisplayTypeData: null,
        imageGalleryTypeData: null,
        pageSettings:null,
layoutsConfig: null,
layoutsApi: null
      }
    ]
  }
  var rendererDisplayType = '';
  rendererDisplayType += 'html_';
  var rendererFormat = 'inpage';
  var rendererName = rendererDisplayType + rendererFormat;

  var creativeId = '138237331112';
  var adId = '0';
  var templateVersion = '200_241';
  var studioObjects = window['studioV2'] = window['studioV2'] || {};
  var creativeObjects = studioObjects['creatives'] = studioObjects['creatives'] || {};
  var creativeKey = [creativeId, adId].join('_');
  var creative = creativeObjects[creativeKey] = creativeObjects[creativeKey] || {};
  creative['creativeDefinition'] = creativeDefinition;
  var adResponses = creative['adResponses'] || [];
  for (var i = 0; i < adResponses.length; i++) {
    adResponses[i].creativeDto && adResponses[i].creativeDto.csiEvents &&
        (adResponses[i].creativeDto.csiEvents['pe'] =
            adResponses[i].creativeDto.csiEvents['pe'] || (+new Date));
  }
  var loadedLibraries = studioObjects['loadedLibraries'] = studioObjects['loadedLibraries'] || {};
  var versionedLibrary = loadedLibraries[templateVersion] = loadedLibraries[templateVersion] || {};
  var typedLibrary = versionedLibrary[rendererName] = versionedLibrary[rendererName] || {};
  if (typedLibrary['bootstrap']) {
    typedLibrary.bootstrap();
  }
})();
