var plato = require('plato')

var input_dir = [
    'client/app/scripts/app.js',
    'client/app/scripts/services/dataservice.js',
    'client/app/scripts/controllers/main.js',
    'client/app/scripts/controllers/about.js',
    'client/app/scripts/controllers/login.js',
    'client/app/scripts/services/authentication.js',
    'client/app/scripts/services/username.js',
    'client/app/scripts/controllers/home.js',
    'client/app/scripts/services/history.js',
    'client/app/scripts/directives/timeline.js',
    'client/app/scripts/controllers/navbar.js',
    'client/app/scripts/controllers/register.js',
    'client/app/scripts/services/registration.js',
    'client/app/scripts/controllers/profile.js',
    'client/app/scripts/controllers/account.js',
    'client/app/scripts/controllers/reset.js',
    'client/app/scripts/services/account.js',
    'client/app/scripts/services/profile.js',
    'client/app/scripts/services/login.js',
    'client/app/scripts/services/logout.js',
    'client/app/scripts/directives/profile.js',
    'client/app/scripts/directives/username.js',
    'client/app/scripts/controllers/files.js',
    'client/app/scripts/services/files.js',
    'client/app/scripts/directives/breadcrumb.js',
    'client/app/scripts/controllers/record.js',
    'client/app/scripts/services/record.js',
    'client/app/scripts/directives/measurements.js',
    'client/app/scripts/services/format.js',
    'client/app/scripts/directives/recordnavigation.js',
    'client/app/scripts/controllers/billing.js',
    'client/app/scripts/directives/billingnavigation.js',
    'client/app/scripts/directives/timeline-icon.js',
    'client/app/scripts/services/partial.js',
    'client/app/scripts/controllers/files/upload.js',
    'client/app/scripts/services/files/upload.js',
    'client/app/scripts/controllers/bonus.js',
    'client/app/scripts/services/d3.js',
    'client/app/scripts/controllers/notes.js',
    'client/app/scripts/services/notes.js',
    'client/app/scripts/directives/entry.js',
    'client/app/scripts/directives/billingentry.js',
    'client/app/scripts/filters/starred.js',
    'client/app/scripts/filters/sections.js',
    'client/app/scripts/controllers/pagetitle.js',
    'client/app/scripts/controllers/recordDownload.js',
    'client/app/scripts/services/billing.js',
    'client/app/scripts/services/matches.js',
    'client/app/scripts/services/merges.js',
    'client/app/scripts/controllers/matches.js',
    'client/app/scripts/directives/entrydetails.js',
    'lib/account/index.js',
    'lib/account-history/index.js',
    'lib/dre/index.js',
    'lib/login/index.js',
    'lib/match/index.js',
    'lib/merge/index.js',
    'lib/notes/index.js',
    'lib/notification/index.js',
    'lib/parser/index.js',
    'lib/record/index.js',
    'lib/storage/index.js',
    'test/common/common.js',
    'test/e2e/common.js',
    'test/e2e/components/allergies.js',
    'test/e2e/components/demographics.js',
    'test/e2e/components/encounters.js',
    'test/e2e/components/immunizations.js',
    'test/e2e/components/medications.js',
    'test/e2e/components/problems.js',
    'test/e2e/components/procedures.js',
    'test/e2e/components/results.js',
    'test/e2e/components/social.js',
    'test/e2e/components/vitals.js',
    'test/e2e/count.js',
    'test/e2e/history.js',
    'test/e2e/login.js',
    'test/e2e/merge.js',
    'test/e2e/storage.js',
    'test/unit/test-demo.js',
    'server.js'
];

var output_dir = './report';

var callback = function(report) {

};

plato.inspect(input_dir, output_dir, {}, callback);