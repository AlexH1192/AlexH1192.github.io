import React from 'react';
import { HashRouter, Routes, Route, Link, useParams, Navigate } from 'react-router-dom';
import './App.css';

/* ------------------------------------------------------------------ */
/* PROFILE                                                            */
/* ------------------------------------------------------------------ */
const PROFILE = {
  name: 'Alexander Haas',
  location: 'Los Angeles, CA',
  email: 'alexanderhaas1192@gmail.com',
  github: 'https://github.com/AlexH1192',
  linkedin: 'https://www.linkedin.com/in/alexander-haas-865710347/',
};

const ABOUT = `M.S. Computer Science student at USC focused on game development, gameplay systems, AI behavior, and technical design. I also serve as Head Trip Lead for the USC Rock Climbing Club, organizing weekly outdoor trips to Joshua Tree, Bishop, Yosemite, and Red Rocks.`;

/* ------------------------------------------------------------------ */
/* EDUCATION                                                          */
/* ------------------------------------------------------------------ */
const EDUCATION = [
  {
    school: 'University of Southern California',
    degree: 'M.S. Computer Science — Game Development',
    dates: 'August 2024 – May 2026',
    gpa: 'GPA 3.66',
    coursework: 'Graduate Advanced Game Project, Game Engine Development, Foundations of Artificial Intelligence, 3D Graphics and Rendering, Analysis of Algorithms.',
  },
  {
    school: 'Syracuse University',
    degree: 'B.S. Computer Science — Minors in Mathematics and Computer Gaming — Magna Cum Laude',
    dates: 'August 2020 – May 2024',
    gpa: 'GPA 3.64',
    coursework: 'Data Structures, Algorithms, Artificial Intelligence, Operating Systems, Systems and Network Programming, Computer Graphics, Virtual Reality, Cryptography.',
  },
];

