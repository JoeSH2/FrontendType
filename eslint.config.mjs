import tsEslint from "typescript-eslint";

export default [
    {
        plugins: {
            tsEslintRecommended: tsEslint.configs.recommended,
            tsEslintStylistic: tsEslint.configs.stylistic
        },
        rules: {
            "simple-import-sort/imports": [
                "error",
                {
                    "groups": [
                        // Packages `react` related packages come first.
                        ["^react", "^@?\\w"],
                        // Internal packages.
                        ["^(@|components)(/.*|$)"],
                        // Side effect imports.
                        ["^\\u0000"],
                        // Parent imports. Put `..` last.
                        ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                        // Other relative imports. Put same-folder imports and `.` last.
                        ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
                        // Style imports.
                        ["^.+\\.?(scss)$"]
                    ]
                }
            ],
        }

    }
];