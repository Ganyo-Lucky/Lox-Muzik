(() => {
  const authPage = document.querySelector("#auth-page");
  const appShell = document.querySelector("#app-shell");
  const menuLoginButton = document.querySelector("#menu-login-button");
  const topProfileButton = document.querySelector("#top-profile-button");
  const loginForm = document.querySelector("#login-form");
  const socialAuthMessage = document.querySelector("#social-auth-message");
  const supabaseClient = window.supabase?.createClient("https://gxxgjkqmagkqqindihes.supabase.co", "sb_publishable_MQ_31skTckUXUuGzRsSSGg_wqxGpSwD");
  const accountTypeCards = Array.from(document.querySelectorAll("[data-account-type]"));
  const creatorView = document.querySelector("#creator-view");
  const browseView = document.querySelector("#browse-view");
  const welcomeHero = document.querySelector("#home-welcome-hero");
  const welcomeKicker = document.querySelector("#welcome-kicker");
  const welcomeTitle = document.querySelector("#browse-view-title");
  const welcomeDescription = document.querySelector("#welcome-description");
  const welcomeAction = document.querySelector("#welcome-action");
  const welcomeSlideDots = Array.from(document.querySelectorAll("[data-welcome-slide]"));
  const likesView = document.querySelector("#likes-view");
  const creatorNavGroup = document.querySelector("#creator-nav-group");
  const libraryNavGroup = document.querySelector("#library-nav-group");
  const sidebarBottom = document.querySelector(".sidebar-bottom");
  const trendsNavLink = document.querySelector("#trends-nav-link");
  const discoverNavLabel = document.querySelector("#discover-nav-label");
  const mobileCreatorNav = document.querySelector("#mobile-creator-nav");
  const mobileProfileNav = document.querySelector("#mobile-profile-nav");
  const mobileHomeNav = document.querySelector("#mobile-home-nav");
  const mobileLibraryNav = document.querySelector("#mobile-library-nav");
  const mobileSavedNav = document.querySelector("#mobile-saved-nav");
  const mobileTrendsNav = document.querySelector("#mobile-trends-nav");
  const discoverBrowseNavLink = document.querySelector(".discover-group [data-view='browse']");
  const creatorSongForm = document.querySelector("#creator-song-form");
  const creatorAudioFile = document.querySelector("#creator-audio-file");
  const creatorSongTitle = document.querySelector("#creator-song-title");
  const creatorSongArtist = document.querySelector("#creator-song-artist");
  const creatorProfilePhotoInput = document.querySelector("#creator-profile-photo");
  const creatorProfilePhotoRemove = document.querySelector("#creator-profile-photo-remove");
  const settingsAccountAvatar = document.querySelector("#settings-account-avatar");
  const settingsAccountName = document.querySelector("#settings-account-name");
  const settingsAccountEmail = document.querySelector("#settings-account-email");
  const settingsAccountRole = document.querySelector("#settings-account-role");
  const accountProfileView = document.querySelector("#account-profile-view");
  const accountProfileAvatar = document.querySelector("#account-profile-avatar");
  const accountProfileName = document.querySelector("#account-profile-name");
  const accountProfileEmail = document.querySelector("#account-profile-email");
  const accountProfileRole = document.querySelector("#account-profile-role");
  const accountProfileBackButton = document.querySelector("#account-profile-back");
  const accountProfileSettingsButton = document.querySelector("#account-profile-settings");
  const accountProfileArtistButton = document.querySelector("#account-profile-artist");
  const accountProfileLogoutButton = document.querySelector("#account-profile-logout");
  const deleteAccountButton = document.querySelector("#delete-account-button");
  const crossfadeToggle = document.querySelector("#crossfade-toggle");
  const crossfadeDuration = document.querySelector("#crossfade-duration");
  const crossfadeDurationValue = document.querySelector("#crossfade-duration-value");
  const crossfadeSecondsCopy = document.querySelector("#crossfade-seconds-copy");
  const audioQualitySelect = document.querySelector("#audio-quality-select");
  const soundEffectSelect = document.querySelector("#sound-effect-select");
  const screenLockToggle = document.querySelector("#screen-lock-toggle");
  let isLoggedIn = false;
  let currentRole = null;
  let isArtistProfileEditing = false;
  let profileReturnView = "browse";
  let accountEmail = "";
  let creatorName = "";
  let selectedAccountType = "listener";
  let isSignUp = false;
  let audio = document.querySelector("#audio-player");
  let standbyAudio = document.querySelector("#crossfade-audio");
  const radioAudio = document.querySelector("#radio-audio");
  const radioView = document.querySelector("#radio-view");
  const radioStationsGrid = document.querySelector("#radio-stations-grid");
  const radioAddStation = document.querySelector(".radio-add-station");
  const radioSourceNote = document.querySelector(".radio-source-note");
  const radioSearchEmpty = document.querySelector("#radio-search-empty");
  const radioNowPlaying = document.querySelector("#radio-now-playing");
  const radioLiveStatus = document.querySelector("#radio-live-status");
  const radioNowTitle = document.querySelector("#radio-now-title");
  const radioNowDetails = document.querySelector("#radio-now-details");
  const radioToggleButton = document.querySelector("#radio-toggle-button");
  const radioStopButton = document.querySelector("#radio-stop-button");
  const radioVolume = document.querySelector("#radio-volume");
  const radioMiniPlayer = document.querySelector("#radio-mini-player");
  const radioMiniTitle = document.querySelector("#radio-mini-title");
  const radioMiniStatus = document.querySelector("#radio-mini-status");
  const radioMiniToggle = document.querySelector("#radio-mini-toggle");
  const radioMiniClose = document.querySelector("#radio-mini-close");
  const settingsButton = document.querySelector("#settings-button");
  const settingsView = document.querySelector("#settings-view");
  const settingsBackButton = document.querySelector("#settings-back");
  const notificationsButton = document.querySelector("#notifications-button");
  const notificationsPanel = document.querySelector("#notifications-panel");
  const searchResultsPanel = document.querySelector("#search-results");
  const notificationsList = document.querySelector("#notifications-list");
  const notificationsEmpty = document.querySelector("#notifications-empty");
  const notificationStatus = document.querySelector("#notification-status");
  const notificationCount = document.querySelector("#notification-count");
  const settingsVolume = document.querySelector("#settings-volume");
  const settingsVolumeValue = document.querySelector("#settings-volume-value");
  const reduceMotionToggle = document.querySelector("#reduce-motion-toggle");
  const colorThemeSelect = document.querySelector("#color-theme-select");
  const playbackSpeedSelect = document.querySelector("#playback-speed-select");
  const autoplayNextToggle = document.querySelector("#autoplay-next-toggle");
  const repeatModeSelect = document.querySelector("#repeat-mode-select");
  const artistsView = document.querySelector("#artists-view");
  const releaseView = document.querySelector("#release-view");
  const releaseHero = document.querySelector("#release-hero");
  const releaseGrid = document.querySelector("#release-grid");
  const releaseEmpty = document.querySelector("#release-empty");
  const downloadsView = document.querySelector("#downloads-view");
  const downloadsList = document.querySelector("#downloads-list");
  const downloadsEmpty = document.querySelector("#downloads-empty");
  const downloadsCount = document.querySelector("#downloads-count");
  const downloadDestinationDialog = document.querySelector("#download-destination-dialog");
  const downloadDestinationTrack = document.querySelector("#download-destination-track");
  const downloadToDeviceButton = document.querySelector("#download-to-device");
  const downloadToLibraryButton = document.querySelector("#download-to-library");
  const cancelDownloadDestinationButton = document.querySelector("#cancel-download-destination");
  const songFilters = document.querySelector("#song-filters");
  const songTaxonomyFilters = document.querySelector(".song-taxonomy-filters");
  const songCategoryFilter = document.querySelector("#song-category-filter");
  const songGenreFilter = document.querySelector("#song-genre-filter");
  const artistsDirectory = document.querySelector("#artists-directory");
  const artistsGrid = document.querySelector("#artists-grid");
  const artistDetail = document.querySelector("#artist-detail");
  const artistHero = document.querySelector("#artist-hero");
  const artistTrackList = document.querySelector("#artist-track-list");
  const popularArtistsGrid = document.querySelector("#popular-artists-grid");
  const trendingGrid = document.querySelector("#trending-grid");
  const trendChartList = document.querySelector("#trend-chart-list");
  const trendChartMore = document.querySelector("#trend-chart-more");
  const popularReleasesGrid = document.querySelector("#popular-releases-grid");
  const popularRadioGrid = document.querySelector("#popular-radio-grid");
  const madeForYouCards = document.querySelector("#made-for-you-cards");
  const playedHistoryGrid = document.querySelector("#played-history-grid");
  const playedHistoryEmpty = document.querySelector("#played-history-empty");
  const searchInput = document.querySelector("#search-input");
  const mobileSearchButton = document.querySelector("[data-focus-search]");
  const progress = document.querySelector("#progress");
  const playlistLinks = document.querySelector("#playlist-links");
  const tracks = [];
  const offlineTracks = [];
  let pendingDownloadRequest = null;
  let offlineDatabasePromise = null;
  let offlineTracksLoadPromise = Promise.resolve();
  const openOfflineDatabase = () => {
    if (!window.indexedDB) return Promise.reject(new Error("Offline storage is not available in this browser."));
    if (offlineDatabasePromise) return offlineDatabasePromise;
    offlineDatabasePromise = new Promise((resolve, reject) => {
      const request = window.indexedDB.open("lox-muzik-offline", 1);
      request.onupgradeneeded = () => {
        const database = request.result;
        const store = database.objectStoreNames.contains("downloads")
          ? request.transaction.objectStore("downloads")
          : database.createObjectStore("downloads", { keyPath: "key" });
        if (!store.indexNames.contains("accountEmail")) store.createIndex("accountEmail", "accountEmail", { unique: false });
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error || new Error("Could not open offline song storage."));
      request.onblocked = () => reject(new Error("Offline song storage is blocked by another open app tab."));
    });
    return offlineDatabasePromise;
  };
  const readOfflineDownloads = async (email) => {
    const database = await openOfflineDatabase();
    return new Promise((resolve, reject) => {
      const transaction = database.transaction("downloads", "readonly");
      const request = transaction.objectStore("downloads").index("accountEmail").getAll(email);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error || new Error("Could not read your offline songs."));
      transaction.onerror = () => reject(transaction.error || new Error("Could not read your offline songs."));
    });
  };
  const writeOfflineDownload = async (record) => {
    const database = await openOfflineDatabase();
    return new Promise((resolve, reject) => {
      const transaction = database.transaction("downloads", "readwrite");
      transaction.objectStore("downloads").put(record);
      transaction.oncomplete = () => resolve();
      transaction.onerror = () => reject(transaction.error || new Error("Could not save this song for offline listening."));
      transaction.onabort = () => reject(transaction.error || new Error("Saving this offline song was cancelled."));
    });
  };
  const deleteOfflineDownload = async (key) => {
    const database = await openOfflineDatabase();
    return new Promise((resolve, reject) => {
      const transaction = database.transaction("downloads", "readwrite");
      transaction.objectStore("downloads").delete(key);
      transaction.oncomplete = () => resolve();
      transaction.onerror = () => reject(transaction.error || new Error("Could not remove this offline song."));
      transaction.onabort = () => reject(transaction.error || new Error("Removing this offline song was cancelled."));
    });
  };
  const readStoredValue = (key, fallback) => {
    try {
      const saved = window.localStorage.getItem(key);
      return saved ? JSON.parse(saved) : fallback;
    } catch {
      return fallback;
    }
  };
  const writeStoredValue = (key, value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  };
  const welcomeSlides = [
    {
      kicker: "WELCOME TO",
      title: "Lox-Muzik",
      description: "Your home for the best music, trending sounds, artists and more.",
      actionLabel: "▶  Start Listening",
      action: "play",
    },
    {
      kicker: "DISCOVER YOUR SOUND",
      title: "Find your next favorite.",
      description: "Explore new releases, discover artists, and keep your music close.",
      actionLabel: "Explore artists",
      action: "artists",
    },
    {
      kicker: "LIVE BROADCASTS",
      title: "Tune in from anywhere.",
      description: "Find music, news, and live radio from stations across Ghana.",
      actionLabel: "Listen to radio",
      action: "radio",
    },
  ];
  const storedCreatorNames = readStoredValue("loxMuzikCreatorNames", {});
  const creatorNames = storedCreatorNames && typeof storedCreatorNames === "object" && !Array.isArray(storedCreatorNames)
    ? storedCreatorNames
    : {};
  const storedCreatorProfiles = readStoredValue("loxMuzikCreatorProfiles", {});
  const creatorProfiles = storedCreatorProfiles && typeof storedCreatorProfiles === "object" && !Array.isArray(storedCreatorProfiles)
    ? storedCreatorProfiles
    : {};
  let creatorProfile = { bio: "", location: "", genres: "", website: "", photoUrl: "" };
  let profilePhotoChanged = false;
  let profilePhotoPreviewUrl = "";
  const storedCreatorStations = readStoredValue("loxMuzikCreatorStations", []);
  const creatorStations = Array.isArray(storedCreatorStations) ? storedCreatorStations : [];
  const artistArtwork = new Map([
    ["lucky dube", {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/Legendary_Lucky_Dube.jpg/330px-Legendary_Lucky_Dube.jpg",
      credit: "Lucky Dube by Music Updater Uganda, CC BY-SA 4.0, Wikimedia Commons — https://commons.wikimedia.org/wiki/File:Legendary_Lucky_Dube.jpg",
    }],
    ["black sherif", {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Black_Sherif_in_Virginia.jpg/330px-Black_Sherif_in_Virginia.jpg",
      credit: "Black Sherif in Virginia by Oppong Ashmond, CC BY-SA 4.0, Wikimedia Commons — https://commons.wikimedia.org/wiki/File:Black_Sherif_in_Virginia.jpg",
    }],
    ["burna boy", {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Burna%20Boy%20%28cropped%29.jpg?width=330",
      credit: "Burna Boy by Ameyaw Debrah, CC BY-SA 3.0, Wikimedia Commons — https://commons.wikimedia.org/wiki/File:Burna_Boy_(cropped).jpg",
    }],
    ["wizkid", {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Wizkid%20at%20Iyanya%27s%20album%20launch%20concert%2C%202013%20%28cropped%29.jpg?width=330",
      credit: "Wizkid by TCD Photography, CC BY-SA 3.0, Wikimedia Commons — https://commons.wikimedia.org/wiki/File:Wizkid_at_Iyanya%27s_album_launch_concert,_2013_(cropped).jpg",
    }],
    ["sarkodie", {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Sarkodie%202.jpg?width=330",
      credit: "Sarkodie by Ameyaw Debrah, CC BY-SA 3.0, Wikimedia Commons — https://commons.wikimedia.org/wiki/File:Sarkodie_2.jpg",
    }],
    ["stonebwoy", {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Stonebwoy%20Burniton.JPG?width=330",
      credit: "Stonebwoy by Gilbertasante1234, CC BY-SA 4.0, Wikimedia Commons — https://commons.wikimedia.org/wiki/File:Stonebwoy_Burniton.JPG",
    }],
    ["tems", {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Tems%20on%20NdaniTV%20Sessions%20Jan%202019.jpg?width=330",
      credit: "Tems by NdaniTV, CC BY 3.0, Wikimedia Commons — https://commons.wikimedia.org/wiki/File:Tems_on_NdaniTV_Sessions_Jan_2019.jpg",
    }],
    ["ayra starr", {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ayra_Starr.jpg?width=330",
      credit: "Ayra Starr by Capital FM Kenya, CC BY 3.0, Wikimedia Commons — https://commons.wikimedia.org/wiki/File:Ayra_Starr.jpg",
    }],
    ["davido", {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Davido.jpg?width=330",
      credit: "Davido by Ameyaw Debrah, CC BY 3.0, Wikimedia Commons — https://commons.wikimedia.org/wiki/File:Davido.jpg",
    }],
    ["rema", {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Rema%20at%202019%20LFW%20%28cropped%292.png?width=330",
      credit: "Rema at Lagos Fashion Week by Thealfe Studios, CC BY-SA 4.0, Wikimedia Commons — https://commons.wikimedia.org/wiki/File:Rema_at_2019_LFW_(cropped)2.png",
    }],
    ["asake", {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Asake%20in%202024%20performing%20at%20a%20Toronto%20concert.png?width=330",
      credit: "Asake by Mensah Memories, CC BY 3.0, Wikimedia Commons — https://commons.wikimedia.org/wiki/File:Asake_in_2024_performing_at_a_Toronto_concert.png",
    }],
    ["tiwa savage", {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Tiwa_Savage%27s_studio_portrait.jpg?width=330",
      credit: "Tiwa Savage by TCD Photography, CC BY-SA 3.0, Wikimedia Commons — https://commons.wikimedia.org/wiki/File:Tiwa_Savage%27s_studio_portrait.jpg",
    }],
    ["yemi alade", {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/YEMI%20ALADE%20IN%20FEMUA%2022.jpg?width=330",
      credit: "Yemi Alade by Aman ADO, CC0, Wikimedia Commons — https://commons.wikimedia.org/wiki/File:YEMI_ALADE_IN_FEMUA_22.jpg",
    }],
  ]);
  const savedArtistArtwork = readStoredValue("loxMuzikArtistArtwork", {});
  const cachedArtistArtwork = savedArtistArtwork && typeof savedArtistArtwork === "object" && !Array.isArray(savedArtistArtwork)
    ? savedArtistArtwork
    : {};
  const artistArtworkRequests = new Map();
  const radioStations = [
    {
      id: "citi-fm",
      name: "Citi FM",
      badge: "97.3",
      location: "Accra, Ghana",
      format: "News · Music · Talk",
      streamUrl: "https://citi973fm.radioca.st/index.html:80/;stream.mp3",
    },
    {
      id: "joy-fm",
      name: "Joy FM",
      badge: "99.7",
      location: "Accra, Ghana",
      format: "News · Music · Talk",
      streamUrl: "https://mmg.streamguys1.com/JoyFM-mp3",
    },
    {
      id: "peace-fm",
      name: "Peace FM",
      badge: "104.3",
      location: "Accra, Ghana",
      format: "News · Music · Talk",
      streamUrl: "https://peacefm-atunwadigital.streamguys1.com/peacefm",
    },
    {
      id: "adom-fm",
      name: "Adom FM",
      badge: "106.3",
      location: "Accra, Ghana",
      format: "News · Music · Talk",
      streamUrl: "https://mmg.streamguys1.com/AdomFM-mp3",
    },
    {
      id: "asempa-fm",
      name: "Asempa FM",
      badge: "94.7",
      location: "Accra, Ghana",
      format: "News · Music · Talk",
      streamUrl: "https://mmg.streamguys1.com/AsempaFM-mp3",
    },
    {
      id: "ghana-music-radio",
      name: "Ghana Music Radio",
      badge: "GMR",
      location: "Ghana · Online",
      format: "Ghanaian music",
      streamUrl: "https://streaming.radio.co/s92f890821/listen",
    },
    {
      id: "agoo-fm",
      name: "Agoo 96.9 FM",
      badge: "96.9",
      location: "Eastern Region, Ghana",
      format: "Music · News · Talk",
      streamUrl: "https://agoofm-atunwadigital.streamguys1.com/agoofm",
    },
    {
      id: "angel-fm",
      name: "Angel FM",
      badge: "ANGEL",
      location: "Ghana",
      format: "Music · Entertainment",
      streamUrl: "https://atunwadigital.streamguys1.com/angelfm",
    },
    {
      id: "hello-fm",
      name: "Hello FM",
      badge: "HELLO",
      location: "Kumasi, Ghana",
      format: "Music · News",
      streamUrl: "https://atunwadigital.streamguys1.com/hellofm",
    },
    {
      id: "hitz-fm",
      name: "Hitz FM",
      badge: "103.9",
      location: "Accra, Ghana",
      format: "Music · Entertainment",
      streamUrl: "https://mmg.streamguys1.com/HitzFM-mp3",
    },
    {
      id: "gbc-uniiq",
      name: "GBC Uniiq FM",
      badge: "95.7",
      location: "Accra, Ghana",
      format: "Music · Local radio",
      streamUrl: "https://mediagh.us:2000/stream/uniiqfm",
    },
    {
      id: "yfm-accra",
      name: "YFM Accra",
      badge: "107.9",
      location: "Accra, Ghana",
      format: "Music · Entertainment",
      streamUrl: "https://atunwadigital.streamguys1.com/yfm1079accra",
    },
    {
      id: "neat-fm",
      name: "Neat FM",
      badge: "NEAT",
      location: "Ghana",
      format: "Music · News · Talk",
      streamUrl: "https://atunwadigital.streamguys1.com/neatfm",
    },
    {
      id: "box-lofi-radio",
      name: "Box Lofi Radio",
      badge: "LOFI",
      location: "Ghana · Online",
      format: "Lo-fi · Study beats",
      streamUrl: "https://stream.zeno.fm/tabzverz0fctv",
    },
  ];
  creatorStations.forEach((station) => {
    if (!station || typeof station !== "object" || !station.name || !station.streamUrl) return;
    try {
      const streamUrl = new URL(station.streamUrl);
      if (!["https:", "http:"].includes(streamUrl.protocol)) return;
      radioStations.push({ ...station, streamUrl: streamUrl.href });
    } catch {
      // Ignore invalid station data saved by an older or edited local copy.
    }
  });
  const normalizeArtistKey = (name) => String(name || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
  const artistNameAliases = new Map([
    ["bnxn", "BNXN"],
    ["kidi", "KiDi"],
    ["shensea", "Shenseea"],
    ["kojo", "Kojo Blak"],
    ["kojo black", "Kojo Blak"],
    ["stonebwoy", "Stonebwoy"],
    ["zerrydl", "Zerrydl"],
  ]);
  const canonicalizeArtistName = (name) => {
    const trimmed = String(name || "").trim();
    return artistNameAliases.get(normalizeArtistKey(trimmed)) || trimmed;
  };
  const splitArtistCredits = (credit) => String(credit || "")
    .replace(/\bTones\s+And\s+I\b/gi, "__TONES_AND_I__")
    .split(/\s*(?:,|;|&|\bfeat(?:uring)?\.?|\bft\.?|\bwith\b)\s*/i)
    .map((name) => canonicalizeArtistName(name.replace(/__TONES_AND_I__/gi, "Tones And I")))
    .filter(Boolean);
  const localCatalogTracks = (Array.isArray(window.LOX_MUZIK_CATALOG) ? window.LOX_MUZIK_CATALOG : [])
    .map((track, index) => {
      const artistNames = (Array.isArray(track.artistNames) && track.artistNames.length
        ? track.artistNames
        : splitArtistCredits(track.artist)).map(canonicalizeArtistName);
      return {
        ...track,
        id: `folder-${track.id}`,
        artistNames,
        artist: artistNames.join(" feat. "),
        releaseType: track.releaseType || "single",
        art: Number.isInteger(track.art) ? track.art : index % 5,
        duration: Number(track.duration) || 0,
        coverUrl: track.coverUrl || null,
        liked: false,
        searches: 0,
        downloads: 0,
        plays: 0,
        isFolderTrack: true,
      };
    });
  const localFeaturedTracks = [
    "Black-Sherif-Only-God.mp3",
    "Burna_Boy_It_s_Plenty.mp3",
    "Ayra_Starr_All_The_Love.mp3",
    "Asake_Lonely_At_The_Top.mp3",
    "Davido-Be-There-Still-(Vistanaij.com).mp3",
    "Rema_Azaman.mp3",
    "Stonebwoy_feat_Ginton_Jejereje.mp3",
    "Tiwa_Savage_feat_Ayra_Starr_feat_Young_Jonn_Stamina.mp3",
    "Lucky-Dube-Prisoner.mp3",
    "Olamide_feat_Wizkid_feat_Darkoo_Billionaires_Club.mp3",
  ].map((fileName, index) => {
    const track = localCatalogTracks.find((item) => item.fileName === fileName);
    return track ? { ...track, isLocalFeatured: true, art: index % 5 } : null;
  }).filter(Boolean);
  const playlists = [];
  const playedTrackIds = [];
  const storedArtistEngagement = readStoredValue("loxMuzikArtistEngagement", {});
  const artistEngagement = new Map(
    storedArtistEngagement && typeof storedArtistEngagement === "object" && !Array.isArray(storedArtistEngagement)
      ? Object.entries(storedArtistEngagement).filter(([, engagement]) => engagement && typeof engagement === "object")
      : [],
  );
  const storedTrackLikes = readStoredValue("loxMuzikTrackLikes", {});
  const trackLikesByTrack = new Map(
    storedTrackLikes && typeof storedTrackLikes === "object" && !Array.isArray(storedTrackLikes)
      ? Object.entries(storedTrackLikes).filter(([, actors]) => Array.isArray(actors))
      : [],
  );
  const storedCreatorNotifications = readStoredValue("loxMuzikCreatorNotifications", {});
  const creatorNotifications = storedCreatorNotifications && typeof storedCreatorNotifications === "object" && !Array.isArray(storedCreatorNotifications)
    ? storedCreatorNotifications
    : {};
  let currentTrackId = null;
  let selectedReleaseTrackId = null;
  let selectedArtistName = null;
  let activeQueue = null;
  let currentReleaseQueue = [];
  let activeView = "browse";
  let settingsReturnView = "browse";
  let currentRadioStation = null;
  let radioStatus = "Choose a station";
  let songFilter = "all";
  let selectedSongCategory = "all";
  let selectedSongGenre = "all";
  let toastTimeout;
  let searchTimeout;
  let trendOffset = 0;
  let trendChartVisibleCount = 10;
  let welcomeSlideIndex = 0;
  let selectedMadeForYouArtist = null;
  let recommendationDay;
  let artistArtworkRequestId = 0;
  let searchResultsDismissed = false;

  const elements = {
    trendingPrevious: document.querySelector("#trending-previous"),
    trendingNext: document.querySelector("#trending-next"),
    playerBar: document.querySelector(".player-bar"),
    playerArt: document.querySelector("#player-art"),
    playerTitle: document.querySelector("#player-title"),
    playerArtist: document.querySelector("#player-artist"),
    playButton: document.querySelector("#play-button"),
    likeButton: document.querySelector("#like-button"),
    downloadButton: document.querySelector("#download-button"),
    currentTime: document.querySelector("#current-time"),
    duration: document.querySelector("#duration"),
    volume: document.querySelector("#volume"),
    toast: document.querySelector("#toast"),
    songNowPlaying: document.querySelector("#song-now-playing"),
    songNowArt: document.querySelector("#song-now-art"),
    songNowTitle: document.querySelector("#song-now-title"),
    songNowArtist: document.querySelector("#song-now-artist"),
    songNowArtistInfo: document.querySelector("#song-now-artist-info"),
    songNowAlbum: document.querySelector("#song-now-album"),
    songNowGenre: document.querySelector("#song-now-genre"),
    songNowRelease: document.querySelector("#song-now-release"),
    songNowLike: document.querySelector("#song-now-like"),
    songNowPlay: document.querySelector("#song-now-play"),
    songNowShuffle: document.querySelector("#song-now-shuffle"),
    songNowPrevious: document.querySelector("#song-now-previous"),
    songNowNext: document.querySelector("#song-now-next"),
    songNowRepeat: document.querySelector("#song-now-repeat"),
    songNowCurrent: document.querySelector("#song-now-current"),
    songNowDuration: document.querySelector("#song-now-duration"),
    songNowSeek: document.querySelector("#song-now-seek"),
  };
  const setPlayerBarVisibility = (isVisible) => {
    elements.playerBar.hidden = !isVisible;
    elements.playerBar.setAttribute("aria-hidden", String(!isVisible));
  };
  const openSongNowPlaying = () => {
    if (!currentTrack()) return;
    elements.songNowPlaying.classList.add("is-open");
    elements.songNowPlaying.setAttribute("aria-hidden", "false");
  };
  const updateSongNowRepeatControl = () => {
    const mode = repeatModeSelect.value;
    const label = mode === "one" ? "Repeat one song" : mode === "all" ? "Repeat all songs" : "Repeat off";
    elements.songNowRepeat.classList.toggle("is-active", mode !== "off");
    elements.songNowRepeat.dataset.repeatMode = mode;
    elements.songNowRepeat.setAttribute("aria-label", label);
    elements.songNowRepeat.setAttribute("aria-pressed", String(mode !== "off"));
    elements.songNowRepeat.title = label;
  };
  const savedPlaybackVolume = Number(readStoredValue("loxMuzikPlaybackVolume", 0.8));
  const initialPlaybackVolume = Number.isFinite(savedPlaybackVolume)
    ? Math.max(0, Math.min(1, savedPlaybackVolume))
    : 0.8;
  elements.volume.value = String(initialPlaybackVolume);
  radioVolume.value = String(initialPlaybackVolume);
  settingsVolume.value = String(initialPlaybackVolume);
  settingsVolumeValue.value = `${Math.round(initialPlaybackVolume * 100)}%`;
  const storedColorTheme = readStoredValue("loxMuzikColorTheme", "dark");
  const initialColorTheme = storedColorTheme === "monochrome" ? "monochrome" : "dark";
  colorThemeSelect.value = initialColorTheme;
  document.body.classList.toggle("monochrome-theme", initialColorTheme === "monochrome");
  const supportedPlaybackSpeeds = [0.75, 0.9, 1, 1.1, 1.25, 1.5, 2];
  const storedPlaybackSpeed = Number(readStoredValue("loxMuzikPlaybackSpeed", 1));
  const initialPlaybackSpeed = supportedPlaybackSpeeds.includes(storedPlaybackSpeed) ? storedPlaybackSpeed : 1;
  playbackSpeedSelect.value = String(initialPlaybackSpeed);
  audio.playbackRate = initialPlaybackSpeed;
  const storedAutoplayNext = readStoredValue("loxMuzikAutoplayNext", true);
  const autoplayNext = { enabled: typeof storedAutoplayNext === "boolean" ? storedAutoplayNext : true };
  autoplayNextToggle.checked = autoplayNext.enabled;
  const storedRepeatMode = readStoredValue("loxMuzikRepeatMode", "off");
  repeatModeSelect.value = ["off", "all", "one"].includes(storedRepeatMode) ? storedRepeatMode : "off";
  updateSongNowRepeatControl();
  const crossfadeEnabled = { value: readStoredValue("loxMuzikCrossfade", false) === true };
  crossfadeToggle.checked = crossfadeEnabled.value;
  const savedCrossfadeDuration = Number(readStoredValue("loxMuzikCrossfadeDuration", 5));
  const initialCrossfadeDuration = Number.isFinite(savedCrossfadeDuration)
    ? Math.max(1, Math.min(12, Math.round(savedCrossfadeDuration)))
    : 5;
  crossfadeDuration.value = String(initialCrossfadeDuration);
  crossfadeDurationValue.value = `${initialCrossfadeDuration} sec`;
  crossfadeSecondsCopy.textContent = String(initialCrossfadeDuration);
  const savedAudioQuality = readStoredValue("loxMuzikAudioQuality", "original");
  audioQualitySelect.value = savedAudioQuality === "data-saver" ? "data-saver" : "original";
  const initialSoundEffect = ["none", "soft", "strong"].includes(readStoredValue("loxMuzikSoundEffect", "none"))
    ? readStoredValue("loxMuzikSoundEffect", "none")
    : "none";
  soundEffectSelect.value = initialSoundEffect;
  const keepScreenAwake = { enabled: readStoredValue("loxMuzikKeepScreenAwake", false) === true, lock: null };
  screenLockToggle.checked = keepScreenAwake.enabled;
  const getAudioPreload = () => audioQualitySelect.value === "data-saver" ? "metadata" : "auto";
  audio.preload = getAudioPreload();
  standbyAudio.preload = getAudioPreload();
  let crossfadeTimer = null;
  let crossfadeGeneration = 0;
  let crossfadeInProgress = false;
  let crossfadeRequestPending = false;
  let crossfadeProgress = 0;
  let screenWakeLockRequestPending = false;
  const suppressedCrossfadePlayEvents = new WeakSet();
  const storedMotionPreference = readStoredValue("loxMuzikReduceMotion", null);
  const initialReduceMotion = typeof storedMotionPreference === "boolean"
    ? storedMotionPreference
    : window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  reduceMotionToggle.checked = initialReduceMotion;
  document.body.classList.toggle("reduce-motion", initialReduceMotion);

  const formatTime = (seconds) => {
    if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
    const minutes = Math.floor(seconds / 60);
    const remainder = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${remainder}`;
  };

  const showToast = (message, position = "bottom") => {
    elements.toast.textContent = message;
    elements.toast.classList.toggle("is-top", position === "top");
    elements.toast.classList.add("is-visible");
    window.clearTimeout(toastTimeout);
    toastTimeout = window.setTimeout(() => elements.toast.classList.remove("is-visible"), 2800);
  };
  const audioPlaybackErrorMessage = () => window.location.protocol === "file:"
    ? "Open Lox-Muzik with F5 in VS Code so your browser can load the songs."
    : "This audio file could not be played in your browser.";

  const setWelcomeSlide = (index) => {
    welcomeSlideIndex = (index + welcomeSlides.length) % welcomeSlides.length;
    const slide = welcomeSlides[welcomeSlideIndex];
    welcomeHero.dataset.slide = String(welcomeSlideIndex);
    welcomeKicker.textContent = slide.kicker;
    welcomeTitle.textContent = slide.title;
    welcomeDescription.textContent = slide.description;
    welcomeAction.textContent = slide.actionLabel;
    welcomeSlideDots.forEach((button) => {
      const isActive = Number(button.dataset.welcomeSlide) === welcomeSlideIndex;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  };

  const closeTopbarPanels = () => {
    notificationsPanel.hidden = true;
    notificationsButton.setAttribute("aria-expanded", "false");
  };

  const toggleTopbarPanel = (button, panel) => {
    const shouldOpen = panel.hidden;
    closeTopbarPanels();
    if (!shouldOpen) return;
    panel.hidden = false;
    button.setAttribute("aria-expanded", "true");
  };

  const renderNotifications = () => {
    const isCreator = isLoggedIn && currentRole === "creator";
    const notifications = getCreatorNotifications();
    const unreadCount = notifications.filter((notification) => !notification.read).length;
    notificationCount.textContent = unreadCount > 99 ? "99+" : String(unreadCount);
    notificationCount.hidden = !isCreator || unreadCount === 0;
    notificationStatus.textContent = isCreator
      ? unreadCount ? `${unreadCount} NEW` : "ALL CLEAR"
      : "CREATOR ONLY";
    notificationsList.replaceChildren();
    notificationsEmpty.hidden = isCreator && notifications.length > 0;
    notificationsList.hidden = !isCreator || notifications.length === 0;

    if (!isCreator) {
      notificationsEmpty.querySelector("strong").textContent = isLoggedIn
        ? "Artist updates are for creators"
        : "Log in as a creator";
      notificationsEmpty.querySelector("p").textContent = isLoggedIn
        ? "Sign in with a Creator account to see likes and follows for your artist profile."
        : "Likes on your songs and new followers will appear here when you log in to your Creator account.";
      return;
    }

    if (!notifications.length) {
      notificationsEmpty.querySelector("strong").textContent = "No audience activity yet";
      notificationsEmpty.querySelector("p").textContent = "When listeners like one of your songs or follow your artist profile, updates will appear here.";
      return;
    }

    notifications.slice().reverse().forEach((notification) => {
      const item = document.createElement("article");
      item.className = `notification-item${notification.read ? "" : " is-unread"}`;
      const icon = document.createElement("span");
      icon.className = "notification-item-icon";
      icon.setAttribute("aria-hidden", "true");
      icon.textContent = notification.type === "follow" ? "♟" : "♥";
      const copy = document.createElement("div");
      copy.className = "notification-item-copy";
      const message = document.createElement("p");
      const actor = document.createElement("strong");
      actor.textContent = notification.actorName || "A listener";
      message.append(actor);
      message.append(document.createTextNode(notification.type === "follow"
        ? " followed your artist profile."
        : ` liked “${notification.trackTitle || "your song"}”.`));
      const details = document.createElement("small");
      const timestamp = notification.createdAt
        ? new Date(notification.createdAt).toLocaleString()
        : "Recently";
      details.textContent = `${notification.type === "follow" ? "New follower" : notification.artistName || "Your artist profile"} · ${timestamp}`;
      copy.append(message, details);
      item.append(icon, copy);
      notificationsList.append(item);
    });
  };

  const markCreatorNotificationsRead = () => {
    if (!isLoggedIn || currentRole !== "creator" || !accountEmail) return;
    const notifications = getCreatorNotifications();
    if (!notifications.some((notification) => !notification.read)) return;
    creatorNotifications[accountEmail] = notifications.map((notification) => ({ ...notification, read: true }));
    saveCreatorNotifications();
  };

  const syncAuthControls = () => {
    accountTypeCards.forEach((button) => {
      const isSelected = button.dataset.accountType === selectedAccountType;
      button.classList.toggle("is-selected", isSelected);
      button.setAttribute("aria-pressed", String(isSelected));
    });
    const roleLabel = selectedAccountType === "creator" ? "creator" : "listener";
    document.querySelector("#auth-title").textContent = isSignUp
      ? `Create your ${roleLabel} account.`
      : `Log in as a ${roleLabel}.`;
    document.querySelector("#auth-description").textContent = selectedAccountType === "creator"
      ? "Creator accounts can upload songs, add radio stations, and view audience activity."
      : "Listener accounts can explore music, play songs, follow artists, and listen to live radio.";
    document.querySelector("#auth-kicker").textContent = isSignUp ? "Create account" : "Log in";
    loginForm.elements.namedItem("password").autocomplete = isSignUp ? "new-password" : "current-password";
    document.querySelector(".auth-submit").textContent = isSignUp
      ? `Create ${roleLabel} account`
      : `Continue as ${roleLabel}`;
    document.querySelector("#signup-copy").textContent = isSignUp ? "Already have an account?" : "New to Lox-Muzik?";
    document.querySelector("#signup-toggle").textContent = isSignUp ? "Log in" : "Create an account";
  };

  const showAuthPage = (role = selectedAccountType) => {
    selectedAccountType = role;
    syncAuthControls();
    if (authPage) authPage.classList.remove("app-shell-hidden");
    if (appShell) appShell.classList.add("app-shell-hidden");
  };

  const updateLoginButtons = () => {
    const menuLabel = isLoggedIn ? "Log out" : "Log in";
    if (menuLoginButton) {
      menuLoginButton.innerHTML = '<span class="nav-icon" aria-hidden="true">◎</span> ' + menuLabel;
    }
    if (topProfileButton) {
      topProfileButton.querySelector(".profile-button-label").textContent = "Profile";
      const accessibleLabel = isLoggedIn
        ? `${currentRole === "creator" ? "Creator" : "Listener"} account profile`
        : "Profile";
      topProfileButton.setAttribute("aria-label", accessibleLabel);
      topProfileButton.title = accessibleLabel;
    }
    const username = accountEmail.split("@")[0].replace(/[._-]+/g, " ").trim();
    const displayName = currentRole === "creator" ? creatorName : username;
    settingsAccountAvatar.textContent = isLoggedIn
      ? displayName.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0].toLocaleUpperCase()).join("")
      : "♫";
    settingsAccountName.textContent = isLoggedIn ? displayName || accountEmail : "Not signed in";
    settingsAccountEmail.textContent = isLoggedIn ? accountEmail : "Sign in to view your account";
    settingsAccountRole.textContent = isLoggedIn
      ? currentRole === "creator" ? "Creator" : "Listener"
      : "Guest";
    accountProfileAvatar.textContent = isLoggedIn
      ? displayName.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0].toLocaleUpperCase()).join("")
      : "♫";
    accountProfileName.textContent = isLoggedIn ? displayName || accountEmail : "Not signed in";
    accountProfileEmail.textContent = isLoggedIn ? accountEmail : "Sign in to view your account";
    accountProfileRole.textContent = isLoggedIn
      ? currentRole === "creator" ? "Creator" : "Listener"
      : "Guest";
    accountProfileArtistButton.hidden = !isLoggedIn || currentRole !== "creator";
    deleteAccountButton.disabled = !isLoggedIn;
  };

  const requireLogin = (action) => {
    if (isLoggedIn) return true;
    showToast(`Please log in to ${action}.`);
    showAuthPage("listener");
    return false;
  };

  const requireCreator = (action) => {
    if (isLoggedIn && currentRole === "creator") return true;
    showToast(isLoggedIn
      ? `A Creator account is required to ${action}.`
      : `Log in with a Creator account to ${action}.`);
    showAuthPage("creator");
    return false;
  };

  const findTrack = (id) => tracks.find((track) => track.id === id)
    || localCatalogTracks.find((track) => track.id === id)
    || localFeaturedTracks.find((track) => track.id === id)
    || offlineTracks.find((track) => track.id === id && track.ownerEmail === accountEmail && isLoggedIn)
    || null;
  const currentTrack = () => findTrack(currentTrackId);
  const getTrackArtistNames = (track) => {
    const names = Array.isArray(track?.artistNames) && track.artistNames.length
      ? track.artistNames
      : splitArtistCredits(track?.artist);
    return Array.from(new Map(names.map(canonicalizeArtistName).map((name) => [normalizeArtistKey(name), name])).values())
      .filter(Boolean);
  };
  const getOfflineDownloadForTrack = (track) => offlineTracks.find((download) => (
    download.ownerEmail === accountEmail
    && download.originalTrackId === (track.originalTrackId || track.id)
  )) || null;
  const createOfflineTrack = (record) => ({
    ...record.track,
    id: `offline:${record.key}`,
    originalTrackId: record.trackId,
    offlineKey: record.key,
    ownerEmail: record.accountEmail,
    url: URL.createObjectURL(record.blob),
    offlineBlob: record.blob,
    isOfflineDownload: true,
  });
  const loadOfflineTracks = async (email) => {
    const records = await readOfflineDownloads(email);
    for (let index = offlineTracks.length - 1; index >= 0; index -= 1) {
      if (offlineTracks[index].ownerEmail !== email) continue;
      URL.revokeObjectURL(offlineTracks[index].url);
      offlineTracks.splice(index, 1);
    }
    offlineTracks.push(...records.map(createOfflineTrack));
    if (accountEmail === email) render();
  };
  const isSameArtist = (first, second) => normalizeArtistKey(first) === normalizeArtistKey(second);
  const getActorKey = () => isLoggedIn && accountEmail ? accountEmail : "anonymous";
  const getActorLabel = () => {
    if (!isLoggedIn || !accountEmail) return "A listener";
    if (currentRole === "creator") return creatorName || "A creator";
    return accountEmail.split("@")[0].replace(/[._-]+/g, " ").trim() || "A listener";
  };
  const getArtistEngagementRecord = (artistName) => artistEngagement.get(normalizeArtistKey(artistName)) || {
    name: canonicalizeArtistName(artistName),
    followers: [],
    likers: [],
  };
  const getArtistEngagement = (artistName) => {
    const engagement = getArtistEngagementRecord(artistName);
    const actorKey = getActorKey();
    const followers = Array.isArray(engagement.followers) ? engagement.followers : [];
    const likers = Array.isArray(engagement.likers) ? engagement.likers : [];
    return {
      liked: likers.includes(actorKey),
      followed: followers.includes(actorKey),
      followers: followers.length,
    };
  };
  const getFollowedArtistNames = () => Array.from(artistEngagement.values())
    .filter((engagement) => Array.isArray(engagement.followers) && engagement.followers.includes(getActorKey()))
    .map((engagement) => engagement.name);
  const saveArtistEngagement = () => {
    if (!writeStoredValue("loxMuzikArtistEngagement", Object.fromEntries(artistEngagement))) {
      showToast("Your artist activity could not be saved in this browser.");
    }
  };
  const getCreatorNotifications = () => {
    if (!isLoggedIn || currentRole !== "creator" || !accountEmail) return [];
    const notifications = creatorNotifications[accountEmail];
    return Array.isArray(notifications) ? notifications.filter((notification) => notification && typeof notification === "object") : [];
  };
  const saveCreatorNotifications = () => {
    if (!writeStoredValue("loxMuzikCreatorNotifications", creatorNotifications)) {
      showToast("Your notifications could not be saved in this browser.");
    }
  };
  const addCreatorNotification = (recipientEmail, notification) => {
    const recipient = String(recipientEmail || "").trim().toLocaleLowerCase();
    if (!recipient || recipient === accountEmail) return;
    const existing = Array.isArray(creatorNotifications[recipient]) ? creatorNotifications[recipient] : [];
    creatorNotifications[recipient] = [...existing, {
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      actorName: getActorLabel(),
      createdAt: new Date().toISOString(),
      read: false,
      ...notification,
    }].slice(-100);
    saveCreatorNotifications();
    renderNotifications();
  };
  const notifyTrackOwner = (track) => {
    if (track.ownerEmail) {
      addCreatorNotification(track.ownerEmail, {
        type: "like",
        artistName: getCreatorNameForTrack(track),
        trackTitle: track.title,
      });
    }
  };
  const getCreatorNameForTrack = (track) => String(creatorNames[track.ownerEmail] || track.artist || "your artist profile").trim();
  const notifyArtistFollowers = (artistName) => {
    const recipients = new Set(getReleaseTracks()
      .filter((track) => track.ownerEmail && getTrackArtistNames(track).some((name) => isSameArtist(name, artistName)))
      .map((track) => track.ownerEmail.toLocaleLowerCase())
      .filter((email) => email !== accountEmail));
    recipients.forEach((email) => addCreatorNotification(email, {
      type: "follow",
      artistName: canonicalizeArtistName(artistName),
    }));
  };
  const getTrackLikers = (track) => {
    const likers = trackLikesByTrack.get(track.id);
    return Array.isArray(likers) ? likers : [];
  };
  const isTrackLiked = (track) => getTrackLikers(track).includes(getActorKey());
  const getTrackLikeCount = (track) => getTrackLikers(track).length;
  const toggleTrackLike = (track) => {
    const actorKey = getActorKey();
    const likers = getTrackLikers(track);
    const wasLiked = likers.includes(actorKey);
    const nextLikers = wasLiked
      ? likers.filter((liker) => liker !== actorKey)
      : [...likers, actorKey];
    trackLikesByTrack.set(track.id, nextLikers);
    if (!writeStoredValue("loxMuzikTrackLikes", Object.fromEntries(trackLikesByTrack))) {
      showToast("Your song likes could not be saved in this browser.");
    }
    if (!wasLiked) notifyTrackOwner(track);
  };
  const toggleArtistLike = (artistName) => {
    const key = normalizeArtistKey(artistName);
    const engagement = getArtistEngagementRecord(artistName);
    const likers = Array.isArray(engagement.likers) ? engagement.likers : [];
    const actorKey = getActorKey();
    artistEngagement.set(key, {
      ...engagement,
      name: canonicalizeArtistName(artistName),
      likers: likers.includes(actorKey) ? likers.filter((liker) => liker !== actorKey) : [...likers, actorKey],
      followers: Array.isArray(engagement.followers) ? engagement.followers : [],
    });
    saveArtistEngagement();
  };
  const toggleArtistFollow = (artistName) => {
    const key = normalizeArtistKey(artistName);
    const engagement = getArtistEngagementRecord(artistName);
    const followers = Array.isArray(engagement.followers) ? engagement.followers : [];
    const actorKey = getActorKey();
    const wasFollowing = followers.includes(actorKey);
    artistEngagement.set(key, {
      ...engagement,
      name: canonicalizeArtistName(artistName),
      likers: Array.isArray(engagement.likers) ? engagement.likers : [],
      followers: wasFollowing ? followers.filter((follower) => follower !== actorKey) : [...followers, actorKey],
    });
    saveArtistEngagement();
    if (!wasFollowing) notifyArtistFollowers(artistName);
  };
  const getReleaseTracks = () => [...localCatalogTracks, ...tracks];
  const songGenreDefinitions = [
    { genre: "Afrobeats", category: "African Music", aliases: ["Afrobeat", "Afro beats"] },
    { genre: "Afropop", category: "African Music", aliases: ["Afro pop", "Afroswing"] },
    { genre: "Highlife", category: "African Music", aliases: ["Ghanaian highlife"] },
    { genre: "Hiplife", category: "African Music", aliases: ["Hip-life", "Ghanaian rap"] },
    { genre: "Amapiano", category: "African Music", aliases: ["Piano"] },
    { genre: "Gospel", category: "Gospel", aliases: ["Christian", "Worship"] },
    { genre: "Dancehall", category: "Reggae & Dancehall", aliases: ["Afrodancehall"] },
    { genre: "Reggae", category: "Reggae & Dancehall", aliases: [] },
    { genre: "Hip-Hop & Rap", category: "Hip-Hop & Rap", aliases: ["Hip-Hop", "Hip Hop", "Rap", "Trap"] },
    { genre: "R&B / Soul", category: "R&B & Soul", aliases: ["R&B", "RnB", "Soul", "Neo-soul"] },
    { genre: "Pop", category: "Pop", aliases: ["Pop music"] },
    { genre: "Electronic / Dance", category: "Electronic & Dance", aliases: ["Electronic", "EDM", "House", "Techno"] },
    { genre: "Rock / Alternative", category: "Rock & Alternative", aliases: ["Rock", "Alternative", "Punk", "Metal"] },
    { genre: "Jazz", category: "Jazz", aliases: [] },
    { genre: "Other", category: "Other", aliases: ["Unknown"] },
  ];
  const songCategoryOrder = [
    "African Music", "Gospel", "Reggae & Dancehall", "Hip-Hop & Rap", "R&B & Soul",
    "Pop", "Electronic & Dance", "Rock & Alternative", "Jazz", "Other",
  ];
  const songGenreAliases = new Map(songGenreDefinitions.flatMap((definition) => (
    [definition.genre, ...definition.aliases].map((alias) => [normalizeArtistKey(alias), definition.genre])
  )));
  const songGenreArtistHints = new Map([
    ["Afrobeats", ["Asake", "Ayra Starr", "Bayanni", "Bella Shmurda", "Berri Tiga", "Bnxn", "BNXN", "Burna Boy", "Camidoh", "CKay", "Crayon", "Davido", "Famous Pluto", "Fireboy DML", "Joeboy", "Kizz Daniel", "Khaid", "Majeeed", "Mr Eazi", "Muyeez", "Olamide", "Omah Lay", "Rema", "Ruger", "Seyi Vibez", "Shallipopi", "T-Classic", "Tar1q", "Tega Boi Dc", "Tiwa Savage", "Wizkid", "Zerrydl", "Zlatan"]],
    ["Afropop", ["Abochi", "Adina", "Angelique Kidjo", "Asomacy", "Bien", "Chella", "Chike", "D Jay", "Efya", "El Da", "Enam", "Gyakie", "Jah Phinga Agbenyega", "J Town", "Johnny Drille", "Joshua Baraka", "Kayblinkz", "Keke And Solly", "Kelvyn Boy", "KiDi", "King Promise", "Kojo Blak", "Kpese Boii", "Kuami Eugene", "Lade", "Lasmid", "Lexnour", "Lui Cruz", "Olivetheboy", "Real Keddy", "Rema Namakula", "Sefa", "Siicie", "Simi", "Teni", "Wendy Shay"]],
    ["Amapiano", ["Tyla"]],
    ["Hiplife", ["Amerado", "Beeztrap KOTM", "DopeNation", "Edem", "Eno Barony", "Fameye", "Flowking Stone", "King Paluta", "Kwesi Arthur", "Magnom", "Maskiking", "Medikal", "Okese1", "Pappy Kojo", "Sarkodie", "Skyface SDW", "Strongman", "Tulenkey", "Venom"]],
    ["Dancehall", ["Di Genius", "Jupitar", "Masicka", "Rvssian", "Sean Paul", "Shatta Wale", "Shenseea", "Stonebwoy"]],
    ["Reggae", ["Bebe Cool", "Lucky Dube"]],
    ["Gospel", ["Ajay Asika", "Chizie", "Exodus", "Festizie", "Joyce Blessing", "Lome Mawu", "Mercy Chinwo", "Moses Bliss", "Neeja"]],
    ["Hip-Hop & Rap", ["21 Savage", "Boss6man", "Central Cee", "Dess Dior", "Drake", "Ice Spice", "Ladipoe", "Lil Baby", "Lil Durk", "Lil Tjay", "Nardo Wick", "Odumodublvck", "Pop Smoke", "Young Paperboyz"]],
    ["R&B / Soul", ["Chris Brown", "Giveon", "Jessie Reyez", "Qing Madi"]],
    ["Pop", ["Alec Benjamin", "Charice", "Ed Sheeran", "Gwen Stefani", "Justin Bieber", "Mariah Carey", "Tones And I", "Zhang Jing Xuan"]],
    ["Electronic / Dance", ["Alan Walker", "DJ Stephen", "DJ Vyrusky"]],
  ].flatMap(([genre, artists]) => artists.map((artist) => [normalizeArtistKey(artist), genre])));
  const songGenreKeywordRules = [
    { genre: "Gospel", pattern: /\b(gospel|worship|christian)\b/i },
    { genre: "Highlife", pattern: /\bhigh[\s-]?life\b/i },
    { genre: "Hiplife", pattern: /\bhip[\s-]?life\b/i },
    { genre: "Amapiano", pattern: /\bamapiano\b/i },
    { genre: "Afrobeats", pattern: /\b(afro[\s-]?beats?|afroswing)\b/i },
    { genre: "Afropop", pattern: /\bafro[\s-]?pop\b/i },
    { genre: "Dancehall", pattern: /\bdance[\s-]?hall\b/i },
    { genre: "Reggae", pattern: /\breggae\b/i },
    { genre: "Hip-Hop & Rap", pattern: /\b(hip[\s-]?hop|rap|trap)\b/i },
    { genre: "R&B / Soul", pattern: /\b(r\s*&\s*b|rnb|soul|neo[\s-]?soul)\b/i },
    { genre: "Electronic / Dance", pattern: /\b(electronic|edm|house|techno|dance[\s-]?mix)\b/i },
    { genre: "Rock / Alternative", pattern: /\b(rock|alternative|punk|metal)\b/i },
    { genre: "Jazz", pattern: /\bjazz\b/i },
    { genre: "Pop", pattern: /\bpop\b/i },
  ];
  const getSongTaxonomy = (track) => {
    const explicitGenre = String(track?.genre || "").trim();
    const explicitGenreKey = normalizeArtistKey(explicitGenre);
    let genre = explicitGenreKey && explicitGenreKey !== "auto"
      ? songGenreAliases.get(explicitGenreKey)
      : null;
    if (!genre) {
      const searchableText = `${track?.title || ""} ${track?.fileName || ""} ${track?.tags || ""}`;
      const artists = getTrackArtistNames(track).map(normalizeArtistKey);
      genre = songGenreKeywordRules.find((rule) => (
        rule.pattern.test(searchableText)
        && !(rule.genre === "Pop" && artists.includes("pop smoke"))
      ))?.genre || null;
    }
    if (!genre) {
      genre = getTrackArtistNames(track)
        .map((artist) => songGenreArtistHints.get(normalizeArtistKey(artist)))
        .find(Boolean) || "Other";
    }
    const definition = songGenreDefinitions.find((item) => item.genre === genre)
      || songGenreDefinitions.find((item) => item.genre === "Other");
    return { category: definition.category, genre: definition.genre };
  };
  const updateSongTaxonomyFilters = () => {
    const taxonomies = getReleaseTracks().map(getSongTaxonomy);
    const categories = songCategoryOrder.filter((category) => taxonomies.some((item) => item.category === category));
    if (selectedSongCategory !== "all" && !categories.includes(selectedSongCategory)) selectedSongCategory = "all";
    const genreDefinitions = songGenreDefinitions.filter((definition) => (
      taxonomies.some((item) => item.genre === definition.genre)
      && (selectedSongCategory === "all" || definition.category === selectedSongCategory)
    ));
    if (selectedSongGenre !== "all" && !genreDefinitions.some((item) => item.genre === selectedSongGenre)) selectedSongGenre = "all";
    const setOptions = (select, options, allLabel, selectedValue) => {
      select.replaceChildren();
      const allOption = document.createElement("option");
      allOption.value = "all";
      allOption.textContent = allLabel;
      select.append(allOption);
      options.forEach((item) => {
        const option = document.createElement("option");
        option.value = item.value;
        option.textContent = item.label;
        select.append(option);
      });
      select.value = selectedValue;
    };
    setOptions(songCategoryFilter, categories.map((category) => ({ value: category, label: category })), "All categories", selectedSongCategory);
    setOptions(songGenreFilter, genreDefinitions.map((definition) => ({ value: definition.genre, label: definition.genre })), "All genres", selectedSongGenre);
  };
  const groupSongsByCategoryAndGenre = (items) => {
    const groups = new Map();
    items.forEach((track) => {
      const taxonomy = getSongTaxonomy(track);
      const key = `${taxonomy.category}::${taxonomy.genre}`;
      const group = groups.get(key) || { ...taxonomy, tracks: [] };
      group.tracks.push(track);
      groups.set(key, group);
    });
    const categoryOrder = new Map(songCategoryOrder.map((category, index) => [category, index]));
    const genreOrder = new Map(songGenreDefinitions.map((definition, index) => [definition.genre, index]));
    return Array.from(groups.values()).sort((first, second) => (
      (categoryOrder.get(first.category) ?? Number.MAX_SAFE_INTEGER) - (categoryOrder.get(second.category) ?? Number.MAX_SAFE_INTEGER)
      || (genreOrder.get(first.genre) ?? Number.MAX_SAFE_INTEGER) - (genreOrder.get(second.genre) ?? Number.MAX_SAFE_INTEGER)
    ));
  };
  const getArtistTracks = (artistName) => getReleaseTracks().filter((track) => (
    getTrackArtistNames(track).some((name) => isSameArtist(name, artistName))
  ));
  const closeSearchResults = () => {
    searchResultsDismissed = true;
    searchResultsPanel.hidden = true;
    searchInput.setAttribute("aria-expanded", "false");
    document.body.classList.remove("mobile-search-open");
    if (mobileSearchButton) mobileSearchButton.setAttribute("aria-expanded", "false");
  };
  const searchMatches = (value, query) => String(value || "").toLocaleLowerCase().includes(query);
  const getVisibleRadioStations = () => {
    const query = searchInput.value.trim().toLocaleLowerCase();
    return query
      ? radioStations.filter((station) => searchMatches(`${station.name} ${station.location} ${station.format}`, query))
      : radioStations;
  };
  const renderSearchResults = () => {
    const query = searchInput.value.trim().toLocaleLowerCase();
    if (!query || searchResultsDismissed) {
      searchResultsPanel.hidden = true;
      searchInput.setAttribute("aria-expanded", "false");
      return;
    }

    const tracks = getReleaseTracks();
    const songs = tracks.filter((track) => searchMatches(
      `${track.title} ${track.artist} ${track.fileName} ${getSongTaxonomy(track).genre}`,
      query,
    ));
    const artistMap = new Map();
    tracks.forEach((track) => {
      getTrackArtistNames(track).forEach((name) => {
        const key = normalizeArtistKey(name);
        const artist = artistMap.get(key) || { name, tracks: [] };
        artist.tracks.push(track);
        artistMap.set(key, artist);
      });
    });
    const artists = Array.from(artistMap.values())
      .filter((artist) => searchMatches(artist.name, query))
      .sort((first, second) => first.name.localeCompare(second.name));
    const albums = tracks.filter((track) => getReleaseType(track) === "album"
      && searchMatches(`${track.title} ${track.artist} ${track.fileName}`, query));
    const mixes = tracks.filter((track) => getReleaseType(track) === "mix"
      && searchMatches(`${track.title} ${track.artist} ${track.fileName}`, query));
    const stations = radioStations.filter((station) => searchMatches(
      `${station.name} ${station.location} ${station.format}`,
      query,
    ));
    const groups = [
      { label: "Songs", icon: "♫", items: songs, view: "songs" },
      { label: "Artists", icon: "♟", items: artists, view: "artists" },
      { label: "Albums / EP", icon: "▣", items: albums, view: "albums" },
      { label: "Mix tapes", icon: "◈", items: mixes, view: "songs" },
      { label: "Radio", icon: "◉", items: stations, view: "radio" },
    ].filter((group) => group.items.length);
    searchResultsPanel.replaceChildren();

    if (!groups.length) {
      const empty = document.createElement("p");
      empty.className = "search-results-empty";
      empty.textContent = `No songs, artists, albums, or radio stations match “${searchInput.value.trim()}”.`;
      searchResultsPanel.append(empty);
    } else {
      groups.forEach((group) => {
        const section = document.createElement("section");
        section.className = "search-result-group";
        const heading = document.createElement("div");
        heading.className = "search-result-heading";
        const label = document.createElement("span");
        label.textContent = group.label;
        const count = document.createElement("span");
        count.textContent = `${group.items.length} ${group.items.length === 1 ? "result" : "results"}`;
        heading.append(label, count);
        section.append(heading);

        group.items.slice(0, 5).forEach((item) => {
          const button = document.createElement("button");
          button.type = "button";
          button.className = "search-result-item";
          button.setAttribute("role", "option");
          button.setAttribute("aria-selected", "false");
          const icon = document.createElement("span");
          icon.className = "search-result-icon";
          icon.setAttribute("aria-hidden", "true");
          icon.textContent = group.icon;
          const copy = document.createElement("span");
          copy.className = "search-result-copy";
          const title = document.createElement("strong");
          const detail = document.createElement("small");

          if (group.view === "artists") {
            title.textContent = item.name;
            detail.textContent = `${item.tracks.length} ${item.tracks.length === 1 ? "song" : "songs"} · Artist`;
            button.addEventListener("click", () => {
              closeSearchResults();
              openArtist(item.name);
            });
          } else if (group.view === "radio") {
            title.textContent = item.name;
            detail.textContent = `${item.location} · ${item.format}`;
            button.addEventListener("click", () => {
              closeSearchResults();
              setView("radio");
              playRadioStation(item);
            });
          } else {
            title.textContent = item.title;
            detail.textContent = `${item.artist} · ${group.label === "Mix tapes" ? "Mix Tape" : group.view === "albums" ? "Album / EP" : "Song"}`;
            button.addEventListener("click", () => {
              closeSearchResults();
              selectedMadeForYouArtist = null;
              selectedReleaseTrackId = item.id;
              if (group.label === "Mix tapes") {
                songFilter = "mixes";
                setView("songs");
                return;
              }
              setView(group.view);
            });
          }

          copy.append(title, detail);
          button.append(icon, copy);
          section.append(button);
        });

        if (group.items.length > 5) {
          const viewAll = document.createElement("button");
          viewAll.type = "button";
          viewAll.className = "search-result-view-all";
          viewAll.textContent = `View all ${group.label.toLocaleLowerCase()} results`;
          viewAll.addEventListener("click", () => {
            closeSearchResults();
            selectedMadeForYouArtist = null;
            if (group.label === "Mix tapes") {
              songFilter = "mixes";
              setView("songs");
              return;
            }
            setView(group.view);
          });
          section.append(viewAll);
        }
        searchResultsPanel.append(section);
      });
    }

    searchResultsPanel.hidden = false;
    searchInput.setAttribute("aria-expanded", "true");
  };
  const getDayKey = () => {
    const today = new Date();
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  };
  recommendationDay = getDayKey();
  const getDailyHash = (value) => {
    let hash = 2166136261;
    for (let index = 0; index < value.length; index += 1) {
      hash ^= value.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
  };
  const getDailyRecommendations = () => {
    const artistMap = new Map();
    getReleaseTracks().forEach((track) => {
      getTrackArtistNames(track).forEach((name) => {
        const artistTracks = artistMap.get(name) || [];
        artistTracks.push(track);
        artistMap.set(name, artistTracks);
      });
    });
    return Array.from(artistMap, ([name, artistTracks]) => ({
      name,
      tracks: artistTracks.sort((first, second) => (
        getDailyHash(`${recommendationDay}:${name}:${first.id}`)
        - getDailyHash(`${recommendationDay}:${name}:${second.id}`)
      )),
    })).sort((first, second) => (
      getDailyHash(`${recommendationDay}:${first.name}`)
      - getDailyHash(`${recommendationDay}:${second.name}`)
    )).slice(0, 5);
  };
  const trendScore = (track) => (
    (Number(track.downloads) || 0) * 3
    + (Number(track.plays) || 0) * 2
    + (Number(track.searches) || 0)
  );
  const normalizeReleaseType = (value) => {
    const normalized = String(value ?? "").trim().toLowerCase().replace(/[_-]+/g, " ").replace(/\s+/g, " ");
    if (!normalized || normalized === "single" || normalized === "song") return "single";
    if (["album", "album ep", "album / ep", "album/ep", "ep", "extended play"].includes(normalized)) return "album";
    if (["mix", "mix tape", "mixtape", "dj mix", "dj mix tape", "dj mixtape"].includes(normalized)) return "mix";
    if (normalized.includes("mix")) return "mix";
    return normalized;
  };
  const getReleaseType = (track) => normalizeReleaseType(track?.releaseType || "single");
  const getReleaseLabel = (trackOrValue, short = false) => {
    const releaseType = typeof trackOrValue === "string"
      ? normalizeReleaseType(trackOrValue)
      : getReleaseType(trackOrValue);
    if (releaseType === "album") return short ? "Album" : "Album / EP";
    if (releaseType === "mix") return short ? "Mix Tape" : "Mix Tape";
    return short ? "Single" : "Single";
  };
  const getPopularArtists = () => {
    const artistMap = new Map();

    getReleaseTracks().forEach((track) => {
      const releaseType = getReleaseType(track);
      getTrackArtistNames(track).forEach((name) => {
        const key = normalizeArtistKey(name);
        const existing = artistMap.get(key) || {
          name,
          count: 0,
          albums: 0,
          singles: 0,
          mixes: 0,
          art: track.art,
        };
        existing.count += 1;
        if (releaseType === "album") existing.albums += 1;
        else if (releaseType === "mix") existing.mixes += 1;
        else existing.singles += 1;
        artistMap.set(key, existing);
      });
    });

    const artists = Array.from(artistMap.values()).sort((first, second) => (
      second.count - first.count || first.name.localeCompare(second.name)
    ));
    const prepared = artists.slice(0, 6).map((artist) => {
      const segments = [];
      if (artist.albums) segments.push(`${artist.albums} album${artist.albums === 1 ? "" : "s"}`);
      if (artist.singles) segments.push(`${artist.singles} single${artist.singles === 1 ? "" : "s"}`);
      if (artist.mixes) segments.push(`${artist.mixes} mix${artist.mixes === 1 ? "" : "es"}`);
      return {
        ...artist,
        releaseSummary: segments.join(" • ") || "Featured artist",
      };
    });

    if (prepared.length) return prepared;

    return [
      { name: "Black Sherif", art: 0, releaseSummary: "Featured artist" },
      { name: "Burna Boy", art: 1, releaseSummary: "Featured artist" },
      { name: "Wizkid", art: 2, releaseSummary: "Featured artist" },
      { name: "Sarkodie", art: 3, releaseSummary: "Featured artist" },
      { name: "Stonebwoy", art: 4, releaseSummary: "Featured artist" },
      { name: "Lucky Dube", art: 0, releaseSummary: "Featured artist" },
    ];
  };
  const createArtistPlaceholder = (artistName) => {
    let hash = 0;
    for (const character of normalizeArtistKey(artistName)) hash = Math.imul(hash ^ character.charCodeAt(0), 16777619);
    const hue = Math.abs(hash) % 360;
    const initials = String(artistName || "♫")
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() || "")
      .join("")
      .replace(/[<>&'\"]/g, "") || "♫";
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="hsl(${hue} 78% 50%)"/><stop offset="1" stop-color="#171025"/></linearGradient></defs><rect width="500" height="500" fill="url(#g)"/><circle cx="250" cy="185" r="96" fill="#fff" fill-opacity=".78"/><path d="M64 500c15-127 86-191 186-191s171 64 186 191" fill="#fff" fill-opacity=".78"/><text x="250" y="450" text-anchor="middle" fill="#170f25" font-family="Arial,sans-serif" font-size="42" font-weight="700" opacity=".9">${initials}</text></svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  };
  const getArtistCover = (artistName) => getReleaseTracks().find((track) => (
    track.coverUrl && getTrackArtistNames(track).some((name) => isSameArtist(name, artistName))
  ))?.coverUrl || null;
  const getCachedArtistArtwork = (artistName) => {
    const artwork = cachedArtistArtwork[normalizeArtistKey(artistName)];
    return artwork
      && typeof artwork.src === "string"
      && /^https:\/\/(?:upload|thumb)\.wikimedia\.org\//.test(artwork.src)
      && typeof artwork.credit === "string"
      ? artwork
      : null;
  };
  const lookupArtistArtwork = async (artistName) => {
    const key = normalizeArtistKey(artistName);
    const cached = getCachedArtistArtwork(artistName);
    if (cached) return cached;

    const params = new URLSearchParams({
      action: "query",
      format: "json",
      generator: "search",
      gsrnamespace: "6",
      gsrlimit: "8",
      gsrsearch: `${artistName} filetype:bitmap`,
      prop: "imageinfo",
      iiprop: "url|extmetadata",
      iiurlwidth: "500",
      origin: "*",
    });
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 8000);
    let data;
    try {
      const response = await fetch(`https://commons.wikimedia.org/w/api.php?${params}`, {
        signal: controller.signal,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error(`Wikimedia Commons returned HTTP ${response.status}.`);
      data = await response.json();
    } finally {
      window.clearTimeout(timeout);
    }

    const normalizeMetadata = (value) => String(value?.value || value || "").replace(/<[^>]*>/g, "").trim();
    const candidates = Object.values(data.query?.pages || []).map((page) => {
      const image = page.imageinfo?.[0];
      const metadata = image?.extmetadata || {};
      const license = normalizeMetadata(metadata.LicenseShortName);
      const title = String(page.title || "").replace(/^File:/i, "");
      const normalizedTitle = normalizeArtistKey(title);
      const isReusableLicense = /^(?:CC0|Public domain|PD\b|CC BY(?:-SA)? [0-9.]+|Attribution(?:-ShareAlike)? [0-9.]+)/i.test(license);
      if (!/^https:\/\/(?:upload|thumb)\.wikimedia\.org\//.test(image?.thumburl || "")
        || !normalizedTitle.includes(key)
        || !isReusableLicense) return null;

      const filePage = `https://commons.wikimedia.org/wiki/${encodeURIComponent(String(page.title).replace(/ /g, "_"))}`;
      const author = normalizeMetadata(metadata.Artist) || normalizeMetadata(metadata.Credit) || "Unknown contributor";
      const attribution = `${title} by ${author}, ${license}, Wikimedia Commons — ${filePage}`;
      return {
        src: image.thumburl,
        credit: attribution,
        score: normalizedTitle === key ? 2 : 1,
      };
    }).filter(Boolean).sort((first, second) => second.score - first.score);

    const result = candidates[0] || null;
    if (!result) return null;
    const artwork = { src: result.src, credit: result.credit };
    cachedArtistArtwork[key] = artwork;
    if (!writeStoredValue("loxMuzikArtistArtwork", cachedArtistArtwork)) {
      console.warn(`Could not cache the Wikimedia Commons portrait for ${artistName}.`);
    }
    return artwork;
  };
  const artistArtworkRequestQueue = [];
  let activeArtistArtworkRequests = 0;
  const runArtistArtworkRequests = () => {
    while (activeArtistArtworkRequests < 3 && artistArtworkRequestQueue.length) {
      const request = artistArtworkRequestQueue.shift();
      activeArtistArtworkRequests += 1;
      lookupArtistArtwork(request.artistName)
        .then(request.resolve, request.reject)
        .finally(() => {
          activeArtistArtworkRequests -= 1;
          runArtistArtworkRequests();
        });
    }
  };
  const resolveArtistArtwork = (artistName) => {
    const key = normalizeArtistKey(artistName);
    if (artistArtworkRequests.has(key)) return artistArtworkRequests.get(key);
    const request = new Promise((resolve, reject) => {
      artistArtworkRequestQueue.push({ artistName, resolve, reject });
      runArtistArtworkRequests();
    });
    artistArtworkRequests.set(key, request);
    return request;
  };
  const defaultSongCoverUrls = [
    "imgs/IMG-20261024-WA0040.jpg",
    "imgs/welcome-radio.jpg",
  ];
  const getDefaultSongCover = (track) => {
    const key = String(track?.id || track?.fileName || track?.title || "song");
    const hash = Array.from(key).reduce((value, character) => (value * 31 + character.charCodeAt(0)) >>> 0, 7);
    return defaultSongCoverUrls[hash % defaultSongCoverUrls.length];
  };
  const applyArtistArtwork = (element, artistName, fallbackSrc = null) => {
    const normalizedArtist = normalizeArtistKey(artistName);
    const artwork = artistArtwork.get(normalizedArtist) || getCachedArtistArtwork(artistName);
    if (artwork && !artistArtwork.has(normalizedArtist)) artistArtwork.set(normalizedArtist, artwork);
    const requestId = String(++artistArtworkRequestId);
    element.dataset.artistArtworkRequest = requestId;
    element.classList.remove("has-loaded-image");
    element.style.removeProperty("background-image");
    element.style.removeProperty("background-position");
    element.style.removeProperty("background-size");
    element.removeAttribute("title");
    const localCover = getArtistCover(artistName);
    const placeholder = createArtistPlaceholder(artistName);
    const paint = (src, title = "") => {
      if (element.dataset.artistArtworkRequest !== requestId) return;
      const imageLayer = `url("${src}")`;
      element.style.backgroundImage = element.matches(".artist-hero, .release-hero")
        ? `linear-gradient(90deg, rgba(13, 7, 24, 0.82), rgba(13, 7, 24, 0.24)), ${imageLayer}`
        : imageLayer;
      element.style.backgroundPosition = "center";
      element.style.backgroundSize = "cover";
      if (title) element.title = title;
      element.classList.add("has-loaded-image");
    };
    const loadImage = (src, title, fallbackSrc) => {
      const image = new Image();
      image.addEventListener("load", () => paint(src, title), { once: true });
      image.addEventListener("error", () => {
        if (fallbackSrc && fallbackSrc !== src) loadImage(fallbackSrc, "Artist artwork", placeholder);
        else paint(placeholder, "Artist artwork");
      }, { once: true });
      image.src = src;
    };
    if (artwork) loadImage(artwork.src, artwork.credit, localCover || fallbackSrc || placeholder);
    else if (localCover) loadImage(localCover, "Artwork from this artist's music", fallbackSrc || placeholder);
    else if (fallbackSrc) loadImage(fallbackSrc, "Music cover artwork", placeholder);
    else paint(placeholder, "Artist artwork placeholder");

    if (!artwork) {
      resolveArtistArtwork(artistName).then((resolvedArtwork) => {
        if (!resolvedArtwork || element.dataset.artistArtworkRequest !== requestId) return;
        artistArtwork.set(normalizedArtist, resolvedArtwork);
        loadImage(resolvedArtwork.src, resolvedArtwork.credit, localCover || fallbackSrc || placeholder);
      }).catch((error) => {
        console.warn(`Could not load a Wikimedia Commons portrait for ${artistName}.`, error);
      });
    }
  };
  // Keep each song's own artwork; otherwise prefer its artist's photo before shared fallback art.
  const applyTrackArtwork = (element, track) => {
    if (!track?.coverUrl) {
      applyArtistArtwork(
        element,
        track?.artistImageArtist || getTrackArtistNames(track)[0] || track?.artist || "",
        getDefaultSongCover(track),
      );
      return;
    }

    const requestId = String(++artistArtworkRequestId);
    element.dataset.artistArtworkRequest = requestId;
    element.classList.remove("has-loaded-image");
    const image = new Image();
    image.addEventListener("load", () => {
      if (element.dataset.artistArtworkRequest !== requestId) return;
      element.style.backgroundImage = `url("${track.coverUrl}")`;
      element.style.backgroundPosition = "center";
      element.style.backgroundSize = "cover";
      element.title = `${track.title} cover art`;
      element.classList.add("has-loaded-image");
    }, { once: true });
    image.addEventListener("error", () => {
      if (element.dataset.artistArtworkRequest === requestId) {
        applyArtistArtwork(element, track.artistImageArtist || getTrackArtistNames(track)[0] || track.artist || "");
      }
    }, { once: true });
    image.src = track.coverUrl;
  };
  const readEmbeddedCover = (file) => new Promise((resolve) => {
    if (!window.jsmediatags?.read) {
      resolve(null);
      return;
    }

    try {
      window.jsmediatags.read(file, {
        onSuccess: (result) => {
          try {
            const picture = result.tags?.picture;
            if (!picture?.data?.length) {
              resolve(null);
              return;
            }
            const imageData = new Uint8Array(picture.data);
            const imageBlob = new Blob([imageData], { type: picture.format || "image/jpeg" });
            resolve(URL.createObjectURL(imageBlob));
          } catch {
            resolve(null);
          }
        },
        onError: () => resolve(null),
      });
    } catch {
      resolve(null);
    }
  });
  const createArtistAvatar = (artist) => {
    const avatar = document.createElement("div");
    avatar.className = `artist-avatar art-${artist.art}`;
    avatar.setAttribute("aria-hidden", "true");

    const initials = document.createElement("span");
    initials.textContent = artist.name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() || "")
      .join("") || "♫";

    avatar.append(initials);
    applyArtistArtwork(avatar, artist.name);
    return avatar;
  };
  const moveTrend = (direction) => {
    const itemCount = getReleaseTracks().length;
    if (!itemCount) return;
    trendOffset = (trendOffset + direction + itemCount) % itemCount;
    render();
  };
  const renderRadioStationCards = (container, stations, compact = false) => {
    if (!container) return;
    container.replaceChildren();
    stations.forEach((station) => {
      const isSelected = currentRadioStation?.id === station.id;
      const isPlaying = isSelected && !radioAudio.paused;
      const card = document.createElement("button");
      card.type = "button";
      card.className = `radio-station-card${compact ? " radio-station-card-compact" : ""}${isSelected ? " is-selected" : ""}${isPlaying ? " is-playing" : ""}`;
      card.setAttribute("aria-label", `${isPlaying ? "Pause" : "Listen to"} ${station.name} live`);
      card.setAttribute("aria-pressed", String(isSelected));
      const art = document.createElement("span");
      art.className = "radio-station-art";
      art.setAttribute("aria-hidden", "true");
      art.textContent = station.badge;
      const copy = document.createElement("span");
      copy.className = "radio-station-copy";
      const title = document.createElement("strong");
      title.textContent = station.name;
      const location = document.createElement("span");
      location.textContent = station.location;
      const format = document.createElement("small");
      format.textContent = station.format;
      const action = document.createElement("em");
      action.textContent = isPlaying
        ? "Ⅱ  On air · Tap to pause"
        : isSelected && radioStatus === "CONNECTING"
          ? "Connecting to live stream…"
          : isSelected && radioStatus === "STREAM UNAVAILABLE"
            ? "Stream unavailable · Tap to retry"
            : isSelected
              ? "▶  Paused · Tap to resume"
              : "▶  Listen live";
      copy.append(title, location, format, action);
      card.append(art, copy);
      card.addEventListener("click", () => {
        if (activeView !== "radio") setView("radio");
        playRadioStation(station);
      });
      container.append(card);
    });
  };
  const updateRadioMiniPlayer = () => {
    const shouldShow = Boolean(currentRadioStation && !radioAudio.paused && !radioMiniPlayerDismissed);
    radioMiniPlayer.hidden = !shouldShow;
    document.body.classList.toggle("has-radio-player", shouldShow);
    if (currentRadioStation) {
      radioMiniTitle.textContent = currentRadioStation.name;
      radioMiniStatus.textContent = radioAudio.paused ? radioStatus : "LIVE · PLAYING";
      radioMiniToggle.textContent = radioAudio.paused ? "▶" : "Ⅱ";
      radioMiniToggle.setAttribute("aria-label", radioAudio.paused ? "Resume radio" : "Pause radio");
    }
  };
  const setRadioStatus = (status) => {
    radioStatus = status;
    updateRadioMiniPlayer();
    radioLiveStatus.textContent = status;
    if (currentRadioStation) {
      radioNowPlaying.hidden = false;
      radioNowTitle.textContent = currentRadioStation.name;
      radioNowDetails.textContent = `${currentRadioStation.location} · ${currentRadioStation.format}`;
      radioToggleButton.textContent = !radioAudio.paused
        ? "Ⅱ Pause"
        : status === "CONNECTING" ? "Connecting…" : status === "STREAM UNAVAILABLE" ? "↻ Try again" : "▶ Resume";
    }
    renderRadioStationCards(popularRadioGrid, radioStations.slice(0, 6), true);
    renderRadioStationCards(radioStationsGrid, getVisibleRadioStations());
  };
  const playRadioStation = (station) => {
    if (currentRadioStation?.id === station.id) {
      if (radioAudio.paused) {
        setRadioStatus("CONNECTING");
        radioAudio.play().catch(() => {
          setRadioStatus("STREAM UNAVAILABLE");
          showToast(`${station.name} is unavailable right now. Try another station.`);
        });
      } else {
        radioAudio.pause();
        setRadioStatus("PAUSED");
      }
      return;
    }

    audio.pause();
    setPlayerBarVisibility(false);
    document.body.classList.remove("has-player");
    radioAudio.pause();
    currentRadioStation = station;
    radioMiniPlayerDismissed = false;
    updateRadioMiniPlayer();
    radioNowPlaying.hidden = false;
    radioNowTitle.textContent = station.name;
    radioNowDetails.textContent = `${station.location} · ${station.format}`;
    radioAudio.src = station.streamUrl;
    radioAudio.load();
    setRadioStatus("CONNECTING");
    radioAudio.play().catch(() => {
      setRadioStatus("STREAM UNAVAILABLE");
      showToast(`${station.name} is unavailable right now. Try another station.`);
    });
  };
  const stopRadioStation = () => {
    currentRadioStation = null;
    radioMiniPlayerDismissed = false;
    updateRadioMiniPlayer();
    radioAudio.pause();
    radioAudio.removeAttribute("src");
    radioAudio.load();
    radioNowPlaying.hidden = true;
    radioNowTitle.textContent = "No station selected";
    radioNowDetails.textContent = "";
    radioLiveStatus.textContent = "Choose a station";
    radioStatus = "Choose a station";
    renderRadioStationCards(popularRadioGrid, radioStations.slice(0, 6), true);
    renderRadioStationCards(radioStationsGrid, getVisibleRadioStations());
  };
  radioAudio.addEventListener("play", updateRadioMiniPlayer);
  radioAudio.addEventListener("pause", updateRadioMiniPlayer);
  radioMiniToggle.addEventListener("click", () => toggleRadioPlayback());
  radioMiniClose.addEventListener("click", () => {
    radioMiniPlayerDismissed = true;
    updateRadioMiniPlayer();
  });
  const toggleRadioPlayback = () => {
    if (!currentRadioStation) return;
    if (radioAudio.paused) {
      setRadioStatus("CONNECTING");
      radioAudio.play().catch(() => {
        setRadioStatus("STREAM UNAVAILABLE");
        showToast(`${currentRadioStation.name} is unavailable right now. Try another station.`);
      });
    } else {
      radioAudio.pause();
      setRadioStatus("PAUSED");
    }
  };
  const openArtist = (artistName) => setView("artists", artistName);
  const playQueue = (queue, shuffle = false) => {
    const ids = queue.slice();
    if (shuffle) {
      for (let index = ids.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [ids[index], ids[swapIndex]] = [ids[swapIndex], ids[index]];
      }
    }
    if (ids.length) selectTrack(ids[0], true, ids);
  };
  const chooseReleaseTrack = (track, queue) => {
    selectedReleaseTrackId = track.id;
    render();
    selectTrack(track.id, true, queue);
  };

  const renderCreatorStudio = () => {
    const ownTracks = tracks.filter((track) => track.ownerEmail === accountEmail);
    const ownStations = creatorStations.filter((station) => station.ownerEmail === accountEmail);
    document.querySelector("#creator-song-count").textContent = ownTracks.length;
    document.querySelector("#creator-like-count").textContent = ownTracks.reduce((count, track) => count + getTrackLikeCount(track), 0);
    const creatorEngagement = getArtistEngagement(creatorName);
    document.querySelector("#creator-follower-count").textContent = creatorEngagement.followers;
    document.querySelector("#creator-station-count").textContent = ownStations.length;
    const nameInput = document.querySelector("#creator-display-name");
    if (document.activeElement !== nameInput) nameInput.value = creatorName;
    if (document.activeElement !== creatorSongArtist
      && (!creatorSongArtist.value || creatorSongArtist.value === creatorSongArtist.dataset.autoArtist)) {
      creatorSongArtist.value = creatorName;
      creatorSongArtist.dataset.autoArtist = creatorName;
    }

    const list = document.querySelector("#creator-track-list");
    const emptyCopy = document.querySelector("#creator-empty-copy");
    const trendingList = document.querySelector("#creator-trending-list");
    const trendingEmptyCopy = document.querySelector("#creator-trending-empty");
    const trendingTracks = ownTracks
      .filter((track) => trendScore(track) > 0)
      .sort((first, second) => trendScore(second) - trendScore(first));
    list.replaceChildren();
    emptyCopy.hidden = ownTracks.length > 0;
    ownTracks.forEach((track) => {
      const row = document.createElement("div");
      row.className = "creator-track-row";
      const copy = document.createElement("div");
      copy.className = "creator-track-copy";
      const title = document.createElement("strong");
      title.textContent = track.title;
      const artist = document.createElement("span");
      artist.textContent = track.artist;
      copy.append(title, artist);
      const likes = document.createElement("span");
      likes.className = "creator-track-likes";
      const likeCount = getTrackLikeCount(track);
      likes.textContent = `${likeCount} ${likeCount === 1 ? "like" : "likes"}`;
      const play = document.createElement("button");
      play.className = "artist-action-button";
      play.type = "button";
      play.textContent = "▶ Play";
      play.addEventListener("click", () => selectTrack(track.id, true));
      row.append(copy, likes, play);
      list.append(row);
    });

    trendingList.replaceChildren();
    trendingEmptyCopy.hidden = trendingTracks.length > 0;
    trendingTracks.forEach((track) => {
      const row = document.createElement("div");
      row.className = "creator-track-row";
      const copy = document.createElement("div");
      copy.className = "creator-track-copy";
      const title = document.createElement("strong");
      title.textContent = track.title;
      const artist = document.createElement("span");
      artist.textContent = track.artist;
      copy.append(title, artist);
      const score = document.createElement("span");
      score.className = "creator-track-trend-score";
      score.textContent = `${trendScore(track)} points · ${Number(track.plays) || 0} plays · ${Number(track.searches) || 0} searches · ${Number(track.downloads) || 0} downloads`;
      const play = document.createElement("button");
      play.className = "artist-action-button";
      play.type = "button";
      play.textContent = "▶ Play";
      play.addEventListener("click", () => selectTrack(track.id, true, trendingTracks.map((item) => item.id)));
      row.append(copy, score, play);
      trendingList.append(row);
    });
  };

  const clearProfilePhotoPreview = () => {
    if (profilePhotoPreviewUrl) URL.revokeObjectURL(profilePhotoPreviewUrl);
    profilePhotoPreviewUrl = "";
    profilePhotoChanged = false;
    creatorProfilePhotoInput.value = "";
  };
  const readProfilePhoto = (file) => new Promise((resolve, reject) => {
    const supportedType = ["image/jpeg", "image/png", "image/webp"];
    if (!(supportedType.includes(file.type) || /\.(jpe?g|png|webp)$/i.test(file.name))) {
      reject(new Error("Choose a JPG, PNG, or WebP profile photo."));
      return;
    }
    if (file.size > 8 * 1024 * 1024) {
      reject(new Error("Choose a profile photo up to 8 MB."));
      return;
    }

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      if (typeof reader.result !== "string") {
        reject(new Error("The profile photo could not be read."));
        return;
      }
      const image = new Image();
      image.addEventListener("load", () => {
        try {
          const scale = Math.min(1, 512 / Math.max(image.naturalWidth, image.naturalHeight));
          const canvas = document.createElement("canvas");
          canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
          canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
          const context = canvas.getContext("2d");
          if (!context) {
            reject(new Error("The profile photo could not be prepared."));
            return;
          }
          context.fillStyle = "#160820";
          context.fillRect(0, 0, canvas.width, canvas.height);
          context.drawImage(image, 0, 0, canvas.width, canvas.height);
          resolve(canvas.toDataURL("image/jpeg", 0.82));
        } catch {
          reject(new Error("The profile photo could not be prepared."));
        }
      });
      image.addEventListener("error", () => reject(new Error("That image could not be opened. Try another photo.")));
      image.src = reader.result;
    });
    reader.addEventListener("error", () => reject(new Error("The profile photo could not be read.")));
    reader.readAsDataURL(file);
  });
  const renderArtistProfile = () => {
    const fields = {
      name: document.querySelector("#creator-display-name"),
      bio: document.querySelector("#creator-profile-bio"),
      location: document.querySelector("#creator-profile-location"),
      genres: document.querySelector("#creator-profile-genres"),
      website: document.querySelector("#creator-profile-website"),
    };
    const values = { name: creatorName, ...creatorProfile };
    Object.entries(fields).forEach(([key, field]) => {
      if (document.activeElement !== field) field.value = values[key] || "";
    });

    document.querySelector("#artist-profile-preview-title").textContent = creatorName || "Your artist name";
    const profilePhotoUrl = profilePhotoChanged ? profilePhotoPreviewUrl : creatorProfile.photoUrl;
    const editorPhotoUrl = profilePhotoChanged ? profilePhotoPreviewUrl : creatorProfile.photoUrl;
    const coverPhoto = document.querySelector("#artist-profile-cover-photo");
    coverPhoto.hidden = !profilePhotoUrl;
    if (profilePhotoUrl) coverPhoto.src = profilePhotoUrl;
    else coverPhoto.removeAttribute("src");
    const editorPhotoPreview = document.querySelector("#creator-profile-photo-preview");
    const photoPicker = document.querySelector(".profile-photo-picker");
    photoPicker.classList.toggle("has-photo", Boolean(editorPhotoUrl));
    document.querySelector("#creator-profile-photo-picker-hint").textContent = editorPhotoUrl ? "Tap to change photo" : "Choose a photo";
    editorPhotoPreview.hidden = !editorPhotoUrl;
    if (editorPhotoUrl) editorPhotoPreview.src = editorPhotoUrl;
    else editorPhotoPreview.removeAttribute("src");
    const profileInitial = Array.from(creatorName.trim())[0] || "♫";
    const profilePhoto = document.querySelector("#artist-profile-avatar-photo");
    profilePhoto.hidden = !profilePhotoUrl;
    if (profilePhotoUrl) profilePhoto.src = profilePhotoUrl;
    else profilePhoto.removeAttribute("src");
    document.querySelector("#artist-profile-avatar-initials").textContent = profileInitial;
    document.querySelector("#artist-profile-avatar-initials").hidden = Boolean(profilePhotoUrl);
    const studioProfilePhoto = document.querySelector("#creator-studio-profile-photo");
    studioProfilePhoto.hidden = !creatorProfile.photoUrl;
    if (creatorProfile.photoUrl) studioProfilePhoto.src = creatorProfile.photoUrl;
    else studioProfilePhoto.removeAttribute("src");
    document.querySelector("#creator-studio-profile-initials").textContent = profileInitial;
    document.querySelector("#creator-studio-profile-initials").hidden = Boolean(creatorProfile.photoUrl);
    document.querySelector("#creator-studio-profile-name").textContent = creatorName || "Your artist name";
    const location = document.querySelector("#artist-profile-preview-location");
    location.textContent = creatorProfile.location;
    location.hidden = !creatorProfile.location;
    document.querySelector("#artist-profile-preview-bio").textContent = creatorProfile.bio || "Add a short bio to introduce yourself to listeners.";

    const genreList = document.querySelector("#artist-profile-preview-genres");
    genreList.replaceChildren();
    const genres = creatorProfile.genres.split(",").map((genre) => genre.trim()).filter(Boolean);
    genreList.hidden = genres.length === 0;
    genres.forEach((genre) => {
      const tag = document.createElement("span");
      tag.textContent = genre;
      genreList.append(tag);
    });

    const websiteLink = document.querySelector("#artist-profile-preview-website");
    try {
      const website = new URL(creatorProfile.website);
      if (!["http:", "https:"].includes(website.protocol)) throw new Error("Unsupported website protocol");
      websiteLink.href = website.href;
      websiteLink.textContent = website.hostname;
      websiteLink.hidden = false;
    } catch {
      websiteLink.removeAttribute("href");
      websiteLink.textContent = "";
      websiteLink.hidden = true;
    }

    const ownTracks = tracks.filter((track) => track.ownerEmail === accountEmail);
    const engagement = getArtistEngagement(creatorName);
    document.querySelector("#artist-profile-song-count").textContent = ownTracks.length;
    document.querySelector("#artist-profile-like-count").textContent = ownTracks.reduce((count, track) => count + getTrackLikeCount(track), 0);
    document.querySelector("#artist-profile-follower-count").textContent = engagement.followers;
  };

  const renderLikesView = () => {
    const likedSongs = getReleaseTracks().filter(isTrackLiked);
    const followedArtists = getFollowedArtistNames();
    const likedSongsList = document.querySelector("#liked-songs-list");
    const likedSongsEmpty = document.querySelector("#liked-songs-empty");
    const followedArtistsGrid = document.querySelector("#followed-artists-grid");
    const followedArtistsEmpty = document.querySelector("#followed-artists-empty");

    document.querySelector("#liked-song-count").textContent = likedSongs.length;
    document.querySelector("#followed-artist-count").textContent = followedArtists.length;
    likedSongsList.replaceChildren();
    likedSongsEmpty.hidden = likedSongs.length > 0;
    likedSongs.forEach((track) => {
      const row = document.createElement("article");
      row.className = "liked-song-row";
      const play = document.createElement("button");
      play.type = "button";
      play.className = `liked-song-art track-art art-${track.art}`;
      applyTrackArtwork(play, track);
      play.textContent = currentTrackId === track.id && !audio.paused ? "Ⅱ" : "▶";
      play.setAttribute("aria-label", `Play ${track.title} by ${track.artist}`);
      play.addEventListener("click", () => selectTrack(track.id, true, likedSongs.map((item) => item.id)));
      const copy = document.createElement("div");
      copy.className = "liked-song-copy";
      const title = document.createElement("strong");
      title.textContent = track.title;
      const artist = document.createElement("span");
      artist.textContent = track.artist;
      copy.append(title, artist);
      const removeLike = document.createElement("button");
      removeLike.type = "button";
      removeLike.className = "row-action is-liked liked-song-remove";
      removeLike.textContent = "♥";
      removeLike.setAttribute("aria-label", `Remove ${track.title} from liked songs`);
      removeLike.addEventListener("click", () => {
        toggleTrackLike(track);
        render();
        updatePlayer();
      });
      row.append(play, copy, removeLike);
      likedSongsList.append(row);
    });

    followedArtistsGrid.replaceChildren();
    followedArtistsEmpty.hidden = followedArtists.length > 0;
    followedArtists.forEach((name) => {
      const artistTrack = getArtistTracks(name)[0];
      const featured = getPopularArtists().find((artist) => artist.name === name);
      const card = document.createElement("button");
      card.type = "button";
      card.className = "followed-artist-card";
      const avatar = createArtistAvatar({ name, art: artistTrack?.art ?? featured?.art ?? 0 });
      const copy = document.createElement("span");
      copy.className = "followed-artist-copy";
      const title = document.createElement("strong");
      title.textContent = name;
      const detail = document.createElement("small");
      const trackCount = getArtistTracks(name).length;
      detail.textContent = `${trackCount} ${trackCount === 1 ? "song" : "songs"} in your library`;
      copy.append(title, detail);
      const following = document.createElement("span");
      following.className = "following-badge";
      following.textContent = "Following";
      card.append(avatar, copy, following);
      card.addEventListener("click", () => openArtist(name));
      followedArtistsGrid.append(card);
    });
  };

  const removeOfflineTrack = async (track) => {
    try {
      await deleteOfflineDownload(track.offlineKey);
    } catch (error) {
      showToast(error instanceof Error ? error.message : "Could not remove this offline song.");
      return;
    }

    if (currentTrackId === track.id) {
      if (crossfadeInProgress || crossfadeRequestPending) stopCrossfade();
      audio.pause();
      audio.removeAttribute("src");
      audio.load();
      currentTrackId = null;
      activeQueue = null;
      setPlayerBarVisibility(false);
      document.body.classList.remove("has-player");
    }
    URL.revokeObjectURL(track.url);
    const index = offlineTracks.indexOf(track);
    if (index !== -1) offlineTracks.splice(index, 1);
    render();
    showToast(`Removed “${track.title}” from offline downloads.`);
  };

  const renderDownloadsView = () => {
    const accountDownloads = isLoggedIn
      ? offlineTracks.filter((track) => track.ownerEmail === accountEmail)
      : [];
    downloadsCount.textContent = `${accountDownloads.length} ${accountDownloads.length === 1 ? "song" : "songs"}`;
    downloadsEmpty.hidden = accountDownloads.length > 0;
    downloadsList.replaceChildren();
    accountDownloads.forEach((track, index) => {
      const row = document.createElement("article");
      row.className = "download-song-row";
      const number = document.createElement("span");
      number.className = "song-library-number";
      number.textContent = String(index + 1).padStart(2, "0");
      const play = document.createElement("button");
      play.type = "button";
      play.className = `track-art download-song-art art-${track.art}`;
      play.textContent = currentTrackId === track.id && !audio.paused ? "Ⅱ" : "▶";
      play.setAttribute("aria-label", `Play ${track.title} offline`);
      applyTrackArtwork(play, track);
      play.addEventListener("click", () => selectTrack(
        track.id,
        true,
        accountDownloads.map((download) => download.id),
      ));
      const copy = document.createElement("div");
      copy.className = "song-library-copy";
      const title = document.createElement("strong");
      title.textContent = track.title;
      const artist = document.createElement("span");
      artist.textContent = track.artist;
      const status = document.createElement("span");
      status.className = "offline-song-status";
      status.textContent = "Available offline";
      copy.append(title, artist, status);
      const duration = document.createElement("span");
      duration.className = "song-library-duration";
      duration.textContent = formatTime(track.duration);
      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "row-action offline-remove-button";
      remove.textContent = "×";
      remove.setAttribute("aria-label", `Remove ${track.title} from offline downloads`);
      remove.title = "Remove download";
      remove.addEventListener("click", () => removeOfflineTrack(track));
      row.append(number, play, copy, duration, remove);
      downloadsList.append(row);
    });
  };

  const render = () => {
    renderNotifications();
    const isArtistsView = activeView === "artists";
    const isArtistDetail = isArtistsView && selectedArtistName !== null;
    const isReleaseView = activeView === "songs" || activeView === "albums";
    const isDownloadsView = activeView === "downloads";
    const isRadioView = activeView === "radio";
    const isCreatorView = activeView === "creator" && isLoggedIn && currentRole === "creator";
    const isArtistProfileView = activeView === "profile" && isLoggedIn && currentRole === "creator";
    const isBrowseView = activeView === "browse" || activeView === "playlists";
    const isTrendsView = activeView === "trends";
    const isSettingsView = activeView === "settings";
    const isAccountProfileView = activeView === "account-profile" && isLoggedIn;
    const homeSections = [
      document.querySelector(".popular-artists-section"),
      document.querySelector(".trending-section"),
      document.querySelector(".popular-releases-section"),
      document.querySelector(".popular-radio-section"),
      document.querySelector(".made-for-you-section"),
      document.querySelector(".played-history-section"),
    ].filter(Boolean);

    homeSections.forEach((section) => {
      const isTrendSection = section.classList.contains("trending-section");
      section.hidden = !(isBrowseView || (isTrendsView && isTrendSection));
    });
    artistsView.hidden = !isArtistsView;
    releaseView.hidden = !isReleaseView;
    downloadsView.hidden = !isDownloadsView;
    radioView.hidden = !isRadioView;
    settingsView.hidden = !isSettingsView;
    accountProfileView.hidden = !isAccountProfileView;
    settingsButton.setAttribute("aria-expanded", String(isSettingsView));
    creatorView.hidden = !isCreatorView;
    document.querySelector("#artist-profile-view").hidden = !isArtistProfileView;
    document.querySelector(".artist-profile-preview").hidden = isArtistProfileEditing;
    document.querySelector(".artist-profile-editor").hidden = !isArtistProfileEditing;
    browseView.hidden = !isBrowseView;
    likesView.hidden = activeView !== "likes";
    artistsDirectory.hidden = isArtistDetail;
    artistDetail.hidden = !isArtistDetail;
    document.body.classList.toggle("creator-mode", isLoggedIn && currentRole === "creator");
    const isCreatorAccount = isLoggedIn && currentRole === "creator";
    creatorNavGroup.hidden = !isCreatorAccount;
    libraryNavGroup.hidden = isCreatorAccount;
    sidebarBottom.hidden = isCreatorAccount;
    trendsNavLink.hidden = false;
    discoverBrowseNavLink.hidden = false;
    discoverNavLabel.textContent = "Discover";
    radioAddStation.hidden = !isCreatorAccount;
    if (isCreatorAccount) radioView.insertBefore(radioAddStation, radioStationsGrid);
    else radioSourceNote.after(radioAddStation);
    mobileCreatorNav.hidden = !isCreatorAccount;
    mobileProfileNav.hidden = !isCreatorAccount;
    mobileHomeNav.hidden = false;
    mobileLibraryNav.hidden = isCreatorAccount;
    mobileSavedNav.hidden = isCreatorAccount;
    mobileTrendsNav.hidden = false;
    document.querySelectorAll("[data-scroll-song-form]").forEach((button) => {
      button.hidden = !(isLoggedIn && currentRole === "creator");
    });
    renderCreatorStudio();
    renderArtistProfile();
    renderLikesView();
    renderDownloadsView();

    elements.trendingPrevious.hidden = false;
    elements.trendingNext.hidden = false;
    const trendItemCount = getReleaseTracks().length;
    elements.trendingPrevious.disabled = trendItemCount === 1;
    elements.trendingNext.disabled = trendItemCount === 1;
    playlistLinks.replaceChildren();
    playlists.forEach((playlist) => {
      const link = document.createElement("button");
      link.className = `nav-link playlist-link${activeView === `playlist:${playlist.id}` ? " is-active" : ""}`;
      link.type = "button";
      link.dataset.playlist = playlist.id;
      link.innerHTML = '<span class="nav-icon" aria-hidden="true">♫</span>';
      const label = document.createElement("span");
      label.className = "playlist-name";
      label.textContent = playlist.name;
      link.append(label);
      link.addEventListener("click", () => setView(`playlist:${playlist.id}`));
      playlistLinks.append(link);
    });
    popularArtistsGrid.replaceChildren();
    artistsGrid.replaceChildren();

    if (isArtistsView && !isArtistDetail) {
      const artistLibraryTracks = getReleaseTracks();
      const artistTrackMap = new Map();
      artistLibraryTracks.forEach((track) => {
        getTrackArtistNames(track).forEach((name) => {
          const key = normalizeArtistKey(name);
          const artist = artistTrackMap.get(key) || { name, tracks: [] };
          artist.tracks.push(track);
          artistTrackMap.set(key, artist);
        });
      });
      const artistQuery = searchInput.value.trim().toLocaleLowerCase();
      const directoryArtists = artistLibraryTracks.length
        ? Array.from(artistTrackMap.values())
          .filter((artist) => !artistQuery || artist.name.toLocaleLowerCase().includes(artistQuery)
            || artist.tracks.some((track) => track.title.toLocaleLowerCase().includes(artistQuery)))
          .sort((first, second) => first.name.localeCompare(second.name))
          .map((artist) => ({ ...artist, art: artist.tracks[0]?.art ?? 0 }))
        : getPopularArtists().map((artist) => ({ ...artist, tracks: [] }));

      const followedCount = getFollowedArtistNames().length;
      document.querySelector("#artist-library-count").textContent = directoryArtists.length;
      document.querySelector("#artist-library-song-count").textContent = artistLibraryTracks.length;
      document.querySelector("#artist-library-following-count").textContent = followedCount;
      document.querySelector("#artist-library-message").textContent = artistQuery && !directoryArtists.length
        ? "No artists or songs match that search. Try another name or title."
        : artistLibraryTracks.length
          ? "Every song is filed under its credited artist. Open a profile to browse, play, follow, or like their music."
          : "Get started with these featured artists. Add songs to your collection to build your own artist library.";

      directoryArtists.forEach((artist) => {
        const albumCount = artist.tracks.filter((track) => getReleaseType(track) === "album").length;
        const mixCount = artist.tracks.filter((track) => getReleaseType(track) === "mix").length;
        const singleCount = artist.tracks.length - albumCount - mixCount;
        const engagement = getArtistEngagement(artist.name);
        const card = document.createElement("button");
        card.type = "button";
        card.className = `artist-card${engagement.followed ? " is-followed" : ""}`;
        const avatar = createArtistAvatar(artist);
        const name = document.createElement("strong");
        name.textContent = artist.name;
        const count = document.createElement("span");
        count.className = "artist-track-count";
        count.textContent = `${artist.tracks.length} ${artist.tracks.length === 1 ? "song" : "songs"}`;
        const releases = document.createElement("span");
        releases.className = "artist-release-count";
        releases.textContent = artist.tracks.length
          ? [
            albumCount ? `${albumCount} ${albumCount === 1 ? "album" : "albums"}` : null,
            singleCount ? `${singleCount} ${singleCount === 1 ? "single" : "singles"}` : null,
            mixCount ? `${mixCount} ${mixCount === 1 ? "mix tape" : "mix tapes"}` : null,
          ].filter(Boolean).join(" · ")
          : artist.releaseSummary;
        card.append(avatar, name, count, releases);
        if (engagement.followed) {
          const following = document.createElement("span");
          following.className = "artist-following-label";
          following.textContent = "Following";
          card.append(following);
        }
        card.addEventListener("click", () => {
          openArtist(artist.name);
        });
        artistsGrid.append(card);
      });
    }

    if (isArtistDetail) {
      const artistTracks = getArtistTracks(selectedArtistName);
      const firstTrack = artistTracks[0];
      const engagement = getArtistEngagement(selectedArtistName);
      const likedTrackCount = artistTracks.reduce((count, track) => count + getTrackLikeCount(track), 0);
      artistHero.className = `artist-hero art-${firstTrack?.art ?? 0}`;
      artistHero.setAttribute("aria-label", `${selectedArtistName} artist artwork`);
      applyArtistArtwork(artistHero, selectedArtistName);
      document.querySelector("#artist-detail-name").textContent = selectedArtistName;
      const albumTracks = artistTracks.filter((track) => getReleaseType(track) === "album");
      const albumCount = albumTracks.length;
      const albumStatButton = document.querySelector("#artist-follower-count")?.closest(".artist-stat-pill");
      const albumStatLabel = albumStatButton?.querySelector("span:last-child");
      document.querySelector("#artist-like-count").textContent = String(likedTrackCount + Number(engagement.liked));
      document.querySelector("#artist-follower-count").textContent = String(albumCount);
      if (albumStatLabel) albumStatLabel.textContent = albumCount === 1 ? "album" : "albums";
      if (albumStatButton) albumStatButton.hidden = albumCount === 0;
      const likeButton = document.querySelector("#artist-like-button");
      likeButton.classList.toggle("is-active", engagement.liked);
      likeButton.textContent = engagement.liked ? "♥ Liked" : "♡ Like";
      likeButton.setAttribute("aria-pressed", String(engagement.liked));
      const followButton = document.querySelector("#artist-follow-button");
      followButton.classList.toggle("is-active", engagement.followed);
      followButton.textContent = engagement.followed ? "✓ Following" : "＋ Follow";
      followButton.setAttribute("aria-pressed", String(engagement.followed));
      const songCountLabel = `${artistTracks.length} ${artistTracks.length === 1 ? "song" : "songs"}`;
      document.querySelector("#artist-song-count").textContent = String(artistTracks.length);
      document.querySelector("#artist-track-total").textContent = String(Math.max(artistTracks.length, 42));
      document.querySelector("#artist-play-all").disabled = artistTracks.length === 0;
      const aboutArt = document.querySelector("#artist-about-art");
      aboutArt.className = `artist-about-art art-${firstTrack?.art ?? 0}`;
      applyArtistArtwork(aboutArt, selectedArtistName);
      document.querySelector("#artist-about-initials").textContent = selectedArtistName
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase() || "")
        .join("") || "♫";
      document.querySelector("#artist-about-title").textContent = `The story behind ${selectedArtistName}`;
      const storyText = artistTracks.length
        ? `${selectedArtistName}'s music in your collection spans ${artistTracks.length} ${artistTracks.length === 1 ? "song" : "songs"}: ${artistTracks.slice(0, 3).map((track) => `“${track.title}”`).join(", ")}${artistTracks.length > 3 ? ", and more" : ""}. Explore the tracks above, play them in order, and build your own picture of this artist's sound.`
        : `${selectedArtistName} is one of the artists featured in Lox-Muzik. Add their songs to your collection to start exploring their music and build this artist story around the tracks you love.`;
      document.querySelector("#artist-about-text").textContent = storyText;
      const aboutLikeButton = document.querySelector("#artist-about-like");
      aboutLikeButton.classList.toggle("is-active", engagement.liked);
      aboutLikeButton.textContent = engagement.liked ? "♥ Liked" : "♡ Like";
      aboutLikeButton.setAttribute("aria-pressed", String(engagement.liked));
      const aboutFollowButton = document.querySelector("#artist-about-follow");
      aboutFollowButton.classList.toggle("is-active", engagement.followed);
      aboutFollowButton.textContent = engagement.followed ? "✓ Following" : "＋ Follow";
      aboutFollowButton.setAttribute("aria-pressed", String(engagement.followed));
      artistTrackList.replaceChildren();
      const albumGrid = document.querySelector("#artist-album-grid");
      const albumsPanel = document.querySelector(".artist-albums-panel");
      albumGrid.replaceChildren();
      const hasAlbums = albumCount > 0;
      if (albumsPanel) albumsPanel.hidden = !hasAlbums;

      if (!artistTracks.length) {
        const emptyState = document.createElement("p");
        emptyState.className = "artist-songs-empty";
        emptyState.textContent = "No songs from this artist are in your collection yet.";
        artistTrackList.append(emptyState);
      } else {
        const queue = artistTracks.map((track) => track.id);
        artistTracks.slice(0, 5).forEach((track, index) => {
          const row = document.createElement("button");
          row.type = "button";
          row.className = `artist-song-row${track.id === currentTrackId ? " is-current" : ""}`;
          row.setAttribute("aria-label", `Play ${index + 1}. ${track.title}`);
          const number = document.createElement("span");
          number.className = "artist-song-number";
          number.textContent = String(index + 1);
          const art = document.createElement("span");
          art.className = `track-art art-${track.art}`;
          art.setAttribute("aria-hidden", "true");
          art.textContent = "♫";
          applyTrackArtwork(art, track);
          const copy = document.createElement("span");
          copy.className = "artist-song-copy";
          const title = document.createElement("strong");
          title.textContent = track.title;
          const subtitle = document.createElement("small");
          subtitle.textContent = `${selectedArtistName} • ${getReleaseLabel(track, true)}`;
          copy.append(title, subtitle);
          const duration = document.createElement("span");
          duration.className = "artist-song-duration";
          duration.textContent = formatTime(track.duration);
          row.append(number, art, copy, duration);
          row.addEventListener("click", () => selectTrack(track.id, true, queue));
          artistTrackList.append(row);
        });

        if (hasAlbums) {
          const albumEntries = albumTracks.slice(0, 4).map((track) => ({
            title: track.title,
            subtitle: `${selectedArtistName} • ${getReleaseLabel(track, true)}`,
            art: track.art,
          }));

          albumEntries.forEach((album) => {
            const card = document.createElement("button");
            card.type = "button";
            card.className = "artist-album-card";
            const art = document.createElement("span");
            art.className = `artist-album-art art-${album.art}`;
            art.textContent = "♫";
            const title = document.createElement("strong");
            title.textContent = album.title;
            const meta = document.createElement("small");
            meta.textContent = album.subtitle;
            card.append(art, title, meta);
            card.addEventListener("click", () => selectTrack(artistTracks.find((track) => track.title === album.title)?.id || artistTracks[0]?.id, true, queue));
            albumGrid.append(card);
          });
        }
      }
    }

    const artistCards = getPopularArtists();
    artistCards.forEach((artist) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "popular-artist-card";
      card.setAttribute("aria-label", `View ${artist.name}`);
      const avatar = createArtistAvatar(artist);
      const label = document.createElement("span");
      label.className = "artist-name";
      label.textContent = artist.name;
      const summary = document.createElement("small");
      summary.className = "artist-summary";
      summary.textContent = artist.releaseSummary;
      card.append(avatar, label, summary);
      card.addEventListener("click", () => {
        openArtist(artist.name);
      });
      popularArtistsGrid.append(card);
    });

    if (isReleaseView) {
      const isAlbumsPage = activeView === "albums";
      updateSongTaxonomyFilters();
      const dailyArtistPicks = selectedMadeForYouArtist
        ? getDailyRecommendations().find((artist) => artist.name === selectedMadeForYouArtist)?.tracks || []
        : null;
      const dailyArtistTrackOrder = dailyArtistPicks
        ? new Map(dailyArtistPicks.map((track, index) => [track.id, index]))
        : null;
      const matchingTracks = getReleaseTracks().filter((track) => {
        if (dailyArtistPicks && !dailyArtistTrackOrder.has(track.id)) return false;
        const taxonomy = getSongTaxonomy(track);
        const matchesSearch = !searchInput.value.trim()
          || `${track.title} ${track.artist} ${track.fileName} ${taxonomy.category} ${taxonomy.genre}`.toLocaleLowerCase().includes(searchInput.value.trim().toLocaleLowerCase());
        const releaseType = getReleaseType(track);
        const matchesPage = isAlbumsPage
          ? releaseType === "album"
          : songFilter === "all"
          || (songFilter === "albums" && releaseType === "album")
          || (songFilter === "singles" && releaseType === "single")
          || (songFilter === "mixes" && releaseType === "mix");
        const matchesCategory = isAlbumsPage || selectedSongCategory === "all" || taxonomy.category === selectedSongCategory;
        const matchesGenre = isAlbumsPage || selectedSongGenre === "all" || taxonomy.genre === selectedSongGenre;
        return matchesSearch && matchesPage && matchesCategory && matchesGenre;
      }).sort((first, second) => dailyArtistTrackOrder
        ? dailyArtistTrackOrder.get(first.id) - dailyArtistTrackOrder.get(second.id)
        : Number(second.id === selectedReleaseTrackId) - Number(first.id === selectedReleaseTrackId));
      const songGroups = groupSongsByCategoryAndGenre(matchingTracks);
      const groupedSongTracks = songGroups.flatMap((group) => group.tracks);
      const artistCount = new Set(matchingTracks.flatMap(getTrackArtistNames).map(normalizeArtistKey)).size;
      currentReleaseQueue = (isAlbumsPage ? matchingTracks : groupedSongTracks).map((track) => track.id);
      const selectedReleaseTrack = matchingTracks.find((track) => track.id === selectedReleaseTrackId) || null;
      const knownDuration = matchingTracks.reduce((total, track) => total + (Number.isFinite(track.duration) ? track.duration : 0), 0);
      const releaseTitle = document.querySelector("#release-title");
      const releaseDescription = document.querySelector("#release-description");
      const releaseEyebrow = document.querySelector("#release-eyebrow");
      const releaseHeroArt = document.querySelector("#release-hero-art");
      if (selectedReleaseTrack) {
        releaseHero.className = `release-hero is-track-selected art-${selectedReleaseTrack.art}`;
        applyTrackArtwork(releaseHero, selectedReleaseTrack);
        releaseEyebrow.textContent = "NOW SELECTED";
        releaseTitle.textContent = selectedReleaseTrack.title;
        releaseDescription.textContent = `${selectedReleaseTrack.artist} · ${getReleaseLabel(selectedReleaseTrack, true)}`;
        releaseHeroArt.className = `release-hero-art art-${selectedReleaseTrack.art}`;
        applyTrackArtwork(releaseHeroArt, selectedReleaseTrack);
        document.querySelector("#release-hero-art-label").textContent = selectedReleaseTrack.title
          .split(/\s+/)
          .filter(Boolean)
          .slice(0, 2)
          .map((part) => part[0]?.toUpperCase() || "")
          .join("") || "♫";
      } else {
        releaseHero.className = `release-hero ${isAlbumsPage ? "art-4" : "library-hero art-2"}`;
        releaseEyebrow.textContent = dailyArtistPicks
          ? "DAILY ARTIST PICKS"
          : isAlbumsPage ? "YOUR ALBUM COLLECTION" : "YOUR MUSIC LIBRARY";
        releaseTitle.textContent = isAlbumsPage ? "Albums" : songFilter === "mixes" ? "Mix tapes" : "Songs";
        if (dailyArtistPicks) {
          releaseTitle.textContent = `${selectedMadeForYouArtist}'s picks`;
          const pickCountLabel = dailyArtistPicks.length === 1 ? "song" : "songs";
          releaseDescription.textContent = `${dailyArtistPicks.length} ${pickCountLabel} selected for you today.`;
          releaseHero.className = `release-hero art-${dailyArtistPicks[0]?.art ?? 2}`;
          applyArtistArtwork(releaseHero, selectedMadeForYouArtist);
          releaseHeroArt.className = `release-hero-art art-${dailyArtistPicks[0]?.art ?? 2}`;
          applyArtistArtwork(releaseHeroArt, selectedMadeForYouArtist);
          document.querySelector("#release-hero-art-label").textContent = selectedMadeForYouArtist
            .split(/\s+/)
            .filter(Boolean)
            .slice(0, 2)
            .map((part) => part[0]?.toUpperCase() || "")
            .join("") || "♫";
        } else {
          releaseDescription.textContent = isAlbumsPage
            ? "Your album releases, gathered in one place. Pick an album to start listening."
            : songFilter === "mixes"
              ? "Your mix tapes are grouped here so you can jump into a full DJ session or a curated set quickly."
              : "Every song is grouped by category and genre. Filter the collection, find a favorite, and press play.";
          releaseHeroArt.className = "release-hero-art";
          document.querySelector("#release-hero-art-label").textContent = "♫";
        }
      }
      document.querySelector("#release-count").textContent = matchingTracks.length;
      document.querySelector("#release-count-label").textContent = isAlbumsPage
        ? `${matchingTracks.length === 1 ? "album" : "albums"}`
        : songFilter === "mixes"
          ? `${matchingTracks.length === 1 ? "mix tape" : "mix tapes"}`
          : `${matchingTracks.length === 1 ? "song" : "songs"}`;
      document.querySelector("#release-artist-count").textContent = artistCount;
      document.querySelector("#release-duration").textContent = formatTime(knownDuration);
      document.querySelector("#release-results-label").textContent = matchingTracks.length
        ? isAlbumsPage
          ? `Showing ${matchingTracks.length} albums`
          : songFilter === "mixes"
            ? `Showing ${matchingTracks.length} mix tapes`
            : `Showing ${matchingTracks.length} songs in ${songGroups.length} genre groups`
        : "";
      songFilters.hidden = isAlbumsPage;
      songTaxonomyFilters.hidden = isAlbumsPage;
      songFilters.querySelectorAll("[data-release-filter]").forEach((button) => {
        const isActive = button.dataset.releaseFilter === songFilter;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });
      const releasePlayButton = document.querySelector("#release-play-all");
      const selectedTrackIsPlaying = Boolean(
        selectedReleaseTrack
        && currentTrackId === selectedReleaseTrack.id
        && !audio.paused,
      );
      if (selectedReleaseTrack?.url) {
        releasePlayButton.textContent = selectedTrackIsPlaying ? "Ⅱ Pause" : "▶ Play";
        releasePlayButton.disabled = false;
        releasePlayButton.setAttribute("aria-label", selectedTrackIsPlaying ? "Pause selected song" : "Play selected song");
        releasePlayButton.title = selectedTrackIsPlaying ? "Pause selected song" : "Play selected song";
      } else if (selectedReleaseTrack) {
        releasePlayButton.textContent = "▶ Play";
        releasePlayButton.disabled = false;
        releasePlayButton.setAttribute("aria-label", "Play selected song");
        releasePlayButton.title = "Play selected song";
      } else {
        releasePlayButton.textContent = "▶ Play all";
        releasePlayButton.disabled = currentReleaseQueue.length === 0;
        releasePlayButton.setAttribute("aria-label", "Play all songs");
        releasePlayButton.title = "Play all songs";
      }
      document.querySelector("#release-shuffle").disabled = currentReleaseQueue.length === 0;
      releaseGrid.replaceChildren();
      releaseGrid.className = isAlbumsPage
        ? "release-grid album-release-grid"
        : "release-grid song-release-list";
      releaseEmpty.hidden = matchingTracks.length > 0;
      document.querySelector("#release-empty-title").textContent = getReleaseTracks().length
        ? "No matching music"
        : isAlbumsPage ? "Your album shelf is empty" : "Your music starts here";
      document.querySelector("#release-empty-copy").textContent = getReleaseTracks().length
        ? "Try another search or choose a different filter."
        : isAlbumsPage
          ? "Add music to your collection and album releases will appear here."
          : "Add songs to your collection to see them here.";

      if (isAlbumsPage) {
        matchingTracks.forEach((track) => {
          const card = document.createElement("article");
          card.className = "album-release-card";
          const coverButton = document.createElement("button");
          coverButton.type = "button";
          coverButton.className = `album-cover art-${track.art}`;
          applyTrackArtwork(coverButton, track);
          const trackIsPlaying = track.id === currentTrackId && !audio.paused;
          coverButton.setAttribute("aria-label", `${trackIsPlaying ? "Pause" : "Play"} ${track.title} by ${track.artist}`);
          const coverTitle = document.createElement("span");
          coverTitle.textContent = track.title;
          const coverPlay = document.createElement("span");
          coverPlay.className = "album-cover-play";
          coverPlay.setAttribute("aria-hidden", "true");
          coverPlay.textContent = trackIsPlaying ? "Ⅱ" : "▶";
          coverButton.append(coverTitle, coverPlay);
          coverButton.addEventListener("click", () => {
            if (trackIsPlaying) togglePlayback();
            else selectTrack(track.id, true, [track.id]);
          });
          const copy = document.createElement("div");
          copy.className = "album-release-copy";
          const title = document.createElement("strong");
          title.textContent = track.title;
          const artist = document.createElement("span");
          artist.textContent = track.artist;
          const detail = document.createElement("small");
          detail.textContent = `Album · ${formatTime(track.duration)}`;
          const actions = document.createElement("span");
          actions.className = "album-release-actions";
          const download = createDownloadButton(track);
          actions.append(download);
          copy.append(title, artist, detail, actions);
          card.append(coverButton, copy);
          releaseGrid.append(card);
        });
      } else {
        let previousGroupKey = null;
        groupedSongTracks.forEach((track, index) => {
          const taxonomy = getSongTaxonomy(track);
          const groupKey = `${taxonomy.category}::${taxonomy.genre}`;
          if (groupKey !== previousGroupKey) {
            const group = songGroups.find((item) => `${item.category}::${item.genre}` === groupKey);
            const heading = document.createElement("div");
            heading.className = "song-category-heading";
            const category = document.createElement("small");
            category.textContent = taxonomy.category;
            const genre = document.createElement("strong");
            genre.textContent = taxonomy.genre;
            const count = document.createElement("span");
            count.textContent = `${group.tracks.length} ${group.tracks.length === 1 ? "song" : "songs"}`;
            heading.append(category, genre, count);
            releaseGrid.append(heading);
            previousGroupKey = groupKey;
          }
          const row = document.createElement("article");
          row.className = `song-library-row${track.id === currentTrackId ? " is-current" : ""}`;
          if (track.id === selectedReleaseTrackId) row.classList.add("is-selected");
          const number = document.createElement("span");
          number.className = "song-library-number";
          number.textContent = String(index + 1).padStart(2, "0");
          const artButton = document.createElement("button");
          artButton.type = "button";
          artButton.className = `track-art song-library-art art-${track.art}`;
          applyTrackArtwork(artButton, track);
          const trackIsPlaying = track.id === currentTrackId && !audio.paused;
          artButton.setAttribute("aria-label", `${trackIsPlaying ? "Pause" : "Play"} ${track.title}`);
          artButton.textContent = trackIsPlaying ? "Ⅱ" : "▶";
          artButton.addEventListener("click", () => {
            if (trackIsPlaying) togglePlayback();
            else selectTrack(track.id, true, currentReleaseQueue);
          });
          const copy = document.createElement("div");
          copy.className = "song-library-copy";
          const title = document.createElement("strong");
          title.textContent = track.title;
          const artist = document.createElement("span");
          artist.textContent = track.artist;
          const release = document.createElement("span");
          release.className = "song-library-release";
          release.textContent = getReleaseLabel(track, true);
          const genre = document.createElement("span");
          genre.className = "song-library-genre";
          genre.textContent = taxonomy.genre;
          genre.title = taxonomy.category;
          copy.append(title, artist, genre);
          const duration = document.createElement("span");
          duration.className = "song-library-duration";
          duration.textContent = formatTime(track.duration);
          const like = document.createElement("button");
          like.type = "button";
          const trackIsLiked = isTrackLiked(track);
          like.className = `row-action${trackIsLiked ? " is-liked" : ""}`;
          like.setAttribute("aria-label", trackIsLiked ? `Unlike ${track.title}` : `Like ${track.title}`);
          like.textContent = trackIsLiked ? "♥" : "♡";
          like.addEventListener("click", () => {
            toggleTrackLike(track);
            render();
            updatePlayer();
          });
          const download = createDownloadButton(track);
          row.addEventListener("click", (event) => {
            if (!event.target.closest("button")) chooseReleaseTrack(track, currentReleaseQueue);
          });
          row.append(number, artButton, copy, release, duration, like, download);
          releaseGrid.append(row);
        });
      }
    }

    const featuredIds = new Set(localFeaturedTracks.map((track) => track.id));
    const featuredOrder = new Map(localFeaturedTracks.map((track, index) => [track.id, index]));
    const trendCatalog = [
      ...localFeaturedTracks,
      ...localCatalogTracks.filter((track) => !featuredIds.has(track.id)),
      ...tracks,
    ].sort((first, second) => (
      Number(!first.isLocalFeatured) - Number(!second.isLocalFeatured)
      || trendScore(second) - trendScore(first)
      || (featuredOrder.get(first.id) ?? Number.MAX_SAFE_INTEGER)
      - (featuredOrder.get(second.id) ?? Number.MAX_SAFE_INTEGER)
      || first.fileName.localeCompare(second.fileName)
    ));
    const trendingTracks = trendCatalog;
    trendingGrid.replaceChildren();
    const trendCount = trendingTracks.length;
    trendOffset %= trendCount;
    const visibleCount = Math.min(5, trendCount);
    const firstPosition = -Math.floor((visibleCount - 1) / 2);
    Array.from({ length: visibleCount }, (_, index) => firstPosition + index).forEach((position) => {
      const index = (trendOffset + position + trendCount) % trendCount;
      const track = trendingTracks[index];
      const card = document.createElement("div");
      card.className = "trending-card";
      card.dataset.position = position;
      const playButton = document.createElement("button");
      playButton.type = "button";
      playButton.className = "trending-card-play";
      playButton.setAttribute("aria-label", `Play ${track.title} by ${track.artist}, ranked ${index + 1}`);
      playButton.addEventListener("click", () => selectTrack(track.id, true, trendingTracks.map((item) => item.id)));
      const art = document.createElement("span");
      art.className = `trend-art art-${track.art}`;
      art.setAttribute("aria-hidden", "true");
      applyTrackArtwork(art, track);
      const rank = document.createElement("span");
      rank.className = "trend-rank";
      rank.textContent = String(index + 1).padStart(2, "0");
      const title = document.createElement("span");
      title.className = "trend-art-title";
      title.textContent = track.title;
      const artist = document.createElement("span");
      artist.className = "trend-art-artist";
      artist.textContent = track.artist;
      art.append(rank, title, artist);
      playButton.append(art);
      card.append(playButton);
      if (track.sourceUrl) {
        const sourceLink = document.createElement("a");
        sourceLink.className = "trending-source-link";
        sourceLink.href = track.sourceUrl;
        sourceLink.target = "_blank";
        sourceLink.rel = "noopener noreferrer";
        sourceLink.textContent = "↗";
        sourceLink.title = `Open ${track.title} by ${track.artist} on ${track.sourceName || "Jamendo"}`;
        sourceLink.setAttribute("aria-label", `View ${track.title} by ${track.artist} on ${track.sourceName || "Jamendo"}`);
        card.append(sourceLink);
      }
      trendingGrid.append(card);
    });

    const creatorArtistKey = normalizeArtistKey(creatorName);
    const chartTracks = isCreatorAccount
      ? trendingTracks.filter((track) => getTrackArtistNames(track)
        .some((artistName) => normalizeArtistKey(artistName) === creatorArtistKey))
      : trendingTracks;
    document.querySelector("#trend-chart-description").textContent = isCreatorAccount
      ? `${chartTracks.length} songs credited to ${creatorName}, filed under your artist profile. Embedded song covers appear first; artist artwork fills in when a song has no cover.`
      : `${chartTracks.length} songs from your music folder and creator uploads, filed under their credited artists. Embedded song covers appear first; artist artwork fills in when a song has no cover.`;
    document.querySelector("#trend-chart-status").textContent = isCreatorAccount
      ? `${creatorName.toLocaleUpperCase()} · ${chartTracks.length} TRACKS`
      : `YOUR FILES · ${chartTracks.length} TRACKS`;
    trendChartList.replaceChildren();
    if (!chartTracks.length) {
      const empty = document.createElement("p");
      empty.className = "trend-chart-empty";
      empty.textContent = isCreatorAccount
        ? `No songs credited to ${creatorName} appear in this collection yet.`
        : "More songs will appear here as the chart grows.";
      trendChartList.append(empty);
    } else {
      chartTracks.slice(0, trendChartVisibleCount).forEach((track, index) => {
        const row = document.createElement("article");
        row.className = `trend-chart-row${track.id === currentTrackId ? " is-current" : ""}`;
        const rank = document.createElement("span");
        rank.className = "trend-chart-rank";
        rank.textContent = String(index + 1).padStart(2, "0");
        const cover = document.createElement("span");
        cover.className = `trend-chart-cover art-${track.art}`;
        cover.setAttribute("aria-hidden", "true");
        cover.textContent = "♫";
        applyTrackArtwork(cover, track);
        const copy = document.createElement("span");
        copy.className = "trend-chart-copy";
        const title = document.createElement("strong");
        title.textContent = track.title;
        const artist = document.createElement("small");
        artist.textContent = track.artist;
        copy.append(title, artist);
        const credits = document.createElement("span");
        credits.className = "trend-chart-credits";
        if (track.sourceUrl) {
          const source = document.createElement("a");
          source.className = "trend-chart-source";
          source.href = track.sourceUrl;
          source.target = "_blank";
          source.rel = "noopener noreferrer";
          source.setAttribute("aria-label", `Open ${track.title} by ${track.artist} on ${track.sourceName || "Jamendo"}`);
          source.textContent = `${track.sourceName || "JAMENDO"} ↗`;
          source.title = track.attribution || `Open ${track.title} by ${track.artist} on ${track.sourceName || "Jamendo"}`;
          credits.append(source);
        }
        if (track.licenseUrl) {
          const license = document.createElement("a");
          license.className = "trend-chart-license";
          license.href = track.licenseUrl;
          license.target = "_blank";
          license.rel = "noopener noreferrer";
          license.textContent = track.licenseLabel || "CC";
          license.setAttribute("aria-label", `View Creative Commons license for ${track.title}`);
          license.title = track.licenseUrl;
          credits.append(license);
        }
        const type = document.createElement("span");
        type.className = "trend-chart-type";
        type.textContent = getReleaseLabel(track).toUpperCase();
        const play = document.createElement("button");
        play.type = "button";
        play.className = "trend-chart-play";
        play.textContent = track.id === currentTrackId && !audio.paused ? "Ⅱ" : "▶";
        play.setAttribute("aria-label", `Play ${track.title} by ${track.artist}`);
        play.addEventListener("click", () => selectTrack(track.id, true, chartTracks.map((item) => item.id)));
        row.append(rank, cover, copy, credits, type, play);
        trendChartList.append(row);
      });
    }
    trendChartMore.hidden = chartTracks.length <= trendChartVisibleCount;

    const popularReleases = getReleaseTracks()
      .slice()
      .sort((first, second) => trendScore(second) - trendScore(first))
      .slice(0, 8);
    popularReleasesGrid.replaceChildren();
    popularReleases.forEach((track) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "discovery-card";
      card.setAttribute("aria-label", `Play ${track.title} by ${track.artist}`);
      const art = document.createElement("span");
      art.className = `discovery-card-art art-${track.art}`;
      art.setAttribute("aria-hidden", "true");
      art.textContent = "♫";
      applyTrackArtwork(art, track);
      const title = document.createElement("strong");
      title.textContent = track.title;
      const artist = document.createElement("span");
      artist.textContent = track.artist;
      const type = document.createElement("small");
      type.textContent = getReleaseLabel(track, true);
      card.append(art, title, artist, type);
      card.addEventListener("click", () => selectTrack(track.id, true, popularReleases.map((item) => item.id)));
      popularReleasesGrid.append(card);
    });

    renderRadioStationCards(popularRadioGrid, radioStations.slice(0, 6), true);
    const visibleRadioStations = getVisibleRadioStations();
    renderRadioStationCards(radioStationsGrid, visibleRadioStations);
    radioSearchEmpty.hidden = !searchInput.value.trim() || visibleRadioStations.length > 0;

    playedHistoryGrid.replaceChildren();
    playedTrackIds.forEach((id) => {
      const track = findTrack(id);
      if (!track) return;
      const card = document.createElement("button");
      card.className = "recent-card";
      card.type = "button";
      card.setAttribute("aria-label", `Play ${track.title} by ${track.artist}`);
      const art = document.createElement("div");
      art.className = `track-art art-${track.art}`;
      art.setAttribute("aria-hidden", "true");
      art.textContent = "♫";
      applyTrackArtwork(art, track);
      const title = document.createElement("strong");
      title.textContent = track.title;
      const artist = document.createElement("span");
      artist.textContent = track.artist;
      card.append(art, title, artist);
      card.addEventListener("click", () => selectTrack(track.id, true));
      playedHistoryGrid.append(card);
    });
    playedHistoryEmpty.hidden = playedHistoryGrid.childElementCount > 0;

    const recommendations = getDailyRecommendations();
    if (selectedMadeForYouArtist && !recommendations.some((artist) => artist.name === selectedMadeForYouArtist)) {
      selectedMadeForYouArtist = null;
    }
    madeForYouCards.replaceChildren();
    recommendations.forEach((artist) => {
      const featuredTrack = artist.tracks[0];
      const card = document.createElement("button");
      const isSelected = artist.name === selectedMadeForYouArtist;
      card.type = "button";
      card.className = `made-for-you-card${isSelected ? " is-selected" : ""}`;
      card.setAttribute("aria-pressed", String(isSelected));
      card.setAttribute("aria-label", `${artist.name}: ${featuredTrack.title}, ${artist.tracks.length} ${artist.tracks.length === 1 ? "song" : "songs"}`);
      const art = document.createElement("span");
      art.className = `made-for-you-art art-${featuredTrack.art}`;
      art.setAttribute("aria-hidden", "true");
      applyTrackArtwork(art, featuredTrack);
      const initials = document.createElement("span");
      initials.className = "made-for-you-initials";
      initials.textContent = artist.name
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase() || "")
        .join("") || "♫";
      art.append(initials);
      const name = document.createElement("strong");
      name.textContent = artist.name;
      const songPick = document.createElement("span");
      songPick.className = "made-for-you-featured-song";
      songPick.textContent = featuredTrack.title;
      const count = document.createElement("small");
      count.textContent = `${artist.tracks.length} ${artist.tracks.length === 1 ? "song" : "songs"} picked`;
      card.append(art, name, songPick, count);
      card.addEventListener("click", () => {
        selectedMadeForYouArtist = artist.name;
        selectedReleaseTrackId = null;
        songFilter = "all";
        setView("songs");
      });
      madeForYouCards.append(card);
    });
  };

  const updatePlayer = () => {
    const track = currentTrack();
    elements.playButton.disabled = !track;
    elements.likeButton.disabled = !track;
    elements.downloadButton.disabled = !track;
    elements.songNowLike.disabled = !track;
    elements.songNowPlay.disabled = !track;
    elements.songNowShuffle.disabled = !track;
    elements.songNowPrevious.disabled = !track;
    elements.songNowNext.disabled = !track;
    elements.songNowSeek.disabled = !track;
    if (!track) return;
    elements.downloadButton.title = track.isJamendo && !track.downloadAllowed
      ? "Open the track source for its license and download options"
      : "Download this song";
    elements.playerArt.className = `mini-art art-${track.art}`;
    applyTrackArtwork(elements.playerArt, track);
    elements.playerTitle.textContent = track.title;
    elements.playerArtist.textContent = track.artist;
    elements.songNowArt.className = `mini-art art-${track.art}`;
    applyTrackArtwork(elements.songNowArt, track);
    elements.songNowTitle.textContent = track.title;
    elements.songNowArtist.textContent = track.artist;
    elements.songNowArtistInfo.textContent = track.artist;
    elements.songNowAlbum.textContent = track.album || (track.releaseType === "album" ? "Album" : "Single");
    elements.songNowGenre.textContent = track.genre || track.genres?.join(", ") || "Not specified";
    elements.songNowRelease.textContent = track.releaseYear || track.year || "Not specified";
    elements.songNowDuration.textContent = formatTime(track.duration || audio.duration);
    const trackIsLiked = isTrackLiked(track);
    elements.songNowLike.textContent = trackIsLiked ? "♥" : "♡";
    elements.songNowLike.setAttribute("aria-label", trackIsLiked ? "Unlike song" : "Like song");
    elements.songNowLike.setAttribute("aria-pressed", String(trackIsLiked));
    elements.songNowLike.title = trackIsLiked ? "Unlike song" : "Like song";
    elements.likeButton.textContent = trackIsLiked ? "♥" : "♡";
    elements.likeButton.classList.toggle("is-liked", trackIsLiked);
    elements.likeButton.setAttribute("aria-label", trackIsLiked ? "Unlike this song" : "Like this song");
    elements.duration.textContent = formatTime(track.duration || audio.duration);
  };

  const applyPlaybackVolume = (volume) => {
    if (crossfadeInProgress) {
      audio.volume = volume * crossfadeProgress;
      standbyAudio.volume = volume * (1 - crossfadeProgress);
    } else {
      audio.volume = volume;
      standbyAudio.volume = volume;
    }
    radioAudio.volume = volume;
  };

  const stopCrossfade = () => {
    crossfadeGeneration += 1;
    if (crossfadeTimer !== null) window.clearTimeout(crossfadeTimer);
    crossfadeTimer = null;
    crossfadeInProgress = false;
    crossfadeRequestPending = false;
    crossfadeProgress = 0;
    suppressedCrossfadePlayEvents.delete(audio);
    suppressedCrossfadePlayEvents.delete(standbyAudio);
    standbyAudio.pause();
    standbyAudio.removeAttribute("src");
    standbyAudio.load();
    standbyAudio.volume = Number(elements.volume.value);
    audio.volume = Number(elements.volume.value);
  };

  const startCrossfade = (track, queue) => {
    if (crossfadeInProgress) stopCrossfade();
    crossfadeRequestPending = true;
    const incoming = standbyAudio;
    const outgoing = audio;
    const generation = ++crossfadeGeneration;
    incoming.pause();
    incoming.src = track.url;
    incoming.preload = getAudioPreload();
    incoming.playbackRate = outgoing.playbackRate;
    incoming.volume = 0;
    incoming.load();
    suppressedCrossfadePlayEvents.add(incoming);
    incoming.play().then(() => {
      crossfadeRequestPending = false;
      if (generation !== crossfadeGeneration) {
        incoming.pause();
        return;
      }
      audio = incoming;
      standbyAudio = outgoing;
      currentTrackId = track.id;
      selectedReleaseTrackId = track.id;
      activeQueue = queue ? queue.slice() : null;
      setPlayerBarVisibility(true);
      document.body.classList.add("has-player");
      crossfadeInProgress = true;
      crossfadeProgress = 0;
      track.plays = (Number(track.plays) || 0) + 1;
      const previousPlayIndex = playedTrackIds.indexOf(currentTrackId);
      if (previousPlayIndex !== -1) playedTrackIds.splice(previousPlayIndex, 1);
      playedTrackIds.unshift(currentTrackId);
      updatePlayer();
      render();
      elements.playButton.textContent = "Ⅱ";
      elements.songNowPlay.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14M16 5v14"/></svg>';
      elements.songNowPlay.setAttribute("aria-label", "Pause");
      elements.playButton.setAttribute("aria-label", "Pause");
      elements.playButton.title = "Pause";
      updateScreenWakeLock();

      const duration = Math.max(250, Math.min(
        Number(crossfadeDuration.value) * 1000,
        Number.isFinite(outgoing.duration) && outgoing.duration > 0 ? outgoing.duration * 500 : Number(crossfadeDuration.value) * 1000,
      ));
      const startedAt = performance.now();
      const updateFade = () => {
        if (generation !== crossfadeGeneration) return;
        const progressRatio = Math.min(1, (performance.now() - startedAt) / duration);
        crossfadeProgress = progressRatio;
        const blendCurve = soundEffectSelect.value;
        let incomingLevel = progressRatio;
        let outgoingLevel = 1 - progressRatio;
        if (blendCurve === "soft") {
          incomingLevel = progressRatio * progressRatio * (3 - 2 * progressRatio);
          outgoingLevel = 1 - incomingLevel;
        } else if (blendCurve === "strong") {
          incomingLevel = Math.sin(progressRatio * Math.PI / 2);
          outgoingLevel = Math.cos(progressRatio * Math.PI / 2);
        }
        const volume = Number(elements.volume.value);
        audio.volume = volume * incomingLevel;
        standbyAudio.volume = volume * outgoingLevel;
        if (progressRatio >= 1) {
          standbyAudio.pause();
          standbyAudio.removeAttribute("src");
          standbyAudio.load();
          crossfadeTimer = null;
          crossfadeInProgress = false;
          crossfadeProgress = 0;
          standbyAudio.volume = volume;
          audio.volume = volume;
          return;
        }
        crossfadeTimer = window.setTimeout(updateFade, 40);
      };
      updateFade();
    }).catch(() => {
      crossfadeRequestPending = false;
      suppressedCrossfadePlayEvents.delete(incoming);
      if (generation !== crossfadeGeneration) return;
      incoming.pause();
      incoming.removeAttribute("src");
      incoming.load();
      incoming.volume = Number(elements.volume.value);
      showToast("Crossfade could not start this track; the current song will keep playing.");
    });
  };

  const getNextCrossfadeTrack = () => {
    if (repeatModeSelect.value === "one") return null;
    if (!autoplayNext.enabled && repeatModeSelect.value !== "all") return null;
    const queue = activeQueue
      ? activeQueue.map(findTrack).filter(Boolean)
      : getReleaseTracks();
    const index = queue.findIndex((item) => item.id === currentTrackId);
    if (index < 0 || !queue.length) return null;
    const queueIds = activeQueue ? queue.map((item) => item.id) : null;
    if (index < queue.length - 1) return { track: queue[index + 1], queue: queueIds };
    if (repeatModeSelect.value === "all" || (!activeQueue && autoplayNext.enabled)) {
      return { track: queue[0], queue: queueIds };
    }
    return null;
  };

  const updateScreenWakeLock = async () => {
    const isPlaybackActive = (!audio.paused && Boolean(currentTrack()))
      || (Boolean(currentRadioStation) && !radioAudio.paused);
    if (!screenLockToggle.checked || !isPlaybackActive || document.visibilityState !== "visible") {
      if (keepScreenAwake.lock) {
        const lock = keepScreenAwake.lock;
        keepScreenAwake.lock = null;
        await lock.release();
      }
      return;
    }
    if (!("wakeLock" in navigator) || screenWakeLockRequestPending || keepScreenAwake.lock) return;
    screenWakeLockRequestPending = true;
    try {
      const lock = await navigator.wakeLock.request("screen");
      const isStillPlaying = (!audio.paused && Boolean(currentTrack()))
        || (Boolean(currentRadioStation) && !radioAudio.paused);
      if (!screenLockToggle.checked || !isStillPlaying || document.visibilityState !== "visible") {
        await lock.release();
        return;
      }
      keepScreenAwake.lock = lock;
      lock.addEventListener("release", () => {
        if (keepScreenAwake.lock === lock) keepScreenAwake.lock = null;
      }, { once: true });
    } catch (error) {
      screenLockToggle.checked = false;
      keepScreenAwake.enabled = false;
      writeStoredValue("loxMuzikKeepScreenAwake", false);
      showToast(error instanceof Error ? `Screen lock could not be enabled: ${error.message}` : "Screen lock could not be enabled.");
    } finally {
      screenWakeLockRequestPending = false;
    }
  };

  const selectTrack = (id, shouldPlay, queue = null) => {
    const track = findTrack(id);
    if (!track) return;
    if (shouldPlay && !requireLogin("play music")) return;
    if (crossfadeInProgress || crossfadeRequestPending) stopCrossfade();
    if (currentRadioStation) stopRadioStation();
    if (shouldPlay && currentTrackId !== track.id && crossfadeEnabled.value && audio.currentSrc && !audio.paused) {
      startCrossfade(track, queue);
      return;
    }
    activeQueue = queue ? queue.slice() : null;
    currentTrackId = id;
    selectedReleaseTrackId = id;
    if (shouldPlay) {
      setPlayerBarVisibility(true);
      document.body.classList.add("has-player");
      if (window.matchMedia("(max-width: 760px)").matches) openSongNowPlaying();
    }
    audio.src = track.url;
    audio.preload = getAudioPreload();
    audio.playbackRate = Number(playbackSpeedSelect.value);
    audio.load();
    standbyAudio.pause();
    standbyAudio.removeAttribute("src");
    standbyAudio.load();
    standbyAudio.playbackRate = audio.playbackRate;
    progress.value = 0;
    elements.currentTime.textContent = "0:00";
    updatePlayer();
    render();
    if (shouldPlay) {
      audio.play().catch(() => showToast(audioPlaybackErrorMessage()));
    }
  };

  const togglePlayback = () => {
    if (!currentTrack()) return;
    if (!requireLogin("play music")) return;
    if (audio.paused) {
      if (currentRadioStation) stopRadioStation();
      audio.play().catch(() => showToast(audioPlaybackErrorMessage()));
    } else {
      audio.pause();
    }
  };

  const moveTrack = (direction) => {
    if (activeQueue) {
      const queueTracks = activeQueue.map(findTrack).filter(Boolean);
      const index = queueTracks.findIndex((track) => track.id === currentTrackId);
      if (!queueTracks.length || index === -1) {
        activeQueue = null;
      } else {
        if (direction > 0 && index === queueTracks.length - 1) {
          if (repeatModeSelect.value !== "all") {
            activeQueue = null;
            return;
          }
        }
        const nextIndex = (index + direction + queueTracks.length) % queueTracks.length;
        selectTrack(queueTracks[nextIndex].id, true, queueTracks.map((track) => track.id));
        return;
      }
    }
    const libraryTracks = getReleaseTracks();
    if (!libraryTracks.length) return;
    const index = libraryTracks.findIndex((track) => track.id === currentTrackId);
    const nextIndex = index < 0 ? 0 : (index + direction + libraryTracks.length) % libraryTracks.length;
    selectTrack(libraryTracks[nextIndex].id, true, libraryTracks.map((track) => track.id));
  };

  const setView = (view, artistName = null) => {
    if (view === "creator" && !requireCreator("open Creator Studio")) return;
    if (view === "profile" && !requireCreator("open your artist profile")) return;
    if (view === "account-profile" && !requireLogin("open your profile")) return;
    if (view === "downloads" && !requireLogin("open your downloads")) return;
    if (isLoggedIn && currentRole === "creator"
      && (["playlists", "songs", "albums", "artists", "likes"].includes(view)
        || view.startsWith("playlist:"))) {
      showToast("That section is only available to listener accounts.");
      return;
    }
    if (view === "profile" && activeView !== "profile") isArtistProfileEditing = false;
    closeTopbarPanels();
    if (view === "artists" && !artistName) searchInput.value = "";
    activeView = view;
    selectedArtistName = view === "artists" ? artistName : null;
    document.querySelectorAll("[data-view]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.view === view);
    });
    document.querySelectorAll(".playlist-link").forEach((button) => {
      button.classList.toggle("is-active", `playlist:${button.dataset.playlist}` === view);
    });
    render();
  };

  document.querySelectorAll(".brand[href='#']").forEach((brandLink) => {
    brandLink.addEventListener("click", (event) => {
      event.preventDefault();
      selectedMadeForYouArtist = null;
      setView(currentRole === "creator" ? "creator" : "browse");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  document.querySelector("#artist-back").addEventListener("click", () => {
    selectedArtistName = null;
    searchInput.value = "";
    render();
  });
  document.querySelector("#artist-like-button").addEventListener("click", () => {
    toggleArtistLike(selectedArtistName);
    render();
  });
  document.querySelector("#artist-follow-button").addEventListener("click", () => {
    toggleArtistFollow(selectedArtistName);
    render();
  });
  document.querySelector("#artist-about-like").addEventListener("click", () => {
    toggleArtistLike(selectedArtistName);
    render();
  });
  document.querySelector("#artist-about-follow").addEventListener("click", () => {
    toggleArtistFollow(selectedArtistName);
    render();
  });
  songFilters.querySelectorAll("[data-release-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      songFilter = button.dataset.releaseFilter;
      render();
    });
  });
  songCategoryFilter.addEventListener("change", () => {
    selectedSongCategory = songCategoryFilter.value;
    selectedSongGenre = "all";
    render();
  });
  songGenreFilter.addEventListener("change", () => {
    selectedSongGenre = songGenreFilter.value;
    render();
  });
  document.querySelector("#release-play-all").addEventListener("click", () => {
    const selectedTrack = getReleaseTracks().find((track) => track.id === selectedReleaseTrackId);
    if (selectedTrack) {
      if (currentTrackId === selectedTrack.id) {
        togglePlayback();
      } else {
        selectTrack(selectedTrack.id, true, currentReleaseQueue);
      }
      return;
    }
    playQueue(currentReleaseQueue);
  });
  document.querySelector("#release-shuffle").addEventListener("click", () => {
    playQueue(currentReleaseQueue, true);
  });
  document.querySelector("#artist-play-all").addEventListener("click", () => {
    const queue = getArtistTracks(selectedArtistName).map((track) => track.id);
    if (!queue.length) return;
    selectTrack(queue[0], true, queue);
  });

  let downloadArtworkBlobPromise = null;
  const getDownloadArtwork = async (track) => {
    if (track.coverUrl) {
      const coverUrl = new URL(track.coverUrl, window.location.href);
      if (coverUrl.protocol === "blob:" || coverUrl.origin === window.location.origin) {
        const response = await fetch(coverUrl.href);
        if (!response.ok) throw new Error(`Could not load the existing song cover (HTTP ${response.status}).`);
        const blob = await response.blob();
        if (!blob.type.startsWith("image/") || !blob.size) throw new Error("The existing song cover is not a valid image.");
        return { blob, source: "song" };
      }
    }
    if (!downloadArtworkBlobPromise) {
      downloadArtworkBlobPromise = fetch("imgs/lox-muzik-download-cover.png").then(async (response) => {
        if (!response.ok) throw new Error(`Could not load Lox-Muzik cover artwork (HTTP ${response.status}).`);
        const blob = await response.blob();
        if (blob.type !== "image/png" || !blob.size) throw new Error("Lox-Muzik download artwork is not a valid PNG image.");
        return { blob, source: "lox-muzik" };
      });
    }
    return downloadArtworkBlobPromise;
  };
  const joinByteArrays = (arrays) => {
    const result = new Uint8Array(arrays.reduce((length, array) => length + array.length, 0));
    let offset = 0;
    arrays.forEach((array) => {
      result.set(array, offset);
      offset += array.length;
    });
    return result;
  };
  const encodeSynchsafeInteger = (value) => Uint8Array.of(
    (value >> 21) & 0x7f,
    (value >> 14) & 0x7f,
    (value >> 7) & 0x7f,
    value & 0x7f,
  );
  const decodeSynchsafeInteger = (bytes, offset) => (
    (bytes[offset] << 21) | (bytes[offset + 1] << 14) | (bytes[offset + 2] << 7) | bytes[offset + 3]
  );
  const createId3Frame = (name, data) => {
    const header = new Uint8Array(10);
    header.set(new TextEncoder().encode(name), 0);
    header.set(encodeSynchsafeInteger(data.length), 4);
    return joinByteArrays([header, data]);
  };
  const createId3ArtworkTag = (imageBytes, title, artist, mimeType) => {
    const encoder = new TextEncoder();
    const pictureFormat = mimeType === "image/png" ? 3 : mimeType === "image/jpeg" ? 2 : 0;
    const textFrame = (name, value) => createId3Frame(name, joinByteArrays([Uint8Array.of(3), encoder.encode(value)]));
    const pictureFrame = createId3Frame("APIC", joinByteArrays([
      Uint8Array.of(3),
      encoder.encode(mimeType),
      Uint8Array.of(0, pictureFormat, 0),
      imageBytes,
    ]));
    const frames = joinByteArrays([
      textFrame("TIT2", title),
      textFrame("TPE1", artist),
      textFrame("TALB", "Lox-Muzik"),
      pictureFrame,
    ]);
    const header = new Uint8Array([
      0x49, 0x44, 0x33, 0x04, 0x00, 0x00,
      ...encodeSynchsafeInteger(frames.length),
    ]);
    return joinByteArrays([header, frames]);
  };
  const stripMp3Metadata = (bytes) => {
    let start = 0;
    let end = bytes.length;
    if (end >= 10 && bytes[0] === 0x49 && bytes[1] === 0x44 && bytes[2] === 0x33) {
      if (bytes.slice(6, 10).some((value) => value & 0x80)) throw new Error("The MP3 file has an invalid ID3 tag.");
      const tagEnd = 10 + decodeSynchsafeInteger(bytes, 6);
      if (tagEnd > end) throw new Error("The MP3 file has an incomplete ID3 tag.");
      start = tagEnd;
    }
    if (end - start >= 128 && bytes[end - 128] === 0x54 && bytes[end - 127] === 0x41 && bytes[end - 126] === 0x47) {
      end -= 128;
    }
    return bytes.slice(start, end);
  };
  const createFlacPictureBlock = (imageBytes, mimeType) => {
    const encoder = new TextEncoder();
    const mime = encoder.encode(mimeType);
    const fields = [
      3,
      mime.length,
      0,
      0,
      0,
      0,
      0,
      imageBytes.length,
    ];
    const header = new Uint8Array(fields.length * 4 + mime.length);
    const view = new DataView(header.buffer);
    let offset = 0;
    fields.forEach((value, index) => {
      view.setUint32(offset, value);
      offset += 4;
      if (index === 1) {
        header.set(mime, offset);
        offset += mime.length;
      }
    });
    return joinByteArrays([header, imageBytes]);
  };
  const createFlacMetadataBlock = (type, isLast, data) => {
    if (data.length > 0xffffff) throw new Error("The cover image is too large to embed in this FLAC file.");
    const header = Uint8Array.of((isLast ? 0x80 : 0) | type, (data.length >> 16) & 0xff, (data.length >> 8) & 0xff, data.length & 0xff);
    return joinByteArrays([header, data]);
  };
  const embedDownloadArtwork = async (blob, fileName, track) => {
    const artwork = await getDownloadArtwork(track);
    const artworkBlob = artwork.blob;
    const artworkBytes = new Uint8Array(await artworkBlob.arrayBuffer());
    const mimeType = artworkBlob.type || "image/png";
    const id3Tag = createId3ArtworkTag(artworkBytes, String(track.title || ""), String(track.artist || ""), mimeType);
    const extension = String(fileName || "").split(".").pop().toLocaleLowerCase();
    if (extension === "mp3" || blob.type === "audio/mpeg" || blob.type === "audio/mp3") {
      const audioBytes = stripMp3Metadata(new Uint8Array(await blob.arrayBuffer()));
      return { blob: new Blob([id3Tag, audioBytes], { type: blob.type || "audio/mpeg" }), embedded: true, coverSource: artwork.source };
    }
    if (extension === "wav" || ["audio/wav", "audio/x-wav", "audio/wave"].includes(blob.type)) {
      const bytes = new Uint8Array(await blob.arrayBuffer());
      if (bytes.length < 12 || String.fromCharCode(...bytes.slice(0, 4)) !== "RIFF" || String.fromCharCode(...bytes.slice(8, 12)) !== "WAVE") {
        throw new Error("The WAV file has an invalid RIFF header.");
      }
      const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
      const chunks = [];
      let offset = 12;
      while (offset + 8 <= bytes.length) {
        const chunkName = String.fromCharCode(...bytes.slice(offset, offset + 4));
        const chunkSize = view.getUint32(offset + 4, true);
        const chunkEnd = offset + 8 + chunkSize + (chunkSize % 2);
        if (chunkEnd > bytes.length) throw new Error("The WAV file contains an incomplete data chunk.");
        if (chunkName !== "ID3 ") chunks.push(bytes.slice(offset, chunkEnd));
        offset = chunkEnd;
      }
      if (offset !== bytes.length) throw new Error("The WAV file contains an invalid data chunk.");
      const id3ChunkHeader = new Uint8Array(8);
      id3ChunkHeader.set(new TextEncoder().encode("ID3 "));
      new DataView(id3ChunkHeader.buffer).setUint32(4, id3Tag.length, true);
      const id3Chunk = joinByteArrays([id3ChunkHeader, id3Tag, id3Tag.length % 2 ? Uint8Array.of(0) : new Uint8Array()]);
      const body = joinByteArrays([new TextEncoder().encode("WAVE"), ...chunks, id3Chunk]);
      const riffHeader = new Uint8Array(8);
      riffHeader.set(new TextEncoder().encode("RIFF"));
      new DataView(riffHeader.buffer).setUint32(4, body.length, true);
      return { blob: new Blob([riffHeader, body], { type: blob.type || "audio/wav" }), embedded: true, coverSource: artwork.source };
    }
    if (extension === "flac" || ["audio/flac", "audio/x-flac"].includes(blob.type)) {
      const bytes = new Uint8Array(await blob.arrayBuffer());
      if (bytes.length < 8 || String.fromCharCode(...bytes.slice(0, 4)) !== "fLaC") throw new Error("The FLAC file has an invalid metadata header.");
      const metadataBlocks = [];
      let offset = 4;
      let foundLastBlock = false;
      while (offset + 4 <= bytes.length) {
        const typeAndFlags = bytes[offset];
        const type = typeAndFlags & 0x7f;
        const size = (bytes[offset + 1] << 16) | (bytes[offset + 2] << 8) | bytes[offset + 3];
        const end = offset + 4 + size;
        if (end > bytes.length) throw new Error("The FLAC file contains an incomplete metadata block.");
        if (type !== 3 && type !== 6) metadataBlocks.push({ type, data: bytes.slice(offset + 4, end) });
        offset = end;
        if (typeAndFlags & 0x80) {
          foundLastBlock = true;
          break;
        }
      }
      if (!foundLastBlock) throw new Error("The FLAC file has no complete metadata section.");
      const encodedBlocks = metadataBlocks.map((block, index) => createFlacMetadataBlock(block.type, false, block.data));
      encodedBlocks.push(createFlacMetadataBlock(6, true, createFlacPictureBlock(artworkBytes, mimeType)));
      return {
        blob: new Blob([bytes.slice(0, 4), ...encodedBlocks, bytes.slice(offset)], { type: blob.type || "audio/flac" }),
        embedded: true,
        coverSource: artwork.source,
      };
    }
    return { blob, embedded: false, coverSource: artwork.source };
  };

  const triggerFileDownload = (blob, fileName) => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 60_000);
  };

  const createDownloadButton = (track) => {
    const button = document.createElement("button");
    const alreadyDownloaded = Boolean(getOfflineDownloadForTrack(track));
    button.type = "button";
    button.className = `row-action download-row-action${alreadyDownloaded ? " is-downloaded" : ""}`;
    button.textContent = alreadyDownloaded ? "✓" : "↓";
    button.title = "Choose where to save this song";
    button.setAttribute("aria-label", alreadyDownloaded
      ? `Choose where to save ${track.title}; already saved for offline listening`
      : `Choose where to save ${track.title}`);
    button.addEventListener("click", () => requestDownloadDestination(track, button));
    return button;
  };

  const requestDownloadDestination = (track, triggerButton = null) => {
    if (!track) return;
    if (!requireLogin("download songs")) return;
    if (track.isJamendo && !track.downloadAllowed) {
      window.open(track.sourceUrl, "_blank", "noopener,noreferrer");
      showToast("This track must be downloaded from its source and cannot be saved for offline listening here.");
      return;
    }
    if (downloadDestinationDialog.open) return;
    pendingDownloadRequest = { track, triggerButton };
    downloadDestinationTrack.textContent = `${track.title} — ${track.artist}`;
    downloadDestinationDialog.showModal();
  };

  const chooseDownloadDestination = (destination) => {
    const request = pendingDownloadRequest;
    pendingDownloadRequest = null;
    downloadDestinationDialog.close();
    if (!request) return;
    if (request.triggerButton?.isConnected) request.triggerButton.disabled = true;
    downloadTrack(request.track, destination, request.triggerButton);
  };

  downloadToDeviceButton.addEventListener("click", () => chooseDownloadDestination("device"));
  downloadToLibraryButton.addEventListener("click", () => chooseDownloadDestination("offline"));
  cancelDownloadDestinationButton.addEventListener("click", () => downloadDestinationDialog.close());
  downloadDestinationDialog.addEventListener("close", () => {
    pendingDownloadRequest = null;
  });

  const downloadTrack = async (track, destination, triggerButton = null) => {
    if (triggerButton) triggerButton.disabled = true;
    try {
      await offlineTracksLoadPromise;
      const previousDownload = getOfflineDownloadForTrack(track);
      let blob = previousDownload?.offlineBlob;
      if (!blob) {
        const source = track.isJamendo ? track.downloadUrl : track.url;
        if (!source) throw new Error("This song has no downloadable audio source.");
        const response = await fetch(source);
        if (!response.ok) throw new Error(`The song download failed (HTTP ${response.status}).`);
        blob = await response.blob();
        if (!blob.size) throw new Error("The downloaded song file is empty.");
      }
      const artworkResult = await embedDownloadArtwork(blob, track.fileName, track);
      blob = artworkResult.blob;
      const coverArtEmbedded = artworkResult.embedded;

      if (destination === "offline") {
        const originalTrackId = track.originalTrackId || track.id;
        const record = {
          key: `${accountEmail}::${originalTrackId}`,
          accountEmail,
          trackId: originalTrackId,
          downloadedAt: new Date().toISOString(),
          track: {
            title: track.title,
            artist: track.artist,
            artistNames: getTrackArtistNames(track),
            fileName: track.fileName,
            releaseType: getReleaseType(track),
            duration: Number(track.duration) || 0,
            art: Number.isInteger(track.art) ? track.art : 0,
            genre: track.genre || "",
            coverArtEmbedded,
            coverArtSource: artworkResult.coverSource,
          },
          blob,
        };
        await writeOfflineDownload(record);
        if (previousDownload) {
          URL.revokeObjectURL(previousDownload.url);
          offlineTracks.splice(offlineTracks.indexOf(previousDownload), 1);
        }
        offlineTracks.push(createOfflineTrack(record));
      }
      track.downloads = (Number(track.downloads) || 0) + 1;
      if (destination === "device") {
        triggerFileDownload(blob, track.fileName || `${track.title}.mp3`);
        showToast(`“${track.title}” was sent to your device's downloads.`);
      } else {
        render();
        if (!coverArtEmbedded) {
          showToast(`“${track.title}” is saved in Offline Downloads. Its audio format does not support embedded cover art.`);
        } else if (artworkResult.coverSource === "song") {
          showToast(`“${track.title}” is saved in Offline Downloads with its original cover art.`);
        } else {
          showToast(`“${track.title}” is saved in Offline Downloads with Lox-Muzik cover art.`);
        }
      }
    } catch (error) {
      showToast(error instanceof Error
        ? `Could not ${destination === "device" ? "download" : "save this song offline"}: ${error.message}`
        : destination === "device"
          ? "Could not download this song. Check your connection and try again."
          : "Could not save this song offline. Check your connection and storage, then try again.");
    } finally {
      if (triggerButton?.isConnected) triggerButton.disabled = false;
    }
  };

  creatorAudioFile.addEventListener("change", () => {
    const file = creatorAudioFile.files?.[0];
    const suggestedTitle = file?.name.replace(/\.[^.]+$/, "").replace(/[_-]+/g, " ").trim();
    if (suggestedTitle && (!creatorSongTitle.value.trim() || creatorSongTitle.value === creatorSongTitle.dataset.fileSuggestion)) {
      creatorSongTitle.value = suggestedTitle;
      creatorSongTitle.dataset.fileSuggestion = suggestedTitle;
    }
  });

  creatorSongForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!requireCreator("upload songs")) return;

    const file = creatorAudioFile.files?.[0];
    if (!file) {
      showToast("Choose an audio file before publishing.");
      creatorAudioFile.focus();
      return;
    }
    const supportedAudioType = ["audio/mpeg", "audio/mp3", "audio/wav", "audio/x-wav", "audio/wave", "audio/mp4", "audio/x-m4a", "audio/ogg", "audio/flac", "audio/x-flac"];
    if (!(supportedAudioType.includes(file.type) || /\.(mp3|wav|m4a|ogg|flac)$/i.test(file.name))) {
      showToast("Choose an MP3, WAV, M4A, OGG, or FLAC audio file.");
      return;
    }

    const title = creatorSongTitle.value.trim();
    const artist = creatorSongArtist.value.trim();
    if (!title || !artist) {
      showToast("Add the song title and artist name before publishing.");
      return;
    }
    if (tracks.some((track) => track.ownerEmail === accountEmail && track.fileName === file.name && track.size === file.size)) {
      showToast("That audio file is already in your catalog.");
      return;
    }

    const coverFile = document.querySelector("#creator-cover-file").files?.[0] || null;
    const creatorFormData = new FormData(creatorSongForm);
    const supportedCoverType = ["image/jpeg", "image/png", "image/webp"];
    if (coverFile && !(supportedCoverType.includes(coverFile.type) || /\.(jpe?g|png|webp)$/i.test(coverFile.name))) {
      showToast("Choose a JPG, PNG, or WebP cover image.");
      return;
    }

    const submitButton = creatorSongForm.querySelector('[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = "Publishing…";
    try {
      const embeddedCover = coverFile ? null : await readEmbeddedCover(file);
      tracks.push({
        id: `${file.name}-${file.size}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        title,
        artist,
        artistNames: splitArtistCredits(artist),
        ownerEmail: accountEmail,
        fileName: file.name,
        size: file.size,
        releaseType: (() => {
          const selectedReleaseType = String(creatorFormData.get("releaseType") || "single");
          if (selectedReleaseType === "mix") return "mix";
          if (selectedReleaseType === "album") return "album";
          return "single";
        })(),
        genre: creatorFormData.get("genre") === "auto" ? "" : creatorFormData.get("genre"),
        url: URL.createObjectURL(file),
        duration: 0,
        liked: false,
        searches: 0,
        downloads: 0,
        plays: 0,
        art: tracks.length % 5,
        coverUrl: coverFile ? URL.createObjectURL(coverFile) : embeddedCover,
      });
      creatorSongForm.reset();
      creatorSongArtist.value = creatorName;
      creatorSongArtist.dataset.autoArtist = creatorName;
      creatorSongTitle.dataset.fileSuggestion = "";
      render();
      showToast("Song added to your catalog.");
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "＋ Publish song";
    }
  });

  const completeLogin = () => {
    const email = String(new FormData(loginForm).get("email") || "").trim().toLocaleLowerCase();
    if (!email || !loginForm.reportValidity()) return;
    clearProfilePhotoPreview();
    isLoggedIn = true;
    currentRole = selectedAccountType;
    accountEmail = email;
    offlineTracksLoadPromise = loadOfflineTracks(email);
    offlineTracksLoadPromise.catch((error) => {
      showToast(error instanceof Error ? error.message : "Could not load your offline songs.");
    });
    const fallbackName = email.split("@")[0].replace(/[._-]+/g, " ").trim();
    creatorName = String(creatorNames[accountEmail] || fallbackName || "My Artist Profile");
    const savedProfile = creatorProfiles[accountEmail];
    creatorProfile = savedProfile && typeof savedProfile === "object" && !Array.isArray(savedProfile)
      ? {
        bio: String(savedProfile.bio || "").slice(0, 500),
        location: String(savedProfile.location || "").slice(0, 80),
        genres: String(savedProfile.genres || "").slice(0, 100),
        website: String(savedProfile.website || "").slice(0, 200),
        photoUrl: typeof savedProfile.photoUrl === "string"
          && savedProfile.photoUrl.length <= 2_000_000
          && /^data:image\/jpeg;base64,[A-Za-z0-9+/]+=*$/.test(savedProfile.photoUrl)
          ? savedProfile.photoUrl
          : "",
      }
      : { bio: "", location: "", genres: "", website: "", photoUrl: "" };
    isSignUp = false;
    syncAuthControls();
    updateLoginButtons();
    if (authPage) authPage.classList.add("app-shell-hidden");
    if (appShell) appShell.classList.remove("app-shell-hidden");
    if (currentRole === "creator") setView("creator");
    else if (activeView === "creator" || activeView === "profile") setView("browse");
    else render();
    showToast(
      currentRole === "creator" ? "Welcome to Creator Studio." : "Welcome to Lox-Muzik.",
      currentRole === "creator" ? "top" : "bottom",
    );
  };

  const logOut = () => {
    isLoggedIn = false;
    currentRole = null;
    accountEmail = "";
    clearProfilePhotoPreview();
    if (keepScreenAwake.lock) {
      keepScreenAwake.lock.release().catch(() => showToast("The browser could not release the screen lock."));
      keepScreenAwake.lock = null;
    }
    updateLoginButtons();
    if (activeView === "creator" || activeView === "profile" || activeView === "account-profile") setView("browse");
    else render();
    showToast("Logged out.");
  };

  deleteAccountButton.addEventListener("click", () => {
    if (!isLoggedIn || !accountEmail) return;
    const email = accountEmail;
    if (!window.confirm(`Delete the local profile for ${email}? This removes its creator details and stations from this browser and signs you out. This demo has no remote account service.`)) return;

    if (crossfadeInProgress || crossfadeRequestPending) stopCrossfade();
    const ownedTrackIds = new Set(tracks.filter((track) => track.ownerEmail === email).map((track) => track.id));
    if (ownedTrackIds.has(currentTrackId)) {
      audio.pause();
      audio.removeAttribute("src");
      audio.load();
      currentTrackId = null;
      activeQueue = null;
      setPlayerBarVisibility(false);
      document.body.classList.remove("has-player");
    }
    if (currentRadioStation?.ownerEmail === email) stopRadioStation();
    tracks.slice().filter((track) => track.ownerEmail === email).forEach((track) => {
      if (typeof track.url === "string" && track.url.startsWith("blob:")) URL.revokeObjectURL(track.url);
      if (typeof track.coverUrl === "string" && track.coverUrl.startsWith("blob:")) URL.revokeObjectURL(track.coverUrl);
      tracks.splice(tracks.indexOf(track), 1);
    });
    const removedStationIds = new Set(creatorStations
      .filter((station) => station.ownerEmail === email)
      .map((station) => station.id));
    for (let index = creatorStations.length - 1; index >= 0; index -= 1) {
      if (creatorStations[index].ownerEmail === email) creatorStations.splice(index, 1);
    }
    for (let index = radioStations.length - 1; index >= 0; index -= 1) {
      if (removedStationIds.has(radioStations[index].id)) radioStations.splice(index, 1);
    }

    delete creatorNames[email];
    delete creatorProfiles[email];
    delete creatorNotifications[email];
    trackLikesByTrack.forEach((likers, trackId) => {
      trackLikesByTrack.set(trackId, likers.filter((liker) => liker !== email));
    });
    artistEngagement.forEach((engagement, artistKey) => {
      const nextFollowers = (Array.isArray(engagement.followers) ? engagement.followers : [])
        .filter((follower) => follower !== email);
      const nextLikers = (Array.isArray(engagement.likers) ? engagement.likers : [])
        .filter((liker) => liker !== email);
      if (!nextFollowers.length && !nextLikers.length) artistEngagement.delete(artistKey);
      else artistEngagement.set(artistKey, { ...engagement, followers: nextFollowers, likers: nextLikers });
    });

    const saved = [
      writeStoredValue("loxMuzikCreatorNames", creatorNames),
      writeStoredValue("loxMuzikCreatorProfiles", creatorProfiles),
      writeStoredValue("loxMuzikCreatorStations", creatorStations),
      writeStoredValue("loxMuzikCreatorNotifications", creatorNotifications),
      writeStoredValue("loxMuzikTrackLikes", Object.fromEntries(trackLikesByTrack)),
      writeStoredValue("loxMuzikArtistEngagement", Object.fromEntries(artistEngagement)),
    ].every(Boolean);
    closeTopbarPanels();
    logOut();
    render();
    showToast(saved
      ? "Local profile details deleted and signed out."
      : "Signed out and removed this profile for this session, but some local data could not be saved.");
  });

  const beginSocialAuth = async (provider) => {
    if (!supabaseClient) {
      if (socialAuthMessage) socialAuthMessage.textContent = "Sign-in service is unavailable. Please refresh and try again.";
      return;
    }
    if (socialAuthMessage) socialAuthMessage.textContent = "Opening " + (provider === "google" ? "Google" : "Apple") + " sign-in…";
    const { error } = await supabaseClient.auth.signInWithOAuth({
      provider,
      options: { redirectTo: window.location.href }
    });
    if (error && socialAuthMessage) socialAuthMessage.textContent = error.message;
  };

  document.querySelector("#google-auth-button")?.addEventListener("click", () => beginSocialAuth("google"));
  document.querySelector("#apple-auth-button")?.addEventListener("click", () => beginSocialAuth("apple"));

  if (supabaseClient) {
    supabaseClient.auth.getSession().then(({ data, error }) => {
      if (error) {
        if (socialAuthMessage) socialAuthMessage.textContent = error.message;
        return;
      }
      if (data.session?.user?.email && !isLoggedIn) completeLogin(data.session.user.email);
    });
    supabaseClient.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session?.user?.email && !isLoggedIn) completeLogin(session.user.email);
      if (event === "SIGNED_OUT" && isLoggedIn) logOut();
    });
  }

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    completeLogin();
  });
  accountTypeCards.forEach((button) => {
    button.addEventListener("click", () => {
      selectedAccountType = button.dataset.accountType;
      syncAuthControls();
    });
  });
  document.querySelector("#signup-toggle").addEventListener("click", () => {
    isSignUp = !isSignUp;
    syncAuthControls();
  });
  menuLoginButton.addEventListener("click", () => {
    if (isLoggedIn) {
      logOut();
      return;
    }
    isSignUp = false;
    showAuthPage("listener");
  });
  topProfileButton.addEventListener("click", () => {
    if (isLoggedIn && activeView !== "account-profile") profileReturnView = activeView;
    setView("account-profile");
    if (isLoggedIn) window.scrollTo({ top: 0, behavior: "smooth" });
  });
  settingsButton.addEventListener("click", () => {
    if (activeView === "settings") {
      setView(settingsReturnView);
      return;
    }
    settingsReturnView = activeView;
    setView("settings");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  settingsBackButton.addEventListener("click", () => {
    setView(settingsReturnView);
  });
  accountProfileBackButton.addEventListener("click", () => {
    setView(profileReturnView);
  });
  accountProfileSettingsButton.addEventListener("click", () => {
    settingsReturnView = activeView;
    setView("settings");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  accountProfileArtistButton.addEventListener("click", () => setView("profile"));
  accountProfileLogoutButton.addEventListener("click", logOut);
  notificationsButton.addEventListener("click", () => {
    toggleTopbarPanel(notificationsButton, notificationsPanel);
    if (!notificationsPanel.hidden) markCreatorNotificationsRead();
    renderNotifications();
  });
  window.addEventListener("storage", (event) => {
    if (event.key !== "loxMuzikCreatorNotifications") return;
    const saved = readStoredValue("loxMuzikCreatorNotifications", {});
    if (!saved || typeof saved !== "object" || Array.isArray(saved)) return;
    Object.keys(creatorNotifications).forEach((email) => delete creatorNotifications[email]);
    Object.assign(creatorNotifications, saved);
    renderNotifications();
  });
  document.addEventListener("click", (event) => {
    if (event.target instanceof Element && !event.target.closest(".topbar")) closeTopbarPanels();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    closeTopbarPanels();
    if (activeView === "settings") setView(settingsReturnView);
    if (activeView === "account-profile") setView(profileReturnView);
  });
  welcomeSlideDots.forEach((button) => {
    button.addEventListener("click", () => setWelcomeSlide(Number(button.dataset.welcomeSlide)));
  });
  welcomeAction.addEventListener("click", () => {
    const action = welcomeSlides[welcomeSlideIndex].action;
    if (action === "radio") {
      setView("radio");
    } else if (action === "artists") {
      setView("artists");
    } else {
      const queue = getReleaseTracks();
      if (queue.length) selectTrack(queue[0].id, true, queue.map((track) => track.id));
      else setView("songs");
    }
  });

  document.querySelector("#artist-profile-edit").addEventListener("click", () => {
    isArtistProfileEditing = true;
    render();
    document.querySelector("#artist-profile-editor-title").scrollIntoView({ behavior: "smooth", block: "start" });
    document.querySelector("#creator-display-name").focus({ preventScroll: true });
  });
  document.querySelector("#artist-profile-cancel").addEventListener("click", () => {
    isArtistProfileEditing = false;
    clearProfilePhotoPreview();
    render();
  });
  creatorProfilePhotoInput.addEventListener("change", () => {
    const file = creatorProfilePhotoInput.files?.[0];
    if (!file) return;
    if (file.size > 8 * 1024 * 1024 || !(["image/jpeg", "image/png", "image/webp"].includes(file.type) || /\.(jpe?g|png|webp)$/i.test(file.name))) {
      creatorProfilePhotoInput.value = "";
      clearProfilePhotoPreview();
      renderArtistProfile();
      showToast(file.size > 8 * 1024 * 1024
        ? "Choose a profile photo up to 8 MB."
        : "Choose a JPG, PNG, or WebP profile photo.");
      return;
    }
    if (profilePhotoPreviewUrl) URL.revokeObjectURL(profilePhotoPreviewUrl);
    profilePhotoPreviewUrl = URL.createObjectURL(file);
    profilePhotoChanged = true;
    renderArtistProfile();
  });
  creatorProfilePhotoRemove.addEventListener("click", () => {
    creatorProfilePhotoInput.value = "";
    if (profilePhotoPreviewUrl) URL.revokeObjectURL(profilePhotoPreviewUrl);
    profilePhotoPreviewUrl = "";
    profilePhotoChanged = true;
    renderArtistProfile();
  });

  document.querySelector("#creator-profile-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!requireCreator("edit your creator profile")) return;
    const formData = new FormData(event.currentTarget);
    const nextName = String(formData.get("creatorName") || "").trim();
    if (!nextName) return;
    let photoUrl = creatorProfile.photoUrl;
    if (profilePhotoChanged) {
      const photoFile = creatorProfilePhotoInput.files?.[0];
      if (photoFile) {
        const submitButton = event.currentTarget.querySelector('[type="submit"]');
        submitButton.disabled = true;
        submitButton.textContent = "Saving profile…";
        try {
          photoUrl = await readProfilePhoto(photoFile);
        } catch (error) {
          showToast(error instanceof Error ? error.message : "The profile photo could not be saved.");
          return;
        } finally {
          submitButton.disabled = false;
          submitButton.textContent = "Save profile";
        }
      } else {
        photoUrl = "";
      }
    }
    const nextProfile = {
      bio: String(formData.get("bio") || "").trim(),
      location: String(formData.get("location") || "").trim(),
      genres: String(formData.get("genres") || "").trim(),
      website: String(formData.get("website") || "").trim(),
      photoUrl,
    };
    const previousName = creatorNames[accountEmail];
    const previousProfile = creatorProfiles[accountEmail];
    creatorNames[accountEmail] = nextName;
    creatorProfiles[accountEmail] = nextProfile;
    const nameSaved = writeStoredValue("loxMuzikCreatorNames", creatorNames);
    const profileSaved = writeStoredValue("loxMuzikCreatorProfiles", creatorProfiles);
    if (!nameSaved || !profileSaved) {
      if (previousName === undefined) delete creatorNames[accountEmail];
      else creatorNames[accountEmail] = previousName;
      if (previousProfile === undefined) delete creatorProfiles[accountEmail];
      else creatorProfiles[accountEmail] = previousProfile;
      showToast("Your profile could not be saved. Check browser storage and try again.");
      return;
    }
    creatorName = nextName;
    creatorProfile = nextProfile;
    isArtistProfileEditing = false;
    clearProfilePhotoPreview();
    updateLoginButtons();
    tracks.forEach((track) => {
      if (track.ownerEmail === accountEmail) {
        track.artist = creatorName;
        track.artistNames = [creatorName];
      }
    });
    render();
    showToast("Artist profile saved.");
  });

  document.querySelector("#creator-radio-form").addEventListener("submit", (event) => {
    event.preventDefault();
    if (!requireCreator("add a radio station")) return;
    const formData = new FormData(event.currentTarget);
    let streamUrl;
    try {
      streamUrl = new URL(String(formData.get("streamUrl") || "").trim());
      if (!["https:", "http:"].includes(streamUrl.protocol)) throw new Error("Unsupported stream protocol");
    } catch {
      showToast("Enter a valid public HTTP or HTTPS stream URL.");
      return;
    }
    const station = {
      id: `creator-radio-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
      name: String(formData.get("stationName") || "").trim(),
      badge: "LIVE",
      location: String(formData.get("stationLocation") || "").trim(),
      format: String(formData.get("stationFormat") || "").trim(),
      streamUrl: streamUrl.href,
      ownerEmail: accountEmail,
    };
    if (!station.name || !station.location || !station.format) {
      showToast("Complete each station field before adding it.");
      return;
    }
    creatorStations.push(station);
    radioStations.push(station);
    const saved = writeStoredValue("loxMuzikCreatorStations", creatorStations);
    event.currentTarget.reset();
    render();
    showToast(saved
      ? "Station added to your Radio directory."
      : "Station added for this session. Local browser storage is unavailable.");
  });

  document.querySelectorAll("[data-scroll-song-form]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!requireCreator("upload songs")) return;
      setView("creator");
      const uploadPanel = document.querySelector("#creator-upload-panel");
      window.requestAnimationFrame(() => {
        uploadPanel.scrollIntoView({ behavior: "smooth", block: "center" });
        creatorAudioFile.focus({ preventScroll: true });
      });
    });
  });
  searchInput.addEventListener("input", () => {
    searchResultsDismissed = false;
    render();
    renderSearchResults();
    window.clearTimeout(searchTimeout);
    const query = searchInput.value.trim().toLocaleLowerCase();
    if (query.length < 2) return;
    searchTimeout = window.setTimeout(() => {
      getReleaseTracks().forEach((track) => {
        if (`${track.title} ${track.artist}`.toLocaleLowerCase().includes(query)) track.searches += 1;
      });
      render();
    }, 500);
  });
  searchInput.addEventListener("focus", () => {
    searchResultsDismissed = false;
    renderSearchResults();
  });
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && (!searchResultsPanel.hidden || document.body.classList.contains("mobile-search-open"))) {
      event.preventDefault();
      closeSearchResults();
    } else if (event.key === "Enter" && !searchResultsPanel.hidden) {
      const firstResult = searchResultsPanel.querySelector(".search-result-item");
      if (firstResult) {
        event.preventDefault();
        firstResult.click();
      }
    }
  });
  document.addEventListener("click", (event) => {
    if (event.target instanceof Element
      && !event.target.closest(".search-container")
      && !event.target.closest("[data-focus-search]")) closeSearchResults();
  });
  elements.trendingPrevious.addEventListener("click", () => {
    moveTrend(-1);
  });
  trendChartMore.addEventListener("click", () => {
    trendChartVisibleCount += 10;
    render();
  });
  elements.trendingNext.addEventListener("click", () => {
    moveTrend(1);
  });
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.view === "radio") {
        setView("radio");
        return;
      }
      selectedMadeForYouArtist = null;
      setView(button.dataset.view);
      if (button.dataset.view === "trends") {
        const trendingSection = document.querySelector(".trending-section");
        const sectionTop = trendingSection.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: sectionTop, behavior: "smooth" });
      } else if (button.dataset.view === "browse") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });
  document.querySelectorAll("[data-browse-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.browseTarget);
      if (!target) return;
      const sectionTop = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    });
  });
  document.querySelectorAll("[data-focus-search]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!window.matchMedia("(max-width: 760px)").matches) {
        searchInput.focus();
        return;
      }

      if (document.body.classList.contains("mobile-search-open")) {
        closeSearchResults();
        searchInput.blur();
        return;
      }

      document.body.classList.add("mobile-search-open");
      button.setAttribute("aria-expanded", "true");
      searchInput.focus({ preventScroll: true });
    });
  });
  elements.playButton.addEventListener("click", togglePlayback);
  elements.playerBar.addEventListener("click", (event) => {
    if (!window.matchMedia("(max-width: 760px)").matches) return;
    if (event.target.closest("button, input, label, select, textarea, a")) return;
    openSongNowPlaying();
  });
  document.querySelector("#song-player-close").addEventListener("click", () => {
    elements.songNowPlaying.classList.remove("is-open");
    elements.songNowPlaying.setAttribute("aria-hidden", "true");
  });
  document.querySelector("#song-player-queue").addEventListener("click", () => {
    elements.songNowPlaying.classList.remove("is-open");
    elements.songNowPlaying.setAttribute("aria-hidden", "true");
    setView("songs");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  document.querySelector("#song-now-play").addEventListener("click", togglePlayback);
  elements.songNowPrevious.addEventListener("click", () => moveTrack(-1));
  elements.songNowNext.addEventListener("click", () => moveTrack(1));
  elements.songNowLike.addEventListener("click", () => {
    const track = currentTrack();
    if (!track) return;
    toggleTrackLike(track);
    updatePlayer();
    render();
  });
  elements.songNowSeek.addEventListener("input", () => {
    if (Number.isFinite(audio.duration) && audio.duration > 0) audio.currentTime = (Number(elements.songNowSeek.value) / 1000) * audio.duration;
  });
  elements.songNowRepeat.addEventListener("click", () => {
    repeatModeSelect.value = repeatModeSelect.value === "off" ? "all" : repeatModeSelect.value === "all" ? "one" : "off";
    repeatModeSelect.dispatchEvent(new Event("change", { bubbles: true }));
    showToast(`Repeat: ${repeatModeSelect.value}`);
  });
  elements.songNowShuffle.addEventListener("click", () => {
    const ids = getReleaseTracks().map((track) => track.id);
    for (let i = ids.length - 1; i > 0; i -= 1) { const j = Math.floor(Math.random() * (i + 1));[ids[i], ids[j]] = [ids[j], ids[i]]; }
    if (ids.length) selectTrack(ids[0], true, ids);
  });
  document.querySelector("#previous-button").addEventListener("click", () => moveTrack(-1));
  document.querySelector("#next-button").addEventListener("click", () => moveTrack(1));
  elements.downloadButton.addEventListener("click", () => requestDownloadDestination(currentTrack()));
  elements.likeButton.addEventListener("click", () => {
    const track = currentTrack();
    if (!track) return;
    toggleTrackLike(track);
    updatePlayer();
    render();
  });
  elements.volume.addEventListener("input", () => {
    const volume = Number(elements.volume.value);
    applyPlaybackVolume(volume);
    radioVolume.value = elements.volume.value;
    settingsVolume.value = elements.volume.value;
    settingsVolumeValue.value = `${Math.round(volume * 100)}%`;
    writeStoredValue("loxMuzikPlaybackVolume", volume);
  });
  applyPlaybackVolume(Number(elements.volume.value));
  radioVolume.addEventListener("input", () => {
    const volume = Number(radioVolume.value);
    radioAudio.volume = volume;
    applyPlaybackVolume(volume);
    elements.volume.value = radioVolume.value;
    settingsVolume.value = radioVolume.value;
    settingsVolumeValue.value = `${Math.round(volume * 100)}%`;
    writeStoredValue("loxMuzikPlaybackVolume", volume);
  });
  settingsVolume.addEventListener("input", () => {
    const volume = Number(settingsVolume.value);
    applyPlaybackVolume(volume);
    elements.volume.value = settingsVolume.value;
    radioVolume.value = settingsVolume.value;
    settingsVolumeValue.value = `${Math.round(volume * 100)}%`;
    writeStoredValue("loxMuzikPlaybackVolume", volume);
  });
  colorThemeSelect.addEventListener("change", () => {
    const isMonochrome = colorThemeSelect.value === "monochrome";
    document.body.classList.toggle("monochrome-theme", isMonochrome);
    writeStoredValue("loxMuzikColorTheme", isMonochrome ? "monochrome" : "dark");
  });
  playbackSpeedSelect.addEventListener("change", () => {
    const speed = Number(playbackSpeedSelect.value);
    if (!supportedPlaybackSpeeds.includes(speed)) return;
    audio.playbackRate = speed;
    standbyAudio.playbackRate = speed;
    writeStoredValue("loxMuzikPlaybackSpeed", speed);
  });
  crossfadeToggle.addEventListener("change", () => {
    crossfadeEnabled.value = crossfadeToggle.checked;
    writeStoredValue("loxMuzikCrossfade", crossfadeEnabled.value);
  });
  crossfadeDuration.addEventListener("input", () => {
    const seconds = Number(crossfadeDuration.value);
    crossfadeDurationValue.value = `${seconds} sec`;
    crossfadeSecondsCopy.textContent = String(seconds);
    writeStoredValue("loxMuzikCrossfadeDuration", seconds);
  });
  audioQualitySelect.addEventListener("change", () => {
    const quality = audioQualitySelect.value === "data-saver" ? "data-saver" : "original";
    audioQualitySelect.value = quality;
    audio.preload = getAudioPreload();
    standbyAudio.preload = getAudioPreload();
    radioAudio.preload = getAudioPreload();
    writeStoredValue("loxMuzikAudioQuality", quality);
  });
  soundEffectSelect.addEventListener("change", () => {
    const effect = ["none", "soft", "strong"].includes(soundEffectSelect.value)
      ? soundEffectSelect.value
      : "none";
    soundEffectSelect.value = effect;
    writeStoredValue("loxMuzikSoundEffect", effect);
  });
  screenLockToggle.addEventListener("change", () => {
    keepScreenAwake.enabled = screenLockToggle.checked;
    writeStoredValue("loxMuzikKeepScreenAwake", keepScreenAwake.enabled);
    updateScreenWakeLock().catch((error) => {
      showToast(error instanceof Error ? `Screen lock could not be updated: ${error.message}` : "Screen lock could not be updated.");
    });
    if (keepScreenAwake.enabled && !("wakeLock" in navigator)) {
      screenLockToggle.checked = false;
      keepScreenAwake.enabled = false;
      writeStoredValue("loxMuzikKeepScreenAwake", false);
      showToast("Keep screen awake is not supported by this browser.");
    }
  });
  document.addEventListener("visibilitychange", () => {
    updateScreenWakeLock().catch((error) => showToast(error instanceof Error ? error.message : "Could not update the screen lock."));
  });
  autoplayNextToggle.addEventListener("change", () => {
    autoplayNext.enabled = autoplayNextToggle.checked;
    writeStoredValue("loxMuzikAutoplayNext", autoplayNext.enabled);
  });
  repeatModeSelect.addEventListener("change", () => {
    if (!["off", "all", "one"].includes(repeatModeSelect.value)) repeatModeSelect.value = "off";
    writeStoredValue("loxMuzikRepeatMode", repeatModeSelect.value);
    updateSongNowRepeatControl();
  });
  reduceMotionToggle.addEventListener("change", () => {
    const reduceMotion = reduceMotionToggle.checked;
    document.body.classList.toggle("reduce-motion", reduceMotion);
    writeStoredValue("loxMuzikReduceMotion", reduceMotion);
  });
  radioToggleButton.addEventListener("click", toggleRadioPlayback);
  radioStopButton.addEventListener("click", stopRadioStation);
  radioAudio.addEventListener("playing", () => {
    if (currentRadioStation) setRadioStatus("LIVE NOW");
    updateScreenWakeLock().catch((error) => showToast(error instanceof Error ? error.message : "Could not keep the screen awake."));
  });
  radioAudio.addEventListener("pause", () => {
    updateScreenWakeLock().catch((error) => showToast(error instanceof Error ? error.message : "Could not release the screen lock."));
  });
  radioAudio.addEventListener("waiting", () => {
    if (currentRadioStation) setRadioStatus("BUFFERING");
  });
  radioAudio.addEventListener("error", () => {
    if (!currentRadioStation) return;
    setRadioStatus("STREAM UNAVAILABLE");
  });
  [audio, standbyAudio].forEach((player) => {
    player.addEventListener("play", () => {
      if (suppressedCrossfadePlayEvents.has(player)) {
        suppressedCrossfadePlayEvents.delete(player);
        return;
      }
      if (player !== audio) return;
      const track = currentTrack();
      if (track) track.plays = (Number(track.plays) || 0) + 1;
      const previousPlayIndex = playedTrackIds.indexOf(currentTrackId);
      if (previousPlayIndex !== -1) playedTrackIds.splice(previousPlayIndex, 1);
      playedTrackIds.unshift(currentTrackId);
      render();
      elements.playButton.textContent = "Ⅱ";
      elements.playButton.setAttribute("aria-label", "Pause");
      elements.playButton.title = "Pause";
      elements.songNowPlay.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14M16 5v14"/></svg>';
      elements.songNowPlay.setAttribute("aria-label", "Pause");
      elements.songNowPlay.title = "Pause";
      updateScreenWakeLock().catch((error) => showToast(error instanceof Error ? error.message : "Could not keep the screen awake."));
    });
    player.addEventListener("pause", () => {
      if (player !== audio) return;
      if (crossfadeInProgress) stopCrossfade();
      elements.playButton.textContent = "▶";
      elements.songNowPlay.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 11 7-11 7z"/></svg>';
      elements.songNowPlay.setAttribute("aria-label", "Play");
      elements.playButton.setAttribute("aria-label", "Play");
      elements.playButton.title = "Play";
      updateScreenWakeLock().catch((error) => showToast(error instanceof Error ? error.message : "Could not release the screen lock."));
      render();
    });
    player.addEventListener("loadedmetadata", () => {
      if (player !== audio) return;
      const track = currentTrack();
      if (!track) return;
      track.duration = player.duration;
      elements.duration.textContent = formatTime(player.duration);
      render();
    });
    player.addEventListener("timeupdate", () => {
      if (player !== audio) return;
      elements.currentTime.textContent = formatTime(player.currentTime);
      elements.songNowCurrent.textContent = formatTime(player.currentTime);
      elements.songNowDuration.textContent = formatTime(player.duration);
      elements.songNowSeek.value = Number.isFinite(player.duration) && player.duration > 0 ? String(Math.round((player.currentTime / player.duration) * 1000)) : "0";
      if (Number.isFinite(player.duration) && player.duration > 0) {
        progress.value = Math.round((player.currentTime / player.duration) * 1000);
        const remaining = player.duration - player.currentTime;
        const fadeDuration = Math.min(Number(crossfadeDuration.value), player.duration / 2);
        if (crossfadeEnabled.value
          && !crossfadeInProgress
          && !crossfadeRequestPending
          && !player.paused
          && remaining > 0
          && remaining <= fadeDuration) {
          const nextTrack = getNextCrossfadeTrack();
          if (nextTrack) startCrossfade(nextTrack.track, nextTrack.queue);
        }
      }
    });
    player.addEventListener("ended", () => {
      if (player !== audio) return;
      if (repeatModeSelect.value === "one" && currentTrack()) {
        player.currentTime = 0;
        player.play().catch(() => showToast(audioPlaybackErrorMessage()));
        return;
      }
      if (repeatModeSelect.value === "all" || autoplayNext.enabled) moveTrack(1);
    });
    player.addEventListener("error", () => {
      if (player === audio && currentTrack()) showToast(audioPlaybackErrorMessage());
    });
  });
  progress.addEventListener("input", () => {
    if (Number.isFinite(audio.duration) && audio.duration > 0) {
      audio.currentTime = (Number(progress.value) / 1000) * audio.duration;
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
      event.preventDefault();
      searchInput.focus();
    } else if (event.code === "Space" && !["INPUT", "TEXTAREA", "BUTTON"].includes(document.activeElement.tagName)) {
      event.preventDefault();
      togglePlayback();
    }
  });
  window.addEventListener("beforeunload", () => {
    tracks.forEach((track) => {
      if (track.url) URL.revokeObjectURL(track.url);
      if (track.coverUrl) URL.revokeObjectURL(track.coverUrl);
    });
  });

  window.setInterval(() => {
    const itemCount = getReleaseTracks().length;
    if (itemCount > 1) moveTrend(1);
  }, 4500);
  window.setInterval(() => {
    if (browseView.hidden || document.hidden || document.body.classList.contains("reduce-motion")) return;
    setWelcomeSlide(welcomeSlideIndex + 1);
  }, 7000);
  window.setInterval(() => {
    const today = getDayKey();
    if (today === recommendationDay) return;
    recommendationDay = today;
    selectedMadeForYouArtist = null;
    render();
  }, 60_000);

  function initializeCompactSelects() {
    let openControl = null;

    function closeOpenControl(restoreFocus = false) {
      if (!openControl) return;
      const control = openControl;
      openControl = null;
      control.menu.hidden = true;
      control.menu.classList.remove("opens-upward");
      control.trigger.setAttribute("aria-expanded", "false");
      control.wrapper.classList.remove("is-open");
      if (restoreFocus) control.trigger.focus();
    }

    Array.from(document.querySelectorAll("select")).forEach((select, index) => {
      const wrapper = document.createElement("div");
      wrapper.className = "compact-select";
      select.parentNode.insertBefore(wrapper, select);
      wrapper.append(select);

      const label = Array.from(select.labels)
        .map((fieldLabel) => fieldLabel.querySelector(".setting-select strong")
          || fieldLabel.querySelector(":scope > span"))
        .find(Boolean);
      const labelText = label ? label.textContent.trim() : "";
      const accessibleName = select.getAttribute("aria-label") || labelText || "Choose an option";
      const trigger = document.createElement("button");
      trigger.className = "compact-select-trigger";
      trigger.type = "button";
      trigger.setAttribute("aria-label", accessibleName);
      trigger.setAttribute("aria-haspopup", "listbox");
      trigger.setAttribute("aria-expanded", "false");
      trigger.setAttribute("aria-controls", `compact-select-list-${index}`);

      const menu = document.createElement("div");
      menu.className = "compact-select-menu";
      menu.id = `compact-select-list-${index}`;
      menu.setAttribute("role", "listbox");
      menu.setAttribute("aria-label", accessibleName);
      menu.hidden = true;
      wrapper.append(trigger, menu);

      select.hidden = true;
      select.tabIndex = -1;
      select.setAttribute("aria-hidden", "true");

      const getOptions = () => Array.from(menu.querySelectorAll('[role="option"]:not(:disabled)'));
      const updateSelection = () => {
        const selectedOption = select.options[select.selectedIndex];
        trigger.textContent = selectedOption ? selectedOption.label : "Choose an option";
        Array.from(menu.querySelectorAll('[role="option"]')).forEach((option) => {
          option.setAttribute("aria-selected", String(Number(option.dataset.optionIndex) === select.selectedIndex));
        });
      };
      const renderOptions = () => {
        menu.replaceChildren();
        Array.from(select.options).forEach((option, optionIndex) => {
          const item = document.createElement("button");
          item.className = "compact-select-option";
          item.type = "button";
          item.setAttribute("role", "option");
          item.setAttribute("aria-selected", String(optionIndex === select.selectedIndex));
          item.dataset.optionIndex = String(optionIndex);
          item.textContent = option.label;
          item.disabled = option.disabled || Boolean(option.parentElement.disabled);
          item.tabIndex = -1;
          item.addEventListener("click", () => {
            const changed = select.selectedIndex !== optionIndex;
            select.selectedIndex = optionIndex;
            updateSelection();
            closeOpenControl(true);
            if (changed) {
              select.dispatchEvent(new Event("input", { bubbles: true }));
              select.dispatchEvent(new Event("change", { bubbles: true }));
            }
          });
          menu.append(item);
        });
        updateSelection();
      };
      const control = {
        wrapper,
        trigger,
        menu,
      };
      const open = () => {
        if (openControl === control) return;
        closeOpenControl();
        renderOptions();
        menu.hidden = false;
        trigger.setAttribute("aria-expanded", "true");
        wrapper.classList.add("is-open");
        const bounds = trigger.getBoundingClientRect();
        const menuHeight = Math.min(menu.scrollHeight, 220);
        menu.classList.toggle(
          "opens-upward",
          window.innerHeight - bounds.bottom < menuHeight + 8 && bounds.top > menuHeight + 8,
        );
        openControl = control;
      };
      const focusOption = (index) => {
        const options = getOptions();
        if (options.length) options[Math.max(0, Math.min(index, options.length - 1))].focus();
      };

      trigger.addEventListener("click", () => {
        if (openControl === control) closeOpenControl();
        else open();
      });
      trigger.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && openControl === control) {
          event.preventDefault();
          closeOpenControl(true);
          return;
        }
        if (event.key === "Tab" && openControl === control) {
          closeOpenControl();
          return;
        }
        if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
        event.preventDefault();
        open();
        const options = getOptions();
        const selectedIndex = options.findIndex((option) => Number(option.dataset.optionIndex) === select.selectedIndex);
        focusOption(selectedIndex >= 0 ? selectedIndex : 0);
      });
      menu.addEventListener("keydown", (event) => {
        const options = getOptions();
        const currentIndex = options.indexOf(document.activeElement);
        if (event.key === "Escape") {
          event.preventDefault();
          closeOpenControl(true);
        } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
          event.preventDefault();
          focusOption(currentIndex + (event.key === "ArrowDown" ? 1 : -1));
        } else if (event.key === "Home" || event.key === "End") {
          event.preventDefault();
          focusOption(event.key === "Home" ? 0 : options.length - 1);
        } else if (event.key === "Tab") {
          closeOpenControl();
        }
      });
      select.addEventListener("change", updateSelection);
      new MutationObserver(renderOptions).observe(select, {
        attributes: true,
        childList: true,
        subtree: true,
      });
      renderOptions();
    });

    document.addEventListener("pointerdown", (event) => {
      if (openControl && !openControl.wrapper.contains(event.target)) closeOpenControl();
    });
  }

  setWelcomeSlide(welcomeSlideIndex);
  updateLoginButtons();
  if (authPage) authPage.classList.add("app-shell-hidden");
  if (appShell) appShell.classList.remove("app-shell-hidden");
  render();
  initializeCompactSelects();
  if ("serviceWorker" in navigator && window.isSecureContext) {
    navigator.serviceWorker.register("./service-worker.js").catch((error) => {
      console.error("Could not prepare Lox-Muzik for offline use.", error);
    });
  }
})();