/* ------------------------------------------------------------------ */
/* PROJECTS — long-form bullets pasted from the master template       */
/* ------------------------------------------------------------------ */
const PROJECTS = [
  {
    slug: 'mech-believe',
    title: 'Mech Believe: Mega Brawl',
    role: 'AI & Gameplay Systems Engineer',
    dates: 'August 2025 – May 2026',
    bullets: [
      'Designed and implemented real-time enemy AI systems in Unity and C# for Mech Believe: Mega Brawl, an arena combat action roguelite built around modular toy mech customization.',
      'Developed behavior logic for multiple enemy archetypes, including two common enemy types and two elite enemy types with distinct combat roles, movement patterns, and engagement behaviors.',
      'Built state-driven enemy behavior systems that controlled targeting, movement, attack selection, cooldown timing, and combat responses during wave-based arena encounters.',
      'Tuned enemy behavior to support readable combat pacing, player counterplay, and escalating challenge across repeated combat waves.',
      'Implemented modular robot parts that integrated with the game’s customization and combat systems, supporting stat-driven changes to player builds and playstyle expression.',
      'Created new robot parts from implementation through gameplay integration, while also modifying and tuning existing parts to better align with design goals.',
      'Connected robot part behavior to core gameplay systems, ensuring that equipment choices meaningfully affected combat performance, abilities, and player strategy.',
      'Implemented a dynamic bark system using 500+ recorded voice lines, triggering dialogue contextually during combat based on gameplay events and match state.',
      'Designed bark-triggering logic for events such as round starts, round endings, dashes, enemy defeats, enemy type-specific kills, and other in-game combat moments.',
      'Built supporting UI behavior for bark playback, allowing voice lines to appear with unique in-game presentation during active rounds.',
      'Collaborated with designers and QA to tune enemy behavior, robot part balance, combat readability, and overall player feel through iterative playtesting.',
      'Contributed to a single-player action game centered on building a custom toy mech, collecting parts, and surviving waves of mechs, toy soldiers, building blocks, and model trains.',
    ],
  },
  {
    slug: 'masterworks-of-horror',
    title: 'Masterworks of Horror: The Prologue',
    role: 'Quality Assurance Lead',
    dates: 'August 2025 – May 2026',
    bullets: [
      'Led QA testing for Masterworks of Horror: The Prologue, a real-time PvP card battler built around custom decks, horror literature, keyword-driven card effects, and strategic attack/defense playfield interactions.',
      'Managed the transition from physical paper prototype testing to recurring digital build testing as the project moved from tabletop validation into playable implementation.',
      'Prepared and maintained paper prototype test materials by printing, cutting, sleeving, sorting, and organizing physical card sets for internal design iteration.',
      'Coordinated weekly QA efforts across evolving digital builds, systematically testing card logic, combat resolution, board interactions, and game-state transitions.',
      'Tested 100+ cards across a large range of effect combinations, verifying that individual card behaviors worked correctly both in isolation and in interaction with other cards.',
      'Focused testing around card synergies, keyword interactions, edge cases, timing issues, and situations where multiple card effects overlapped during real-time gameplay.',
      'Reproduced bugs consistently by isolating the specific cards, board states, player actions, and timing conditions required to trigger each issue.',
      'Logged detailed Jira tickets with clear reproduction steps, observed behavior, expected behavior, severity context, and supporting gameplay footage.',
      'Recorded and attached video evidence to bug reports so engineers and designers could quickly understand, reproduce, and verify issues.',
      'Assigned bugs to the appropriate developers or discipline owners, helping keep the QA pipeline organized and actionable.',
      'Conducted repeated playtest passes across different deck configurations and card combinations to validate fixes and identify regressions.',
      'Supported testing for the single-player bot mode, helping verify bot behavior, card logic, decision outcomes, and edge cases across simulated matches.',
      'Supervised external playtest sessions with players outside the development team, observing player behavior and helping gather usability, clarity, and balance feedback.',
      'Collaborated with designers and engineers to validate gameplay rules, clarify ambiguous card interactions, and improve combat readability.',
      'Helped maintain quality and consistency on a large 70+ person student game project with a complex card pool, real-time combat structure, and highly combinatorial gameplay space.',
    ],
  },
  {
    slug: 'primeengine-stealth',
    title: 'PrimeEngine Stealth Game',
    role: 'C++ Game Engine Programmer',
    dates: 'January 2026 – May 2026',
    bullets: [
      'Extended PrimeEngine, a production-style C++ game engine with a custom scene graph, game object graph, event system, asset manager, skeletal animation pipeline, debug renderer, and Direct3D 11 rendering backend.',
      'Built a complete top-down stealth minigame inside the engine, featuring maze-based level design, patrolling guards, cover-based hiding, player detection, chase behavior, and win/loss conditions.',
      'Designed a 30×30 maze arena with interior barriers, cover blocks, player spawn, exit objective, and multiple guard patrol routes to create a full playable stealth loop.',
      'Implemented a 3-state guard AI finite state machine with PATROL, SUSPICIOUS, and ALERTED states.',
      'Built line-of-sight detection using 3D slab-method segment-vs-AABB checks against walls and cover geometry.',
      'Implemented two-tier cone detection with an outer suspicious cone and inner alerted cone, allowing guards to escalate from awareness to full detection based on distance, angle, and visibility.',
      'Added suspicious-state scanning behavior where guards freeze, sweep their vision cone, and either return to patrol or catch the player depending on player visibility.',
      'Added hysteresis and temporary immunity windows to prevent state flickering when the player moved near detection cone boundaries.',
      'Implemented chase behavior for alerted guards, allowing soldiers to pursue the player after full detection instead of relying only on static failure conditions.',
      'Added stuck-detection fallback logic for corner-pinned guards, returning them to patrol if they moved too little over time or lost line-of-sight for too long.',
      'Implemented sweep-then-resolve collision handling for player movement against axis-aligned walls and cover objects, preventing tunneling through thin geometry at higher movement speeds.',
      'Built camera-relative WASD movement with Shift-to-run behavior and a third-person follow camera that tracks the player from above.',
      'Replaced the default fly camera with a controllable player component using an animated character rig.',
      'Extended the existing animation state machine so player movement could drive idle/walk blending directly.',
      'Implemented frustum culling by computing mesh AABBs at load time, extracting camera frustum planes each frame, and testing per-instance bounds before rendering.',
      'Built a physics subsystem with physics components, gravity and velocity integration, sphere-vs-AABB collision detection, and push-out resolution.',
      'Implemented skeletal animation blending cases, including full-body blending, partial upper-body blending, and additive animation layering with joint-range guards.',
      'Created debug visualizations for walls, cover, markers, frustums, bounding boxes, AI states, and gameplay systems using the engine’s DebugRenderer.',
      'Diagnosed and fixed engine-level issues involving stale culling state, fixed-size container assertions, non-virtual event handler behavior, animation transform corruption, and DebugRenderer buffer overflow crashes.',
      'Worked within a large pre-C++17 codebase, respecting existing engine architecture, manual memory patterns, fixed-size containers, event dispatch conventions, and rendering constraints.',
      'Demonstrated game engine programming across AI, physics, rendering, animation, collision detection, input, camera systems, and gameplay architecture.',
    ],
  },
  {
    slug: 'purr-force',
    title: 'Purr Force: Scratch and Rescue — IndieCade',
    role: 'Game Design Intern (Lead Programmer)',
    dates: 'May 2025 – July 2025',
    bullets: [
      'Led gameplay engineering on an 8-person interdisciplinary team developing Purr Force: Scratch and Rescue, a climate-focused real-time strategy game built in Unity and C#.',
      'Served as the team’s lead programmer, translating design goals into playable systems, implementation plans, and technical priorities throughout development.',
      'Architected the core tile-based state system used to track terrain, fire status, firefighter positions, interactable objects, and gameplay-relevant environmental changes.',
      'Designed and implemented the action point economy that governed player movement, ability usage, turn pacing, and strategic decision-making.',
      'Built environmental fire propagation logic, allowing fires to spread across the grid based on tile state and gameplay conditions.',
      'Developed a modular firefighter ability framework that supported multiple character abilities while keeping the system extensible for new mechanics.',
      'Implemented state-driven AI behaviors and gameplay logic under rapid development constraints, balancing technical feasibility with design iteration.',
      'Collaborated closely with designers and teammates to refine pacing, difficulty, readability, and player decision-making across multiple gameplay configurations.',
      'Debugged and tuned core systems throughout development, resolving edge cases in tile interactions, ability behavior, and state transitions.',
      'Helped deliver a polished final build that ranked Top 10 overall and Top 10 in every judged category among 34 submitted titles in the IndieCade Climate Jam.',
      'Contributed to a project selected for inclusion in the IndieCade Climate Anthology, a curated published collection of the top games from the Climate Jam.',
    ],
  },
  {
    slug: 'ai-projects',
    title: 'Search & Inference Algorithms — AI Projects',
    role: 'Artificial Intelligence Projects (CSCI 561)',
    dates: 'August 2025 – December 2025',
    bullets: [
      'Completed multiple artificial intelligence programming assignments covering heuristic search, stochastic optimization, adversarial decision-making, and probabilistic inference.',
      'Built a Java-based genetic algorithm solver for a 3D Traveling Salesman-style optimization problem, reading point-cloud inputs and outputting optimized tours with computed path length.',
      'Implemented Euclidean distance evaluation across 3D coordinates and used tour-length fitness scoring to compare candidate solutions across generations.',
      'Designed a hybrid initial population strategy combining nearest-neighbor greedy tours, mutated greedy variants, and randomized tours to improve convergence quality.',
      'Implemented genetic algorithm components including roulette-wheel selection, crossover, mutation, elitism, and best-tour tracking across multiple generations.',
      'Experimented with alternative crossover and mutation strategies, including adjacency-preserving crossover and segment-reversal mutation, to improve path quality.',
      'Produced a final optimized tour for a 200-point 3D dataset, outputting both the total path distance and ordered coordinate sequence.',
      'Built a Python AI agent for 5×5 Go, using board-state evaluation, legal-move generation, capture detection, liberty analysis, and tactical move scoring.',
      'Implemented immediate capture and defense detection by identifying opponent or allied groups with one remaining liberty.',
      'Added opponent reply modeling to penalize moves that exposed the agent to strong immediate counter-captures.',
      'Implemented a depth-2 top-k search probe that scored candidate moves, simulated opponent responses, and selected moves based on projected tactical advantage.',
      'Integrated the Go agent with a provided game host supporting legal placement checks, KO rule validation, liberty detection, dead-piece removal, and scoring.',
      'Built a Python Hidden Markov Model inference program that parses state weights, state-action-state transition weights, state-observation weights, and observation/action sequences.',
      'Normalized weighted inputs into initial, transition, and emission probability distributions for use in probabilistic sequence inference.',
      'Implemented Viterbi decoding to infer the most likely hidden state sequence from observed events and action-conditioned transitions.',
      'Wrote output files in assignment-specified formats for optimized tours, Go moves, and inferred state sequences.',
      'Practiced implementing AI algorithms under strict file I/O constraints, emphasizing correctness, edge-case handling, and compatibility with automated graders.',
    ],
  },
  {
    slug: 'sequence-alignment',
    title: 'Sequence Alignment with Memory-Efficient DP',
    role: 'Algorithms Project (CSCI 570)',
    dates: 'April 2025 – May 2025',
    bullets: [
      'Implemented sequence alignment algorithms in Python for USC’s CSCI 570 final project, solving the minimum-cost alignment problem using fixed gap penalties and DNA base mismatch costs.',
      'Built a full-table dynamic programming solution that initializes an O(mn) DP matrix, evaluates the recurrence relation across generated input strings, and backtracks through the matrix to reconstruct optimal aligned sequences.',
      'Implemented a Hirschberg-style memory-efficient solver using divide-and-conquer to reduce space usage while preserving optimal alignment correctness.',
      'Built two-row dynamic programming cost computation for the efficient algorithm, storing only the previous and current cost rows instead of the full DP table.',
      'Computed forward and reverse alignment costs to identify optimal split points during recursive divide-and-conquer alignment.',
      'Reconstructed final aligned output strings from the recursive alignment path, including gap placement and base-pair alignment decisions.',
      'Implemented input parsing and string expansion logic for compressed DNA-style inputs, generating full strings from base sequences and insertion indices according to assignment specifications.',
      'Produced output files containing alignment cost, first aligned string, second aligned string, runtime in milliseconds, and memory usage in kilobytes in the required grading format.',
      'Wrote shell scripts for both the basic and memory-efficient implementations so each algorithm could be run through the required command-line interface.',
      'Built a batch runner to execute both algorithms across 15 provided datapoint inputs, capture errors, and generate comparable basic and efficient output files.',
      'Benchmarked both implementations across 15 datapoint cases, measuring CPU time and memory usage as combined input size increased.',
      'Analyzed benchmark results showing that the basic DP implementation’s memory usage grew substantially with problem size, while the memory-efficient implementation stayed nearly constant across the test set.',
      'Compared runtime behavior between the two algorithms, showing that both approaches still exhibited polynomial time growth because the efficient version optimized space rather than time.',
      'Created performance graphs for memory usage vs. problem size and CPU time vs. problem size, then summarized the observed complexity tradeoffs in a final report.',
      'Collaborated on a three-person algorithms project with equal contribution across implementation, testing, benchmarking, and report preparation.',
    ],
  },
  {
    slug: 'voiceborne',
    title: 'Voiceborne',
    role: 'Lead Unity Engineer',
    dates: 'January 2025 – May 2025',
    bullets: [
      'Served as the sole gameplay and systems engineer on a 3-person team developing Voiceborne, a 2D action platformer built in Unity.',
      'Owned all Unity implementation across gameplay, systems, enemy behavior, level flow, scene transitions, animation logic, and technical integration.',
      'Developed the game’s central microphone-driven mechanic, allowing player voice input to dynamically expand the radius of light around the character in real time.',
      'Integrated microphone loudness detection with gameplay visibility, enabling the player to reveal nearby platforms, enemies, and environmental information through vocal input.',
      'Connected the voice-based light mechanic to combat, allowing the player to damage or attack enemies through the same microphone-driven system.',
      'Implemented core player controls, movement behavior, combat interactions, and moment-to-moment platforming logic.',
      'Built enemy AI and encounter behavior, including enemy detection, reaction logic, attack interactions, and damage handling.',
      'Implemented animation state control for player and enemy actions, connecting movement, combat, idle states, and gameplay events to visual feedback.',
      'Built scene transitions and level progression flow, supporting a complete playable experience from start to finish.',
      'Integrated custom art assets, UI elements, animations, and level content created by teammates into the Unity project.',
      'Tuned microphone sensitivity, light radius scaling, and combat feedback to make the core mechanic readable, responsive, and usable during active gameplay.',
      'Optimized continuous audio input processing to reduce performance overhead from real-time microphone sampling.',
      'Debugged gameplay edge cases involving audio input, enemy interactions, visibility state, scene flow, and animation transitions.',
      'Collaborated closely with two artists to translate visual concepts and UI assets into functional gameplay systems.',
      'Delivered a complete semester-long game project centered on an experimental input mechanic that connected voice, visibility, exploration, and combat.',
    ],
  },
  {
    slug: 'procedural-texture',
    title: 'Procedural Texture Generation via Genetic Algorithms',
    role: 'Graphics Project (CSCI 580)',
    dates: 'August 2024 – December 2024',
    bullets: [
      'Co-built a C++ procedural texture generation system that evolved image textures using a custom genetic algorithm over noise-node genomes.',
      'Represented candidate textures as genomes containing configurable noise nodes, color parameters, blend modes, fractal parameters, frequency, sharpness, stretching, inversion, weights, contrast, saturation, brightness, and gamma correction.',
      'Used FastNoise Lite to generate procedural noise maps on the CPU, then combined multiple noise-node outputs into generated PPM texture images.',
      'Implemented evolutionary operators including elitism, parent selection, crossover, and mutation to iteratively improve generated textures over many generations.',
      'Built uniform crossover logic that combined parent texture parameters and noise-node properties to create child textures with inherited procedural traits.',
      'Implemented mutation logic over both global color parameters and individual noise-node parameters, including node count changes, frequency shifts, blend mode changes, fractal parameter changes, and bounded parameter adjustments.',
      'Supported multiple parent-selection strategies, including tournament selection, roulette-wheel selection, and rank-based selection.',
      'Designed and tested multiple crossover and mutation configurations, including uniform crossover, two-point crossover, uniform mutation, random mutation, Gaussian mutation, and creep mutation.',
      'Built a fitness pipeline that compared generated textures against target images using color similarity and perceptual structure-based metrics.',
      'Used Lab color-space comparison, SSIM-style structural similarity, Sobel edge detection, correlation, and wavelet-based feature analysis to evaluate both color matching and pattern similarity.',
      'Tuned a hybrid fitness function after early experiments showed that color-only optimization produced flat color blocks rather than meaningful texture patterns.',
      'Ran 11 experiments across different population sizes, generation counts, elitism rates, mutation rates, crossover rates, selection methods, crossover methods, and mutation methods.',
      'Logged experiment parameters and generated image outputs across generations to compare how different GA configurations affected convergence and texture quality.',
      'Evaluated evolved textures against 250×250 target images, using the highest-fitness candidate from the final generation as the solution image.',
      'Found that elitism generally improved preservation of high-quality candidates, while mutation rates below 0.5 and crossover rates at or above roughly 0.7 produced better results in tested configurations.',
      'Identified a key limitation of the system: it reproduced color values more consistently than high-level texture patterns, suggesting future improvements around stronger pattern detection and perceptual fitness scoring.',
      'Collaborated on a five-person graphics project exploring procedural content generation for applications in games, film, digital art, and customizable texture creation.',
    ],
  },
  {
    slug: 'numerical-methods',
    title: 'Approximation & Scientific Computing',
    role: 'Numerical Methods Projects (MAT 581)',
    dates: 'January 2024 – May 2024',
    bullets: [
      'Completed a sequence of MATLAB projects covering numerical approximation, interpolation, integration, root-finding, floating-point analysis, and structured linear systems.',
      'Implemented numerical experiments analyzing floating-point precision, roundoff behavior, machine epsilon, and approximation error.',
      'Approximated π using recursive polygon perimeter formulas, measuring how numerical error changed across iterations.',
      'Implemented Taylor series approximation for cosine and evaluated convergence behavior across shifted input values.',
      'Computed machine precision experimentally by identifying the smallest power-of-two perturbation that remained distinguishable from 1 in floating-point arithmetic.',
      'Visualized numerical functions and approximation behavior using MATLAB plotting tools.',
      'Implemented polynomial interpolation using Vandermonde systems and evaluated interpolation quality across multiple node counts.',
      'Compared interpolation behavior on functions including sin(x)^2, exp(-x)sin(10x), and rational functions with high curvature.',
      'Used Chebyshev nodes to reduce interpolation instability and improve approximation quality on difficult functions.',
      'Explored numerical differentiation and polynomial derivative approximation using interpolated function values.',
      'Implemented adaptive piecewise linear approximation with recursive interval subdivision based on local error tolerance.',
      'Built helper routines for piecewise linear interpolation, interval location using binary search, and evaluation over dense sample grids.',
      'Compared approximation accuracy across multiple tolerances and plotted both reconstructed functions and error curves.',
      'Implemented composite Newton-Cotes quadrature rules, including Simpson-style integration, using reusable weight-generation and composite-rule evaluation functions.',
      'Compared exact integration error against estimated error ratios as the number of subintervals increased.',
      'Implemented robust root-finding methods including bisection and a safeguarded global Newton method.',
      'Combined Newton steps with bisection fallback logic to preserve bracketing and avoid invalid iterations.',
      'Solved parameterized nonlinear equations and used the results to compute points on a parametric curve.',
      'Implemented tridiagonal LU factorization without pivoting for structured matrix systems.',
      'Built forward and backward substitution solvers for lower and upper bidiagonal systems.',
      'Measured residual error for tridiagonal systems across problem sizes ranging from small matrices to very large structured systems.',
      'Implemented a Gaussian elimination routine for a banded pentadiagonal-style matrix, preserving structure during elimination.',
      'Practiced writing compact MATLAB functions for numerical experimentation, visualization, convergence analysis, and algorithm validation.',
    ],
  },
  {
    slug: 'emc3-ar',
    title: 'E=MC^3 — AR Line-Drawing Puzzle Game',
    role: 'AR Developer (CAR 330)',
    dates: 'March 2024 – May 2024',
    bullets: [
      'Built an iOS augmented reality puzzle game in Unity where players physically move through real-world space to solve spatial line-drawing puzzles.',
      'Anchored a virtual puzzle cube in the player’s real environment using ARKit, allowing puzzle surfaces to remain spatially stable as the player moved around them.',
      'Designed the core puzzle interaction around drawing a continuous line from a defined start point to an end point while avoiding walls, obstacles, and invalid intersections.',
      'Implemented the line-drawing system using Unity’s LineRenderer, dynamically creating and managing line segments at runtime as the player drew across the AR puzzle surface.',
      'Added undo functionality by removing the most recent drawn segment and restoring the previous anchor point, allowing players to correct mistakes without fully restarting.',
      'Implemented screen-to-world interaction using ScreenPointToRay and Physics.Raycast, translating 2D touch input into precise 3D drawing positions on AR-anchored surfaces.',
      'Engineered custom segment-segment intersection detection to identify when a drawn line crossed itself or a previously drawn segment.',
      'Used determinant-based computational geometry for line intersection checks instead of relying entirely on Unity physics colliders.',
      'Added obstacle and wall validation by raycasting along each drawn segment to prevent players from drawing through tagged barrier geometry.',
      'Managed a multi-state drawing flow covering idle, drawing from the start point, continuing from checkpoints, invalid attempts, and completed puzzle states.',
      'Built marker logic for start and end points, visually indicating valid puzzle anchors and detecting successful completion when the drawn endpoint reached the target within a tolerance threshold.',
      'Integrated puzzle logic with AR spatial tracking so the challenge required both touch precision and physical repositioning around the virtual cube.',
      'Demonstrated AR development, mobile interaction design, Unity engine programming, real-time input handling, raycasting, computational geometry, and state management.',
    ],
  },
  {
    slug: 'vr-archery',
    title: 'VR Archery System',
    role: 'Unity VR Project',
    dates: 'November 2023 – December 2023',
    bullets: [
      'Built an immersive virtual reality archery prototype in Unity where players use motion controllers to draw, aim, and fire a bow in 3D space.',
      'Implemented two-handed controller interaction, mapping one controller to the bow hand and the other to the string-drawing hand.',
      'Translated real-world controller positions into in-game bow behavior, creating an embodied draw-and-release interaction based on player hand movement.',
      'Built a draw-strength system where the distance between the bow hand and string hand determined arrow launch power.',
      'Converted controller-relative draw direction into an aim vector used to launch arrows into the scene.',
      'Implemented physics-driven arrow firing by applying launch force through Unity’s Rigidbody system.',
      'Tuned arrow trajectory behavior so projectiles responded to velocity, gravity, and collision during flight.',
      'Implemented collision detection for arrows striking targets and environmental objects.',
      'Built hit-response logic for target interactions, allowing fired arrows to register successful shots.',
      'Practiced VR-specific interaction design, prioritizing physical clarity, spatial feedback, and natural hand positioning.',
      'Demonstrated Unity VR development, motion-controller input handling, 3D projectile systems, physics simulation, collision detection, and embodied interaction design.',
    ],
  },
  {
    slug: 'on-the-brink',
    title: 'On The Brink',
    role: 'Lead Unity Engineer',
    dates: 'May 2022 – November 2023',
    bullets: [
      'Led Unity engineering on On The Brink, a shipped sci-fi action/puzzle platformer developed by a 28-person interdisciplinary student team and published on Steam.',
      'Authored approximately 10,000 lines of C# across gameplay systems, player movement, combat interactions, AI behavior, progression mechanics, and implementation support.',
      'Focused primarily on Phase 1 gameplay, implementing the core movement systems that allowed players to slingshot between stars using gravity-based momentum.',
      'Built gravity-driven traversal mechanics that let the player accelerate around stars, gain speed through orbital movement, and navigate high-speed platforming spaces.',
      'Implemented player dash behavior, giving players an additional mobility option for evasive movement, repositioning, and timing-based traversal.',
      'Implemented shield behavior used to survive enemy attacks and support more forgiving high-speed navigation during action sequences.',
      'Developed gameplay logic for star-to-star traversal, including player interaction with gravitational anchor points and momentum-based movement states.',
      'Helped tune movement feel, acceleration, responsiveness, and readability so the gravity slingshot mechanic felt fast while remaining controllable.',
      'Implemented combat and enemy interaction systems used during action-focused sections of gameplay.',
      'Supported puzzle-phase implementation for constellation-building gameplay, where players connect stars to form constellations and progress through puzzle encounters.',
      'Integrated gameplay systems with level flow, player progression, scene transitions, and team-created art and design content.',
      'Collaborated with designers, artists, audio contributors, writers, and producers on a large interdisciplinary team, translating design goals into playable Unity systems.',
      'Debugged and polished gameplay across a long production cycle, resolving edge cases in movement, collision, enemy interaction, dash behavior, shield behavior, and progression flow.',
      'Contributed to a released Steam title that reached 300+ downloads, 2000+ library additions, and a positive user review rating.',
      'Helped deliver a free-to-play single-player game centered on gravity manipulation, sci-fi narrative, high-speed movement, and puzzle mechanics.',
    ],
  },
  {
    slug: 'alarm-clock',
    title: 'Networked Digital Alarm Clock',
    role: 'C# & Windows Programming Project',
    dates: 'April 2022 – May 2022',
    bullets: [
      'Built a two-application digital alarm clock system in C# using WPF, with one window serving as the clock display and a separate window serving as the time/alarm setter.',
      'Implemented a networked control flow where the setter application sends time and alarm updates to the clock application over localhost UDP sockets.',
      'Used UdpClient and IPEndPoint to transmit serialized time data between the two running applications.',
      'Created a shared time data structure through an external TimeDataDLL, allowing both applications to serialize, send, receive, and interpret the same message format.',
      'Used BinaryFormatter and MemoryStream to serialize time-setting and alarm-setting messages into byte arrays for socket transmission.',
      'Built input validation for hour, minute, and second fields, including separate validation rules for 12-hour and 24-hour time modes.',
      'Implemented a “set current time” feature that reads DateTime.Now, formats it according to the selected 12-hour or 24-hour mode, and sends the update to the clock display.',
      'Implemented alarm-setting functionality, allowing the setter application to send a target alarm time to the clock display.',
      'Built the clock display application with a DispatcherTimer that increments time once per second and updates the visible clock state.',
      'Implemented rollover logic for seconds, minutes, hours, 12-hour display mode, 24-hour display mode, and AM/PM switching.',
      'Created a custom seven-segment LED display system using WPF rectangles, visibility bindings, and an LED view model for each digit.',
      'Implemented digit rendering logic that maps numeric values 0-9 to the correct visible and hidden LED segments.',
      'Used ObservableCollection<LED> to bind clock digits to an ItemsControl, allowing the display to update through WPF data binding.',
      'Implemented INotifyPropertyChanged across the setter, clock model, and LED digit classes so UI elements update when model values change.',
      'Added a background receive thread in the clock application to listen for incoming UDP messages without blocking the UI.',
      'Used App.Current.Dispatcher.Invoke to safely update WPF-bound collections from the background receive thread.',
      'Implemented alarm trigger behavior that displays an alarm message when the current clock time matches the configured alarm time.',
      'Added cleanup logic to close sockets, abort the receive thread, clear display data, and stop timers when the application exits.',
      'Demonstrated C# desktop development, WPF data binding, MVVM-style property notification, UDP socket programming, serialization, multithreading, timer-driven state updates, and custom UI component logic.',
    ],
  },
  {
    slug: 'market-share',
    title: 'Market Share Regression Analysis',
    role: 'Statistics Project',
    dates: 'October 2021 – December 2021',
    bullets: [
      'Completed a statistics and data analysis project studying iOS and Android market share trends in the United States and worldwide.',
      'Collected and organized smartphone operating system market share data across multiple years, comparing Android and iOS adoption from 2015 through 2021.',
      'Built a CSV dataset containing yearly worldwide Android market share, worldwide iOS market share, U.S. Android market share, and U.S. iOS market share.',
      'Used Python and Pandas to load and structure the dataset for regression modeling and visualization.',
      'Implemented linear regression models with scikit-learn to analyze and project market share trends for Android and iOS in both worldwide and U.S. markets.',
      'Generated trendline predictions through 2025 for four categories: worldwide Android, worldwide iOS, U.S. Android, and U.S. iOS.',
      'Created scatter plots and regression trendlines using Matplotlib to visualize historical market share data and projected future movement.',
      'Calculated regression equations for each trendline, displaying slope and intercept values directly on generated plots.',
      'Manually computed R-squared values using sum of squared residuals and total sum of squares to evaluate regression fit for each market-share model.',
      'Compared U.S. and worldwide trends, identifying that iOS showed stronger market share growth in the U.S. while Android remained dominant globally.',
      'Interpreted differences between U.S. and global adoption patterns using demographic and economic context, including disposable income, device pricing, gender distribution, and age distribution.',
      'Built an interactive console workflow allowing users to choose a market category and input a future year to generate a predicted market share value.',
      'Wrote a final report combining statistical analysis, visualizations, regression outputs, demographic research, and interpretation of trend reliability.',
      'Demonstrated introductory data analysis skills including dataset construction, regression modeling, R-squared evaluation, visualization, and written statistical interpretation.',
    ],
  },
  {
    slug: 'tetris-clone',
    title: 'Tetris Clone',
    role: 'Intro Python Project',
    dates: 'November 2020 – December 2020',
    bullets: [
      'Built a playable Tetris-style game in Python during my first semester of college using the graphics.py library.',
      'Created a custom graphical game window with a start screen, clickable start button, grid-based playfield, score display, controls text, game over state, and end-of-game UI buttons.',
      'Implemented random piece spawning across multiple tetromino-style shapes, each represented with custom polygon geometry and assigned colors.',
      'Converted falling polygon pieces into individual square blocks after placement so the board state could be tracked, checked, and modified at the block level.',
      'Implemented player input using keyboard controls, allowing pieces to move left and right while falling.',
      'Built falling-piece behavior using timed downward movement, boundary checks, and collision detection against existing placed blocks.',
      'Implemented custom obstruction detection to determine when a falling piece should stop based on the occupied squares beneath it.',
      'Added board boundary logic to prevent pieces from moving outside the left and right edges of the playfield.',
      'Implemented line-clear detection by sorting occupied blocks by row, identifying full rows, removing completed lines, and shifting blocks above the cleared row downward.',
      'Built a score system that awarded points for spawned pieces and additional points for cleared lines.',
      'Implemented game-over detection when newly spawned pieces were unable to move down from the top of the board.',
      'Added persistent high-score functionality using text file input/output, reading existing scores from a file and writing updated scores to a new high-score file.',
      'Built a three-character name entry flow for players who achieved a new high score.',
      'Practiced foundational programming concepts including functions, classes, lists, sorting, conditionals, loops, file I/O, event handling, collision logic, and simple game-state management.',
      'Demonstrated early interest in game development by building a complete interactive game loop as a first-semester programming final project.',
    ],
  },
];

