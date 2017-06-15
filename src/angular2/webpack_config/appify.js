var fs = require('fs');
var path = require('path');

function AppifyPlugin(options) {
    options = options || {};

    const apply = (compiler) => {
        var outputPath = compiler.options.output.path;
        var entry = compiler.options.entry;

        compiler.plugin('done', function (stats) {
            var chunks = stats.toJson().assetsByChunkName;
            var scripts = [], styles = [];

            for (var n in entry) {
                if (entry.hasOwnProperty(n)) {
                    var files = chunks[n];
                    if (!Array.isArray(files)) files = [files];

                    files.forEach(function (file) {
                        if (file.endsWith('.js')) {
                            scripts.push(file);
                        } else if (file.endsWith('.css')) {
                            styles.push(file);
                        }
                    });
                }
            }


            fs.writeFileSync(path.join(outputPath, options.filename || 'app.json'),
                JSON.stringify({scripts, styles}));
        });
    }

    return {
        apply
    };
}

module.exports = AppifyPlugin;