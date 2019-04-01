export const BUILDS = [{
    status: 'success',
    jobs: {
        completed: 0,
        finished: 1,
        queued: 0,
        failed: 0,
        running: 0,
        passed: 1,
        errored: 0,
        public: 0
    },
    name: 'random build 1',
    deletion_time: null,
    org_id: null,
    start_time: 1552846836,
    creation_time: 1552846834,
    number: null,
    public: false,
    modification_time: 1552846981,
    prefix: null,
    end_time: 1552846857,
    passed: true,
    owner: 'cb-onboarding',
    run: 0,
    team_id: null,
    group_id: null,
    id: 'a4bdc8f47ee64b3c946b6f696b0242bc'
}, {
    status: 'success',
    jobs: {
        completed: 0,
        finished: 1,
        queued: 0,
        failed: 0,
        running: 0,
        passed: 1,
        errored: 0,
        public: 0
    },
    name: 'random build 2',
    deletion_time: null,
    org_id: null,
    start_time: 1552845750,
    creation_time: 1552845752,
    number: null,
    public: false,
    modification_time: 1552845770,
    prefix: null,
    end_time: 1552845765,
    passed: true,
    owner: 'cb-onboarding',
    run: 0,
    team_id: null,
    group_id: null,
    id: '9f3904cdc90a4733847a20b9ee79c77c'
}, {
    status: 'error',
    jobs: {
        completed: 0,
        finished: 2,
        queued: 0,
        failed: 0,
        running: 0,
        passed: 0,
        errored: 2,
        public: 0
    },
    name: 'Chrome Beta/Dev build test - 1552690452000',
    deletion_time: null,
    org_id: null,
    start_time: 1552690453,
    creation_time: 1552690454,
    number: null,
    public: false,
    modification_time: 1552690580,
    prefix: null,
    end_time: 1552690578,
    passed: null,
    owner: 'eds-testaccount',
    run: 0,
    team_id: null,
    group_id: null,
    id: '06d037e20ce047e6ab3c4089f7e175d1'
},
{
    status: 'failed',
    jobs: {
        completed: 1,
        finished: 2,
        queued: 0,
        failed: 1,
        running: 0,
        passed: 0,
        errored: 0,
        public: 0
    },
    name: 'random build 3',
    deletion_time: null,
    org_id: null,
    start_time: 1552677683,
    creation_time: 1552677682,
    number: null,
    public: false,
    modification_time: 1552844218,
    prefix: null,
    end_time: 1552844216,
    passed: false,
    owner: 'cb-onboarding',
    run: 0,
    team_id: null,
    group_id: null,
    id: 'ee2ef39ca64342cbb277d9ca25e682c4'
},
{
    status: 'success',
    jobs: {
        completed: 0,
        finished: 1,
        queued: 0,
        failed: 0,
        running: 0,
        passed: 1,
        errored: 0,
        public: 0
    },
    name: 'random build 4',
    deletion_time: null,
    org_id: null,
    start_time: 1552677351,
    creation_time: 1552677353,
    number: null,
    public: false,
    modification_time: 1552677381,
    prefix: null,
    end_time: 1552677376,
    passed: true,
    owner: 'cb-onboarding',
    run: 0,
    team_id: null,
    group_id: null,
    id: '49b4522a80dc41659219db80ca04e98b'
}]

export const BUILD_JOBS = {
    jobs: [{
        browser_short_version: '73',
        video_url: 'https://assets.saucelabs.com/jobs/83d526a5d20040a7b854a2cbef64c067/video.flv',
        creation_time: 1552844182,
        custom_data: null,
        browser_version: '73.0.3683.75',
        owner: 'cb-onboarding',
        automation_backend: 'webdriver',
        id: '83d526a5d20040a7b854a2cbef64c067',
        deletion_time: null,
        log_url: 'https://assets.saucelabs.com/jobs/83d526a5d20040a7b854a2cbef64c067/selenium-server.log',
        record_screenshots: true,
        record_video: true,
        build: 'perfbuild22222222222222',
        passed: null,
        public: 'team',
        assigned_tunnel_id: null,
        status: 'complete',
        tags: [],
        start_time: 1552844182,
        proxied: false,
        modification_time: 1552844216,
        consolidated_status: 'complete',
        commands_not_successful: 1,
        command_counts: {
            All: 4,
            Error: 1
        },
        name: 'solalalala4123',
        proxy_host: null,
        end_time: 1552844216,
        error: null,
        os: 'Windows 10',
        breakpointed: null,
        browser: 'googlechrome'
    }, {
        browser_short_version: '73',
        video_url: 'https://assets.saucelabs.com/jobs/34c90b830852468baddd8ec79ec1e786/video.flv',
        creation_time: 1552677681,
        custom_data: null,
        browser_version: '73.0.3683.75',
        owner: 'cb-onboarding',
        automation_backend: 'webdriver',
        id: '34c90b830852468baddd8ec79ec1e786',
        deletion_time: null,
        log_url: 'https://assets.saucelabs.com/jobs/34c90b830852468baddd8ec79ec1e786/selenium-server.log',
        record_screenshots: true,
        record_video: true,
        build: 'perfbuild22222222222222',
        passed: false,
        public: 'team',
        assigned_tunnel_id: null,
        status: 'complete',
        tags: [],
        start_time: 1552677683,
        proxied: false,
        modification_time: 1552677719,
        consolidated_status: 'failed',
        commands_not_successful: 1,
        command_counts: {
            All: 4,
            Error: 1
        },
        name: 'Performance test for http://saucelabs.com',
        proxy_host: null,
        end_time: 1552677717,
        error: null,
        os: 'Windows 10',
        breakpointed: null,
        browser: 'googlechrome'
    }],
    truncated: false
}