/* ------------------------------------------------------------------ */
/* WORK & OUTDOOR EXPERIENCE — long-form bullets                       */
/* ------------------------------------------------------------------ */
const WORK = [
  {
    slug: 'usc-climbing-club',
    title: 'Rock Climbing Club Executive Board — Head Trip Lead',
    org: 'University of Southern California',
    dates: 'December 2024 – May 2026',
    bullets: [
      'Serve on the executive board of the USC Rock Climbing Club, helping lead one of the club’s core outdoor programs through weekly climbing trips and long-term trip planning.',
      'Lead outdoor climbing trips nearly every weekend, coordinating group logistics for destinations including Joshua Tree, Bishop, Yosemite, Red Rocks, and other major climbing areas.',
      'Plan trip locations based on season, weather, climbing conditions, group experience level, campsite availability, travel distance, and overall safety.',
      'Select participants for high-demand free weekly trips, balancing fairness, group size, transportation limits, safety needs, and climber experience levels.',
      'Build trip itineraries covering departure timing, driving logistics, campsite plans, climbing objectives, gear needs, safety expectations, and return schedules.',
      'Create and manage gear sheets for each trip, ensuring crash pads, helmets, harnesses, ATCs, ropes, quickdraws, slings, anchors, and other required equipment are accounted for.',
      'Coordinate camping logistics by researching, selecting, reserving, and communicating campsite plans for weekend climbing trips.',
      'Lead mixed-ability groups to boulders and rope climbs that match participants’ skill levels, comfort levels, and goals for the trip.',
      'Supervise climbers in outdoor environments, helping maintain safe practices around crash pad placement, spotting, fall zones, belaying, rope systems, and technical terrain.',
      'Fit and check harnesses, deliver pre-climb safety briefings, and actively supervise participants on technical terrain and at height.',
      'Mentor newer climbers in movement technique, fall protection, outdoor etiquette, route reading, risk assessment, and responsible crag behavior.',
      'Frequently serve as the crash pad driver, transporting a large portion of the club’s bouldering gear to and from outdoor destinations.',
      'Coordinate transportation across multiple cars, helping ensure participants, drivers, crash pads, and technical gear arrive at the correct locations safely and efficiently.',
      'Manage trip budgets by tracking gas reimbursement needs, campsite costs, and gear purchases while keeping trips financially sustainable for the club.',
      'Help plan and coordinate club gear purchases, including helmets, ATCs, slings, anchors, quickdraws, and ropes.',
      'Coordinate multiple trip lead meetings each semester, bringing trip leads together to choose destinations, assign trip leaders, review logistics, and plan the monthly outdoor schedule.',
      'Help organize the trip lead team by assigning leaders to specific weekends, matching destination difficulty with leader experience, and maintaining coverage for the club’s outdoor schedule.',
      'Support regular trip leads with planning, location choice, gear coordination, safety expectations, and trip execution.',
      'Earned trip lead responsibility after one semester with the club due to extensive outdoor climbing experience and early involvement in club trips.',
      'Advanced into the Head Trip Lead role after becoming a central organizer for the club’s outdoor trips and taking on expanded planning responsibilities.',
      'Bring high energy, enthusiasm, and outdoor climbing experience to club trips, helping create a safe, welcoming, and motivating environment for new and experienced climbers.',
      'Demonstrated leadership across outdoor recreation, trip logistics, group safety, budget management, gear coordination, transportation planning, mentorship, and risk management.',
    ],
  },
  {
    slug: 'night-operations',
    title: 'Night Operations Manager',
    org: 'Copper Beech & Skyler Commons',
    dates: 'September 2023 – May 2024',
    bullets: [
      'Worked evening and overnight shifts from 5 PM to 2 AM across two residential properties serving student residents and short-term guests.',
      'Served as the only on-site employee during assigned shifts, independently handling resident needs, property issues, guest concerns, and incident response.',
      'Responded to resident lockouts, verified access needs, and helped residents regain entry while maintaining property security procedures.',
      'Conducted multiple nightly patrols, walking the full Copper Beech property twice per shift and checking the Skyler Commons property once per shift.',
      'Monitored property conditions during patrols, identifying safety concerns, access issues, disturbances, maintenance problems, and unusual activity.',
      'Responded to fire alarms by inspecting the affected unit or area, gathering information, and coordinating communication with the fire department when contacted.',
      'Called the fire department after discovering an active fire in an outdoor cigarette disposal container, helping escalate the issue quickly and appropriately.',
      'Managed high-stress security incidents, including coordinating backup support when an unauthorized individual needed to be removed from the property.',
      'Helped resolve resident issues including roommate disputes, noise complaints, maintenance concerns, and general overnight support requests.',
      'Accepted rent checks and handled basic front-desk administrative responsibilities during night operations.',
      'Delivered mail at one property and organized incoming resident mail onto assigned shelves at the other property.',
      'Completed nightly shift reports documenting incidents, tasks completed, resident interactions, patrols, and unresolved issues for the next staff handoff.',
      'Supported short-term rental operations by handling Airbnb-style guest check-ins, room turnovers, laundry, sheet and towel preparation, and guest-room readiness.',
      'Balanced customer service, safety monitoring, property operations, and independent decision-making during low-supervision overnight shifts.',
      'Developed practical experience in incident reporting, conflict de-escalation, guest service, emergency response, facilities support, and independent operations.',
    ],
  },
  {
    slug: 'climbing-wall-attendant',
    title: 'Climbing Wall Attendant',
    org: 'Barnes Center at The Arch — Syracuse University',
    dates: 'April 2021 – May 2023',
    bullets: [
      'Worked as a climbing wall employee at the Barnes Center at The Arch, supporting daily operations for Syracuse University’s indoor climbing facility.',
      'Checked climbers into the wall, verified required certifications, and ensured participants had the proper clearance for top-rope belaying, lead belaying, and related climbing activities.',
      'Issued rental gear including climbing shoes, chalk, harnesses, ATCs, and other climbing equipment while tracking usage and return status.',
      'Delivered safety orientations for first-time climbers, explaining facility rules, basic climbing expectations, risk awareness, and proper wall etiquette.',
      'Monitored the climbing area during open hours to ensure participants were climbing, belaying, and using equipment safely.',
      'Belayed climbers when requested and helped create a safe, welcoming environment for new and experienced participants.',
      'Administered belay tests for top-rope and lead climbing, evaluating whether climbers could tie in, belay, communicate, and manage rope systems safely before climbing independently.',
      'Performed daily rope checks to identify wear, damage, or other safety concerns before equipment was used.',
      'Confirmed that climbers renting harnesses, ATCs, or other belay-related equipment had the required certifications before issuing gear.',
      'Supported outdoor equipment rental operations by checking out and tracking camping gear including tents, sleeping bags, sleeping pads, and bag liners.',
      'Inspected returned camping gear by opening tents, confirming all components were present, cleaning gear as needed, and laundering returned sleeping bags or liners.',
      'Sanitized returned rental shoes and other gear before returning equipment to circulation.',
      'Cleaned and maintained the climbing wall area, including vacuuming chalk from gym floors, cleaning the office, and keeping the facility organized.',
      'Helped wash climbing holds during wall resets, set them out to dry, and reorganize them for future route-setting use.',
      'Assisted with wall maintenance by checking bolt holes and T-nuts, including rethreading problem T-nuts when necessary.',
      'Foreran newly set routes and boulder problems, giving feedback on movement, difficulty, flow, and safety before problems were opened to climbers.',
      'Occasionally assisted with setting climbing problems, contributing movement ideas and helping evaluate whether routes fit the intended grade and style.',
      'Maintained liquid chalk dispensers by cleaning and refilling them when empty.',
      'Helped manage the atmosphere of the climbing wall by keeping the space welcoming, organized, energetic, and community-oriented.',
      'Developed hands-on experience in climbing instruction, risk management, equipment inspection, guest service, belay evaluation, facility upkeep, and outdoor gear operations.',
    ],
  },
];

/* ------------------------------------------------------------------ */
/* SKILLS — bucketed master list                                       */
/* ------------------------------------------------------------------ */
const SKILLS = [
  { group: 'Languages & Markup', items: 'C#, C++, Python, Java, JavaScript, HTML, CSS, SQL, MATLAB, Bash, PowerShell' },
  { group: 'Frameworks, Engines & Libraries', items: 'Unity (2D/3D), Unreal Engine 5, PrimeEngine, Direct3D 11, WPF, React, Vite, Node.js, npm, FastNoise Lite, Pandas, scikit-learn, Matplotlib' },
  { group: 'Graphics & Rendering', items: '3D graphics programming, computer graphics, frustum culling, frustum plane extraction, AABB construction, AABB-vs-frustum testing, debug rendering, wireframe visualization, manual basis matrix construction, matrix transformations, view/projection transforms, row-major matrix conventions, back-face culling, skeletal animation blending, partial-body animation blending, additive animation layers, procedural generation, procedural texture generation, texture synthesis, image processing, PPM image generation' },
  { group: 'AI, Search & Optimization', items: 'Finite state machines, state-driven behavior, behavior-driven decision logic, behavior trees (familiarity), enemy AI, guard/stealth detection AI, AI targeting, AI ability selection, AI patrol/chase states, line-of-sight detection, cone-based detection, slab-method segment-vs-AABB checks, hysteresis windows, stuck-detection fallbacks, board-state evaluation, tactical move scoring, opponent modeling, search algorithms, heuristic evaluation, depth-limited search, top-k search, legal move generation, liberty analysis, capture/defense detection, Go AI, Hidden Markov Models, Viterbi decoding, probabilistic inference, transition/emission probabilities, genetic algorithms, genetic programming, evolutionary computation, fitness functions, tournament/roulette/rank selection, crossover (uniform, two-point, adjacency-preserving), mutation (uniform, random, Gaussian, creep, segment-reversal), elitism, convergence analysis, hyperparameter tuning' },
  { group: 'Algorithms & Math', items: 'Data structures, algorithms, dynamic programming, sequence alignment, Hirschberg’s algorithm, divide-and-conquer, two-row DP optimization, DP recurrence evaluation, DP backtracking, forward/reverse split scoring, path reconstruction, complexity analysis, runtime/memory benchmarking, numerical methods, scientific computing, numerical approximation, floating-point analysis, machine epsilon, Taylor series approximation, polynomial interpolation, Vandermonde systems, Chebyshev nodes, adaptive piecewise linear approximation, numerical differentiation, Newton-Cotes quadrature, Simpson-style integration, bisection, safeguarded Newton method, root-finding, tridiagonal LU factorization, bidiagonal substitution, banded Gaussian elimination, residual/error analysis' },
  { group: 'Systems & Networking', items: 'C++ engine programming, custom engine architecture, scene graph systems, game object graph systems, custom event systems, event dispatch, asset manager workflows, mesh manager extension, fixed-size container debugging, manual memory patterns, engine-level debugging, driver-level crash debugging, renderer state debugging, physics subsystem implementation, sphere-vs-AABB collision, sweep-then-resolve collision, UDP sockets, UdpClient, IPEndPoint, localhost networking, BinaryFormatter, MemoryStream, serialization, multithreading, background receive threads, dispatcher-safe UI updates, DispatcherTimer' },
  { group: 'Web & Deployment', items: 'React, Vite, Node.js, npm, GitHub Pages, GitHub Actions, static site deployment, build pipelines, component-based UI, single-page application development, responsive design, front-end debugging, browser console debugging, MIME type deployment debugging, version compatibility debugging' },
  { group: 'Data & Analysis', items: 'Python data analysis, Pandas, scikit-learn, Matplotlib, CSV datasets, linear regression, regression modeling, R-squared analysis, residual analysis, trendline generation, data visualization, scatter plots, statistical reporting, predictive modeling' },
  { group: 'Game Development & Gameplay', items: 'Gameplay engineering, player controls, camera-relative/third-person movement, gravity-based traversal, slingshot/momentum movement, dash mechanics, shield mechanics, combat systems, damage systems, ability systems, modular ability frameworks, cooldown logic, targeting systems, progression systems, puzzle mechanics, grid/tile-based systems, tile-state management, action point systems, environmental simulation, fire propagation logic, real-time strategy mechanics, turn-based systems, platforming systems, stealth/visibility mechanics, microphone input, real-time audio processing, voice-controlled mechanics, light radius systems, scene transitions, level progression, animation state control, difficulty/feel tuning, encounter pacing' },
  { group: 'AR / VR', items: 'ARKit, iOS/mobile AR development, AR spatial tracking, VR development, motion-controller input, embodied interaction design, screen-to-world interaction, camera raycasting, ScreenPointToRay, Physics.Raycast, LineRenderer, Rigidbody physics, projectile systems, 3D physics, collision detection' },
  { group: 'Software Engineering Practices', items: 'Object-oriented programming, modular software design, component-based architecture, event-driven architecture, state management, file parsing/generation, command-line interfaces, shell scripting, batch runners, error handling, debugging, performance profiling, code refactoring, system integration, input validation, application/socket cleanup' },
  { group: 'QA & Production', items: 'Game QA, QA leadership, functional testing, gameplay testing, card-system testing, combinatorial testing, edge-case testing, regression testing, bug reproduction, Jira workflows, bug triage, reproduction-step documentation, video bug reports, severity context, external playtest supervision, paper prototype testing, digital build testing, playtest observation, usability feedback, rules validation, card/interaction testing, bot behavior testing, balance feedback' },
  { group: 'Collaboration & Roles', items: 'Cross-disciplinary collaboration (designers, artists, QA, producers), lead programmer/gameplay/Unity roles, technical & feature ownership, rapid prototyping, rapid iteration, build delivery, Steam release experience, itch.io publishing, game jam development, climate/educational game development, interdisciplinary & large-team development, technical documentation/writing' },
  { group: 'Climbing & Outdoor Safety', items: 'Top-rope climbing, lead climbing, outdoor bouldering, sport climbing, belay testing, belay instruction, belay certification verification, harness fitting, ATC use, rope checks, climbing gear inspection, working at height, fall risk awareness, first-time climber orientations, climbing etiquette instruction, fall protection awareness, rope systems familiarity, outdoor trip leadership, route selection, technical terrain supervision, outdoor risk management, mixed-ability group leadership, trip planning, transportation/gear logistics, safety briefings, group management, participant mentoring, emergency coordination, climbing club executive board experience' },
  { group: 'Guest & Facility Operations', items: 'Guest check-in, customer service, rental gear management, equipment checkout/return, gear cleaning & sanitization, camping gear rental, tent inspection, sleeping bag/liner laundry, climbing shoe sanitization, chalk/liquid chalk maintenance, hold washing, route reset support, forerunning, route setting assistance, movement/difficulty feedback, wall maintenance, T-nut inspection/rethreading, facility cleaning, office upkeep, chalk vacuuming, mail delivery/organization, rent check intake, front desk support, shift reports, incident reports, room turnover, Airbnb-style check-in, guest-room prep, linen changes, property patrols, overnight/low-supervision operations, resident support, conflict de-escalation, dispute/complaint handling, lockout response, maintenance reporting, fire alarm response, fire department communication, adventure park operations, family-friendly guest experience' },
];

/* ------------------------------------------------------------------ */
/* COMPONENTS                                                          */
/* ------------------------------------------------------------------ */

function Home() {
  return (
    <main>
      <header>
        <h1>{PROFILE.name}</h1>
        <p className="meta">
          {PROFILE.location} ·{' '}
          <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a> ·{' '}
          <a href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a> ·{' '}
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
        <p className="bio">{ABOUT}</p>
      </header>

      <section>
        <h2>Education</h2>
        {EDUCATION.map((ed) => (
          <div className="block" key={ed.school}>
            <h3>{ed.school}</h3>
            <p className="meta">{ed.degree}</p>
            <p className="meta">{ed.dates} · {ed.gpa}</p>
            <p>Relevant coursework: {ed.coursework}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>Projects</h2>
        <ul className="list">
          {PROJECTS.map((p) => (
            <li key={p.slug}>
              <Link to={`/project/${p.slug}`}>{p.title}</Link>
              <span className="meta"> — {p.role} · {p.dates}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Work & Outdoor Experience</h2>
        <ul className="list">
          {WORK.map((w) => (
            <li key={w.slug}>
              <Link to={`/work/${w.slug}`}>{w.title}</Link>
              <span className="meta"> — {w.org} · {w.dates}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Skills</h2>
        {SKILLS.map((s) => (
          <p key={s.group}><strong>{s.group}:</strong> {s.items}</p>
        ))}
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Email: <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a><br />
          GitHub: <a href={PROFILE.github} target="_blank" rel="noreferrer">{PROFILE.github}</a><br />
          LinkedIn: <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">{PROFILE.linkedin}</a>
        </p>
      </section>
    </main>
  );
}

function ItemPage({ source, kind }) {
  const { slug } = useParams();
  const item = source.find((x) => x.slug === slug);
  if (!item) return <Navigate to="/" replace />;

  return (
    <main>
      <p className="back"><Link to="/">← Back</Link></p>
      <h1>{item.title}</h1>
      <p className="meta">{item.role || item.org} · {item.dates}</p>
      <ul>
        {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
      <p className="back"><Link to="/">← Back</Link></p>
    </main>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<ItemPage source={PROJECTS} kind="project" />} />
        <Route path="/work/:slug" element={<ItemPage source={WORK} kind="work" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}
