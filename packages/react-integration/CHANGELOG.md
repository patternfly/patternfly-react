# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 6.5.0-prerelease.25 (2026-10-19)

### Bug Fixes

- add private=true to react-integration package.json [skip-a11y] ([196a21c](https://github.com/patternfly/patternfly-react/commit/196a21cd0c0160fbab42bf6c006ad3ed30c4117c))
- added resultsCountContext prop to pass into the screenReaderText… ([#11844](https://github.com/patternfly/patternfly-react/issues/11844)) ([d96668a](https://github.com/patternfly/patternfly-react/commit/d96668aa1ddaba5bea8b1c921e8f2145d44587ad))
- **Alert, NotificationDrawer:** Added tooltips to truncated titles ([#5043](https://github.com/patternfly/patternfly-react/issues/5043)) ([eb77e52](https://github.com/patternfly/patternfly-react/commit/eb77e52337734f462f2ce5f5fd51fbbf3c4aef0e))
- **AlertGroup:** update AlertGroupInline to not use child index as a key ([#7878](https://github.com/patternfly/patternfly-react/issues/7878)) ([1637b27](https://github.com/patternfly/patternfly-react/commit/1637b27e771c1f30afb1d91889a27e20a0a41096))
- **AngleDoubleRightIcon:** Replace AngleDoubleRightIcon with RhMicronsDoubleCaretRightIcon ([#12493](https://github.com/patternfly/patternfly-react/issues/12493)) ([a9bd226](https://github.com/patternfly/patternfly-react/commit/a9bd226cfa9183e5893cd8d74302934f98aaa51c))
- **AngleLeftIcon:** Replace AngleLeftIcon with RhMicronsCaretLeftIcon ([#12495](https://github.com/patternfly/patternfly-react/issues/12495)) ([bd9932f](https://github.com/patternfly/patternfly-react/commit/bd9932f123fc5f94598ce555f8166052eaecb95c))
- **AngleRightIcon:** Replace AngleRightIcon with RhMicronsCaretRightIcon ([#12496](https://github.com/patternfly/patternfly-react/issues/12496)) ([4f70020](https://github.com/patternfly/patternfly-react/commit/4f700201a3b4e9bee30dc7c5f2dc9798b1f58474))
- **breakpoints:** make API consistent and appear in docs ([#4310](https://github.com/patternfly/patternfly-react/issues/4310)) ([ac1afa6](https://github.com/patternfly/patternfly-react/commit/ac1afa60067346c658fcb160534d9ddaf7dafbc6))
- **build:** Fixed version mismatch issue ([#9716](https://github.com/patternfly/patternfly-react/issues/9716)) ([58ea584](https://github.com/patternfly/patternfly-react/commit/58ea5840e7a291531d45e40b0c5d1d0cdc8093c8))
- **build:** Removed pacakage-lock.json file from source control ([#8703](https://github.com/patternfly/patternfly-react/issues/8703)) ([698fec9](https://github.com/patternfly/patternfly-react/commit/698fec9fdcab7bdfdc540929f97e7116c4ddd62a))
- bump dependencies and remove ssl option ([#8984](https://github.com/patternfly/patternfly-react/issues/8984)) ([f8f77d2](https://github.com/patternfly/patternfly-react/commit/f8f77d232b386ad8676af609273d9adff5a5feae))
- bump lerna version ([#9523](https://github.com/patternfly/patternfly-react/issues/9523)) ([386c2b3](https://github.com/patternfly/patternfly-react/commit/386c2b38c7d05529329f13c604d72082cf51fcf1))
- **CalendarAltIcon:** Replace CalendarAltIcon with RhUiCalendarIcon ([#12462](https://github.com/patternfly/patternfly-react/issues/12462)) ([e1e02f2](https://github.com/patternfly/patternfly-react/commit/e1e02f25b17cc5b4d7f775ef1fc0aee61753e0ad))
- **Card:** updated logic to prevent unclickable cards ([#10168](https://github.com/patternfly/patternfly-react/issues/10168)) ([87a6a66](https://github.com/patternfly/patternfly-react/commit/87a6a667b5827534a3c8115b3aff35aa83ce289c))
- **Card:** updated markup for actionable cards ([#10859](https://github.com/patternfly/patternfly-react/issues/10859)) ([d58b051](https://github.com/patternfly/patternfly-react/commit/d58b051f8d736f55580e3df9fc2bbddf479af099))
- **charts:** replace victory with victory-zoom-container ([#5179](https://github.com/patternfly/patternfly-react/issues/5179)) ([bef64a5](https://github.com/patternfly/patternfly-react/commit/bef64a5e8f8ba060061df611d028dec5f8e9adf2))
- **charts:** Use Victory's createContainer instead of allowZoom prop ([#4278](https://github.com/patternfly/patternfly-react/issues/4278)) ([8c353d9](https://github.com/patternfly/patternfly-react/commit/8c353d9a5a4322984d5e564d5737e53e796928f6))
- **Chip/Label:** update structure to work with core updates ([#8773](https://github.com/patternfly/patternfly-react/issues/8773)) ([b44e4e9](https://github.com/patternfly/patternfly-react/commit/b44e4e98a73442eebdacddee2bae38c42728bde5))
- **Chip:** Added prop to render a badge in the chip after the text ([#9493](https://github.com/patternfly/patternfly-react/issues/9493)) ([ee6d853](https://github.com/patternfly/patternfly-react/commit/ee6d853b5f92d0a2114d7b73a76cdc1a5dd3a96d))
- **ClipboardIcon:** Replace ClipboardIcon with RhUiClipboardFillIcon ([#12455](https://github.com/patternfly/patternfly-react/issues/12455)) ([f763158](https://github.com/patternfly/patternfly-react/commit/f7631588c8643c9a567054e35e3d01af33a4ffbf))
- **CodeBranchIcon:** Replace CodeBranchIcon with RhUiBranchIcon ([#12489](https://github.com/patternfly/patternfly-react/issues/12489)) ([aa4f9fd](https://github.com/patternfly/patternfly-react/commit/aa4f9fdfb7a0e95b8b01f6b08db2947af3ee55cb))
- **CodeEditor:** fix flaky integration test ([#5531](https://github.com/patternfly/patternfly-react/issues/5531)) ([bf65fe6](https://github.com/patternfly/patternfly-react/commit/bf65fe6721651f06c67add7d3e4cdd0333a023dd))
- **CodeIcon:** Replace CodeIcon with RhUiCodeIcon ([#12488](https://github.com/patternfly/patternfly-react/issues/12488)) ([9562dbe](https://github.com/patternfly/patternfly-react/commit/9562dbe059fc5ca5182a177ae72943ae05fcaeea))
- **composable typeahead select:** updated accessibility ([#8633](https://github.com/patternfly/patternfly-react/issues/8633)) ([2be8ac0](https://github.com/patternfly/patternfly-react/commit/2be8ac035251bed35d785838b35b14be8a7302ac))
- **compound-table:** set button type on compoundExpand transform button ([#5058](https://github.com/patternfly/patternfly-react/issues/5058)) ([5b52b73](https://github.com/patternfly/patternfly-react/commit/5b52b739bc7d5b1fbe8fce464239aca005fdbd71))
- **CopyIcon:** Replace CopyIcon with RhUiCopyFillIcon ([#12449](https://github.com/patternfly/patternfly-react/issues/12449)) ([a2798bd](https://github.com/patternfly/patternfly-react/commit/a2798bd477fedc37c8a3a706464eb864706254a3))
- **core-version:** bump to use core 5.0.0-alpha.3 ([#8469](https://github.com/patternfly/patternfly-react/issues/8469)) ([70844f9](https://github.com/patternfly/patternfly-react/commit/70844f9afc2d4dcef1bc8d7a7026f5413b3beebd))
- **core,table:** forward ref types ([#3919](https://github.com/patternfly/patternfly-react/issues/3919)) ([2210ec2](https://github.com/patternfly/patternfly-react/commit/2210ec2c142a385f85de8b0bac9c61a61521186d))
- **core:** update core to alpha.24 ([#8768](https://github.com/patternfly/patternfly-react/issues/8768)) ([6dd5e01](https://github.com/patternfly/patternfly-react/commit/6dd5e01e16bc94fe4b954b79ba67adaaab9c7135))
- **DataList, Table:** update hoverable reference to clickable ([#9083](https://github.com/patternfly/patternfly-react/issues/9083)) ([c03a019](https://github.com/patternfly/patternfly-react/commit/c03a01918b2d947d297ea5598cb79c607fd849e8))
- **datalist:** actions wrapper ([#10939](https://github.com/patternfly/patternfly-react/issues/10939)) ([833465f](https://github.com/patternfly/patternfly-react/commit/833465f0ea0ef48cd3a02e307c0dd559a8f4e880))
- **DataToolbarFilter:** Add prop to enable removal of all chips in a filter category. ([#4060](https://github.com/patternfly/patternfly-react/issues/4060)) ([16340da](https://github.com/patternfly/patternfly-react/commit/16340dad7dc37d4a9446717adc7fc252469e3cd4)), closes [#4059](https://github.com/patternfly/patternfly-react/issues/4059)
- **DatePicker:** enable DatePicker in a modal ([#7416](https://github.com/patternfly/patternfly-react/issues/7416)) ([34252fa](https://github.com/patternfly/patternfly-react/commit/34252fafcf628c33f60cb4211f067faff2a1d111))
- **DatePicker:** error not showing on date reset by button ([#9267](https://github.com/patternfly/patternfly-react/issues/9267)) ([4fccdaf](https://github.com/patternfly/patternfly-react/commit/4fccdaf8d260ef60165837e7d493febabf53e145)), closes [#9373](https://github.com/patternfly/patternfly-react/issues/9373)
- demo-app update package.json version number ([8e14e1c](https://github.com/patternfly/patternfly-react/commit/8e14e1cc3dfbb9758210e9ebb914457bf9e34a29))
- **demo-app:** bump react-core dependency ([c6e9802](https://github.com/patternfly/patternfly-react/commit/c6e980252dbd6573e8d201c2f8bd1505712d8a92))
- **demo-app:** bump react-core version ([bcf6de6](https://github.com/patternfly/patternfly-react/commit/bcf6de6ffa2a6fa606d6f00b13123e049f9ca7f0))
- **demo-app:** reorder css imports to load in dark theme correctly ([#7224](https://github.com/patternfly/patternfly-react/issues/7224)) ([1341c93](https://github.com/patternfly/patternfly-react/commit/1341c9396a25f6850bf4e961e40c9ddd182d9d3b))
- **demo-app:** replace CRA with webpack and ts-loader ([#4877](https://github.com/patternfly/patternfly-react/issues/4877)) ([1b64309](https://github.com/patternfly/patternfly-react/commit/1b6430943e14acf84fa54115b1a009930cf2372e))
- **demo-app:** update version to alpha ([#8748](https://github.com/patternfly/patternfly-react/issues/8748)) ([9438d51](https://github.com/patternfly/patternfly-react/commit/9438d517a4591d73e9292240da1014fcd2dec4eb))
- **deps:** Apply JSX tranform changes to missed demos and examples ([#11679](https://github.com/patternfly/patternfly-react/issues/11679)) ([546aaa1](https://github.com/patternfly/patternfly-react/commit/546aaa163f9a4cdb3649190783e5d9d5f32b9b6a))
- **deps:** update react-router monorepo to ^7.3.0 ([#11627](https://github.com/patternfly/patternfly-react/issues/11627)) ([4cd79ef](https://github.com/patternfly/patternfly-react/commit/4cd79efece78bceeae4712f2bcd9c61ed74b9d78))
- **deps:** update react-router monorepo to ^7.9.4 ([#11692](https://github.com/patternfly/patternfly-react/issues/11692)) ([0f80fa4](https://github.com/patternfly/patternfly-react/commit/0f80fa419631c1c7d8127f5ab45a4aaad2e79988))
- **deps:** updated Core for v5 versioning ([#9075](https://github.com/patternfly/patternfly-react/issues/9075)) ([3879fc7](https://github.com/patternfly/patternfly-react/commit/3879fc757aefeed80b0694365aa20d5ca856a797))
- **deps:** updated deps to fix peer conflict in eslint-plugin-pf-react ([#8656](https://github.com/patternfly/patternfly-react/issues/8656)) ([0534f6a](https://github.com/patternfly/patternfly-react/commit/0534f6a3d32df10c700dc67233e7a9c01b7a0ced))
- **deps:** updated to the latest core alpha ([#8688](https://github.com/patternfly/patternfly-react/issues/8688)) ([5f81928](https://github.com/patternfly/patternfly-react/commit/5f819288d7baaa3806b23c0da8fb26dd4ec12d6b))
- **descriptionList:** change autoMinFitModifier to autoFitMinModifier ([#5227](https://github.com/patternfly/patternfly-react/issues/5227)) ([fa85c81](https://github.com/patternfly/patternfly-react/commit/fa85c81030f9486335c6a2b9ae23bcaa1ce3ffa2))
- **docs:** update use of deprecated tag and clean up changelogs ([#9259](https://github.com/patternfly/patternfly-react/issues/9259)) ([8de83dc](https://github.com/patternfly/patternfly-react/commit/8de83dc3b2fb88094fd3c21bda2ed6e371986cba))
- **dragdrop:** remove React.createPortal, add noWrap ([#6328](https://github.com/patternfly/patternfly-react/issues/6328)) ([425f9f2](https://github.com/patternfly/patternfly-react/commit/425f9f2f8b2c0281349f7e689f9f83f547af1c5c))
- **Drawer:** added event param to onResize callback ([#8736](https://github.com/patternfly/patternfly-react/issues/8736)) ([db183b2](https://github.com/patternfly/patternfly-react/commit/db183b29ebdf26ceaae975e3a0fbe58a5635ca21))
- **Drawer:** initial width doesn't respect min/max widths ([#5313](https://github.com/patternfly/patternfly-react/issues/5313)) ([4f199c4](https://github.com/patternfly/patternfly-react/commit/4f199c4db5c3cb493d2947d871f687cc5527517c))
- **Drawer:** opening drawer can send focus to the drawer ([#4328](https://github.com/patternfly/patternfly-react/issues/4328)) ([fec328a](https://github.com/patternfly/patternfly-react/commit/fec328ab03bb1456e5eb685b5fe91b712c82ef5d))
- **drawer:** rename onMount to onExpand and add animation timeout ([#4508](https://github.com/patternfly/patternfly-react/issues/4508)) ([a908179](https://github.com/patternfly/patternfly-react/commit/a90817915d65201b3cf582665a19750dd9370019))
- **Dropdown, Select:** fix scrollbar click closing menu ([#5766](https://github.com/patternfly/patternfly-react/issues/5766)) ([e349054](https://github.com/patternfly/patternfly-react/commit/e34905437479aa4914d14a43892e39b9bcdb6ae1))
- **DualListSelector example:** improved behaviour when filter is applied ([#11097](https://github.com/patternfly/patternfly-react/issues/11097)) ([b146983](https://github.com/patternfly/patternfly-react/commit/b146983291454cd64099e9a10a2ccb6ad249a920))
- **DualListSelector:** add/remove all should respect filtering ([#5884](https://github.com/patternfly/patternfly-react/issues/5884)) ([46be375](https://github.com/patternfly/patternfly-react/commit/46be375d21a5c0ae422bfb89e67d8a2fc07a59b9))
- **EllipsisVIcon:** Replace EllipsisVIcon with RhUiEllipsisVerticalFillIcon ([#12481](https://github.com/patternfly/patternfly-react/issues/12481)) ([29f223e](https://github.com/patternfly/patternfly-react/commit/29f223e6f0869af70d4b6f0733660a9573466342))
- **examples:** make sure examples with SearchInput have onClear ([#12044](https://github.com/patternfly/patternfly-react/issues/12044)) ([9c785af](https://github.com/patternfly/patternfly-react/commit/9c785af077869005514bc719212e21f9193f9206))
- **expandable section:** update to use <Button> for toggle ([#10891](https://github.com/patternfly/patternfly-react/issues/10891)) ([fd9ce14](https://github.com/patternfly/patternfly-react/commit/fd9ce14865230be76444ef025def90a5619d464e))
- **expandable-section:** pass expandable value to onToggle ([#4427](https://github.com/patternfly/patternfly-react/issues/4427)) ([e016965](https://github.com/patternfly/patternfly-react/commit/e0169655dac62fc19890f6abae66a8eb98a25559))
- **ExternalLinkAltIcon:** Replace ExternalLinkAltIcon with RhUiExternalLinkIcon ([#12490](https://github.com/patternfly/patternfly-react/issues/12490)) ([300a85c](https://github.com/patternfly/patternfly-react/commit/300a85c3742b3e88bc022adeae7ca6749d66151f))
- **FileUpload:** added DropEvent as a type exported from react-core ([#9120](https://github.com/patternfly/patternfly-react/issues/9120)) ([ce090b0](https://github.com/patternfly/patternfly-react/commit/ce090b01dc63a9d9ca88da78e62fa64eee182a0d))
- **FileUpload:** allow user to override onClick ([#5689](https://github.com/patternfly/patternfly-react/issues/5689)) ([58f60e5](https://github.com/patternfly/patternfly-react/commit/58f60e5b7da3fd1d85d4023735efdca3eb4c058a))
- **FileUpload:** Improving events in the FileUpload ([#6139](https://github.com/patternfly/patternfly-react/issues/6139)) ([875f921](https://github.com/patternfly/patternfly-react/commit/875f921ee42d925bff4961f39157e9d59a1b4cef))
- **FilterIcon:** Replace FilterIcon with RhUiFilterFillIcon ([#12524](https://github.com/patternfly/patternfly-react/issues/12524)) ([f8bcd7c](https://github.com/patternfly/patternfly-react/commit/f8bcd7cc8b14d03706efe384b06ad3fe7701df30))
- general clean up ([#8944](https://github.com/patternfly/patternfly-react/issues/8944)) ([7a6ea59](https://github.com/patternfly/patternfly-react/commit/7a6ea59c7b029cd5ffe22117fa81706c28feadfe))
- **generate tokens:** prefix tokens with a t\_ ([#11002](https://github.com/patternfly/patternfly-react/issues/11002)) ([0dac6b8](https://github.com/patternfly/patternfly-react/commit/0dac6b88b9f560975627c80c6e8ab816d8b78ac9))
- **github-actions:** test_integration cypress action 3 ([e2e6ed5](https://github.com/patternfly/patternfly-react/commit/e2e6ed5edd795749c7a560a7b3196f1497f3dc02))
- **InfrastructureIcons:** replaced with RH brand icons part 1 ([#12501](https://github.com/patternfly/patternfly-react/issues/12501)) ([a479b4c](https://github.com/patternfly/patternfly-react/commit/a479b4c354ca970383cfefeb5eb532b519b2ea73))
- **InfrastructureIcons:** replaced with RH brand icons part 2 ([#12502](https://github.com/patternfly/patternfly-react/issues/12502)) ([80f6ca0](https://github.com/patternfly/patternfly-react/commit/80f6ca081487c175bd6b336c256a426e1ef37bdc))
- **InfrastructureIcons:** replaced with RH brand icons part 3 ([#12503](https://github.com/patternfly/patternfly-react/issues/12503)) ([eb80455](https://github.com/patternfly/patternfly-react/commit/eb8045502918af553015eb0cb0fa6f17443a2ced))
- **InfrastructureIcons:** replaced with RH brand icons part 4 ([#12504](https://github.com/patternfly/patternfly-react/issues/12504)) ([4cc476a](https://github.com/patternfly/patternfly-react/commit/4cc476a36b7fb93835fba30881ca0b88c31f01f3))
- **Input group:** Removed variant prop from input group text ([#9147](https://github.com/patternfly/patternfly-react/issues/9147)) ([ba354a5](https://github.com/patternfly/patternfly-react/commit/ba354a5a20ce0ac5ed22080b78d50c45b7ca7a9a))
- **integration:** update package.json ([#8763](https://github.com/patternfly/patternfly-react/issues/8763)) ([c493100](https://github.com/patternfly/patternfly-react/commit/c493100a8e96ab6b51c52a9aadeaa6c26b16d5ec))
- **keyboard:** Notification drawer and tree view keyboard handling bug fixes ([#9071](https://github.com/patternfly/patternfly-react/issues/9071)) ([8d1ee08](https://github.com/patternfly/patternfly-react/commit/8d1ee089d6895ce2c15fcdf7fbb0d79cffe802d4))
- **Label:** Added tooltip to truncated text ([#5007](https://github.com/patternfly/patternfly-react/issues/5007)) ([5881577](https://github.com/patternfly/patternfly-react/commit/58815776532aa0de61c63925746d06d226e061e6))
- **LoginForm:** updated param order ([#8996](https://github.com/patternfly/patternfly-react/issues/8996)) ([ae2b234](https://github.com/patternfly/patternfly-react/commit/ae2b234f360a0340c8d2a3f1af335b7d626f6ece))
- **Menu toggle:** Remove pf-m-action modifier ([#11096](https://github.com/patternfly/patternfly-react/issues/11096)) ([fe6871c](https://github.com/patternfly/patternfly-react/commit/fe6871cf3063eab33dc572f30a57c52e84f34131))
- **Menu:** update drilldown transition event handler ([#10839](https://github.com/patternfly/patternfly-react/issues/10839)) ([3601778](https://github.com/patternfly/patternfly-react/commit/360177842e7659d8f5f9bf1dcd6d5de18a46d3f0))
- **Modal:** Prevent duplicate ids within Modal ([#9555](https://github.com/patternfly/patternfly-react/issues/9555)) ([2953b78](https://github.com/patternfly/patternfly-react/commit/2953b78290b3baee6cf506303c88dfc5ab9d0329))
- **Multiple:** update old component classnames ([#9139](https://github.com/patternfly/patternfly-react/issues/9139)) ([8fbd940](https://github.com/patternfly/patternfly-react/commit/8fbd9401cd27cb84e73722292a2765781a46a6f7))
- **NavExpandable:** converts nav expandable to button ([#4512](https://github.com/patternfly/patternfly-react/issues/4512)) ([ead0266](https://github.com/patternfly/patternfly-react/commit/ead0266fe165d84ed4538772e3c48baf98508044))
- **nav:** fix expanding on new span icon ([#4275](https://github.com/patternfly/patternfly-react/issues/4275)) ([8c9c008](https://github.com/patternfly/patternfly-react/commit/8c9c0087b9a11e294d1d53ea47f2e28533a2b467))
- **Navigation:** Fixed so that the onExpand callback is fired ([#5595](https://github.com/patternfly/patternfly-react/issues/5595)) ([95ed773](https://github.com/patternfly/patternfly-react/commit/95ed7734e69b81ed7548f4125d320087b25d3b0c))
- **Nav:** updated onSelect and onToggle param order ([#8997](https://github.com/patternfly/patternfly-react/issues/8997)) ([70a0f64](https://github.com/patternfly/patternfly-react/commit/70a0f6410b1021fae99aa55adbef54f6536cf342))
- **NotificationDrawer:** fix accessibility issues and add accessibility test cases ([#4466](https://github.com/patternfly/patternfly-react/issues/4466)) ([d4cb0bb](https://github.com/patternfly/patternfly-react/commit/d4cb0bbe4381967713429a58c0f15d6190f3ceff))
- **NumberInput:** manage null value ([#7898](https://github.com/patternfly/patternfly-react/issues/7898)) ([b86371d](https://github.com/patternfly/patternfly-react/commit/b86371dfe703614c12f49b68c096b28a91b9debd))
- **OptionsMenu:** fix accessibility issue in plain with text ([#4352](https://github.com/patternfly/patternfly-react/issues/4352)) ([2bcf204](https://github.com/patternfly/patternfly-react/commit/2bcf204e8b6c9ce56dd0824e0d317baea313f08d))
- **OverflowMenu:** ignore menu being covered in intg. tests ([#6852](https://github.com/patternfly/patternfly-react/issues/6852)) ([066e2bb](https://github.com/patternfly/patternfly-react/commit/066e2bb994f4eca5538fb9287e5d10ddf4a30cac))
- **Page:** add missing tertiary nav demo, integration, and cypress test ([#4707](https://github.com/patternfly/patternfly-react/issues/4707)) ([1abca6d](https://github.com/patternfly/patternfly-react/commit/1abca6d09bd27459c8b3fc84c0f29040f3d33575))
- **PageHeaderToolsItem:** fix breakpoint typo ([#4634](https://github.com/patternfly/patternfly-react/issues/4634)) ([779890c](https://github.com/patternfly/patternfly-react/commit/779890c9fc3535386c1322269c000ea4b11b0f5b))
- **page:** make tabIndex optional ([#4181](https://github.com/patternfly/patternfly-react/issues/4181)) ([858be76](https://github.com/patternfly/patternfly-react/commit/858be769876640e42203ae82a633f96ff58f9568))
- **PageSidebar:** sidebar flash on non-mobile ([#12040](https://github.com/patternfly/patternfly-react/issues/12040)) ([f986c4f](https://github.com/patternfly/patternfly-react/commit/f986c4f30581074f2ed4d25c52333eb665be9d28))
- **Pagination:** make items per page text in toggle clickable ([#7192](https://github.com/patternfly/patternfly-react/issues/7192)) ([b3c0c6f](https://github.com/patternfly/patternfly-react/commit/b3c0c6f0a41d7557e8c64bb291bfb7e5b9832ee8))
- **Pagination:** remove spin buttons ([#9219](https://github.com/patternfly/patternfly-react/issues/9219)) ([d53ca9d](https://github.com/patternfly/patternfly-react/commit/d53ca9d1ad31d60d19885298aa196185a4b55c83))
- **PficonSortCommonAscIcon:** Replace PficonSortCommonAscIcon with RhUiSortDownSmallToLargeIcon ([#12485](https://github.com/patternfly/patternfly-react/issues/12485)) ([909f747](https://github.com/patternfly/patternfly-react/commit/909f747a449b449cde415c31a77a33b1559bfe08))
- **PficonSortCommonDescIcon:** Replace PficonSortCommonDescIcon with RhUiSortDownLargeToSmallIcon ([#12486](https://github.com/patternfly/patternfly-react/issues/12486)) ([61aa3e2](https://github.com/patternfly/patternfly-react/commit/61aa3e2b723458669d1bfdd7814f812df06767b3))
- **PlayIcon:** Replace PlayIcon with RhUiPlayFillIcon ([#12499](https://github.com/patternfly/patternfly-react/issues/12499)) ([a859511](https://github.com/patternfly/patternfly-react/commit/a8595111abfc4736799edfc750bd8c13a0c9f78f))
- **popover:** allow user to change heading level ([#6549](https://github.com/patternfly/patternfly-react/issues/6549)) ([2fef381](https://github.com/patternfly/patternfly-react/commit/2fef3813b58219e8b4179fcbebf72606714b82fa))
- **Popover:** Refactor popover header ([#8774](https://github.com/patternfly/patternfly-react/issues/8774)) ([aede226](https://github.com/patternfly/patternfly-react/commit/aede2260822575d150060b44469df2fa10ba1667))
- **Popover:** reverted appendTo to document body ([#9252](https://github.com/patternfly/patternfly-react/issues/9252)) ([f2b140d](https://github.com/patternfly/patternfly-react/commit/f2b140d23b19f9d79c61223ff1ee960dea015f4d))
- **Popover:** updated appendTo to inline by default ([#8621](https://github.com/patternfly/patternfly-react/issues/8621)) ([f6522ca](https://github.com/patternfly/patternfly-react/commit/f6522ca6e30dcbcef9e2a4f86397a3457d1cb6fe))
- **Popper:** updated default appendTo prop for Penta styling ([#10675](https://github.com/patternfly/patternfly-react/issues/10675)) ([daef02d](https://github.com/patternfly/patternfly-react/commit/daef02d52c194ebd9c4a0863629e82367177c4f5))
- **Radio, Checkbox:** Added standalone modifier when no label is provided ([#5513](https://github.com/patternfly/patternfly-react/issues/5513)) ([4e6273d](https://github.com/patternfly/patternfly-react/commit/4e6273db2cbf5e7a4f2a1fcfca3d706889ded5fe))
- **Radio:** updated param order for onChange ([#8965](https://github.com/patternfly/patternfly-react/issues/8965)) ([f32e4ab](https://github.com/patternfly/patternfly-react/commit/f32e4abac9ed1b49a3d98f733a81111dbfb47074))
- **react-charts:** bump victory and move victory dep to demo app ([#5178](https://github.com/patternfly/patternfly-react/issues/5178)) ([45ec687](https://github.com/patternfly/patternfly-react/commit/45ec687506af9c0cb512feb25aa33ca2b73a7ff4))
- Release alphas from v6 and rebase from main ([#9692](https://github.com/patternfly/patternfly-react/issues/9692)) ([bb022ff](https://github.com/patternfly/patternfly-react/commit/bb022ffc65da8e8c5b5c984412f936cea9424676)), closes [#9651](https://github.com/patternfly/patternfly-react/issues/9651) [#9627](https://github.com/patternfly/patternfly-react/issues/9627) [#9555](https://github.com/patternfly/patternfly-react/issues/9555) [#9543](https://github.com/patternfly/patternfly-react/issues/9543) [#9578](https://github.com/patternfly/patternfly-react/issues/9578) [#9519](https://github.com/patternfly/patternfly-react/issues/9519) [#9603](https://github.com/patternfly/patternfly-react/issues/9603) [#9655](https://github.com/patternfly/patternfly-react/issues/9655) [#9614](https://github.com/patternfly/patternfly-react/issues/9614) [#9606](https://github.com/patternfly/patternfly-react/issues/9606) [#9628](https://github.com/patternfly/patternfly-react/issues/9628) [#9635](https://github.com/patternfly/patternfly-react/issues/9635) [#9649](https://github.com/patternfly/patternfly-react/issues/9649) [#9642](https://github.com/patternfly/patternfly-react/issues/9642) [#9633](https://github.com/patternfly/patternfly-react/issues/9633) [#9637](https://github.com/patternfly/patternfly-react/issues/9637) [#9584](https://github.com/patternfly/patternfly-react/issues/9584) [#9284](https://github.com/patternfly/patternfly-react/issues/9284)
- **release:** dryrun publishing prereleases ([#9242](https://github.com/patternfly/patternfly-react/issues/9242)) ([e4c35f1](https://github.com/patternfly/patternfly-react/commit/e4c35f14cd57be132179e51ae2bb223600a35f0e))
- **RhMicronCaretDown:** Replace with fill for menus ([#12532](https://github.com/patternfly/patternfly-react/issues/12532)) ([2729a13](https://github.com/patternfly/patternfly-react/commit/2729a139db37a50afa6ca15c44b20fb545005847))
- **SearchIcon:** Replace SearchIcon with RhMicronsSearchIcon ([#12525](https://github.com/patternfly/patternfly-react/issues/12525)) ([930a34b](https://github.com/patternfly/patternfly-react/commit/930a34b12f4daf243757cb14b4b772d02e5c471a))
- **Select:** Footer keyboard bugs ([#6844](https://github.com/patternfly/patternfly-react/issues/6844)) ([7f06125](https://github.com/patternfly/patternfly-react/commit/7f06125cfb52884708107da82ca3800207c9846f))
- **Select/Dropdown:** updated autofocus to false by default in v6 ([#11115](https://github.com/patternfly/patternfly-react/issues/11115)) ([2b2bc35](https://github.com/patternfly/patternfly-react/commit/2b2bc35d3da32c662050645838a903bf479d58fc))
- **Select:** check for updates in grouped select options ([#7530](https://github.com/patternfly/patternfly-react/issues/7530)) ([95e2a68](https://github.com/patternfly/patternfly-react/commit/95e2a684e6b9146f317e93001cd5e150a4eedfef))
- **select:** display label and not value in typeahead ([#4916](https://github.com/patternfly/patternfly-react/issues/4916)) ([ea57b3f](https://github.com/patternfly/patternfly-react/commit/ea57b3f6c74189796362ec4ef17ab7119f4f0348))
- **Select:** Fix select crash ([#6678](https://github.com/patternfly/patternfly-react/issues/6678)) ([8f9132f](https://github.com/patternfly/patternfly-react/commit/8f9132f768163b5b763f137e2a312a6390314d37))
- **Select:** Fixed dot next to the spinner in grouped view more variant ([#6831](https://github.com/patternfly/patternfly-react/issues/6831)) ([ccc81b4](https://github.com/patternfly/patternfly-react/commit/ccc81b4c8c30506f28e61e73dcbc106da50ca692))
- **Select:** Fixed so that view more btn click does not close the menu in React 16 ([#6922](https://github.com/patternfly/patternfly-react/issues/6922)) ([89da91d](https://github.com/patternfly/patternfly-react/commit/89da91dfd3a9e7af8ee26f8b6b5ac01c5b2487d4))
- **Select:** prevent double enter, cover additional onclose cases ([#6966](https://github.com/patternfly/patternfly-react/issues/6966)) ([c916441](https://github.com/patternfly/patternfly-react/commit/c9164418b10ef58c669a424856399f1a3ffa5ec0))
- **select:** skip the divider children in getDisplay ([#4998](https://github.com/patternfly/patternfly-react/issues/4998)) ([99fc494](https://github.com/patternfly/patternfly-react/commit/99fc494e636b12f1528e1956f33ff6327379bdb3))
- **SkipToContent:** Updated markup ([#8650](https://github.com/patternfly/patternfly-react/issues/8650)) ([0808215](https://github.com/patternfly/patternfly-react/commit/08082151987f571556169dae9fc1326c16807d61))
- **Slider:** added event param to onChange ([#8970](https://github.com/patternfly/patternfly-react/issues/8970)) ([222e8f9](https://github.com/patternfly/patternfly-react/commit/222e8f9241008f1cc65639cbfdc5f47a5615af76))
- **Slider:** Input resizing ([#6612](https://github.com/patternfly/patternfly-react/issues/6612)) ([0a54d58](https://github.com/patternfly/patternfly-react/commit/0a54d58a2cb2914f4b9d39957d08e512f161d0c1))
- **Slider:** use slider with no linear data ([#7463](https://github.com/patternfly/patternfly-react/issues/7463)) ([9090b05](https://github.com/patternfly/patternfly-react/commit/9090b057b4304df8a2d800134f4d0af1f775dea7))
- **Switch:** updated a11y by removing dynamic labeling ([#10646](https://github.com/patternfly/patternfly-react/issues/10646)) ([730ac69](https://github.com/patternfly/patternfly-react/commit/730ac69eb9544d4831b9eb5fac693fc76a5fe06c))
- **SyncIcon:** Replace SyncIcon with RhUiSyncIcon ([#12512](https://github.com/patternfly/patternfly-react/issues/12512)) ([9829852](https://github.com/patternfly/patternfly-react/commit/982985213b6dce21a815e5b60703e97e916402be))
- **TableIcon:** Replace TableIcon with RhUiTableIcon ([#12476](https://github.com/patternfly/patternfly-react/issues/12476)) ([b6c1b00](https://github.com/patternfly/patternfly-react/commit/b6c1b002cea1ebc02c20d89f302f39631de08c6e))
- **Table:** rename TdSelectType 'disable' prop to 'isDisabled' ([#8861](https://github.com/patternfly/patternfly-react/issues/8861)) ([5685e0e](https://github.com/patternfly/patternfly-react/commit/5685e0eb1847f8426d27af175f980b6205763a5a))
- **tabs:** add classNames to tab ([#4578](https://github.com/patternfly/patternfly-react/issues/4578)) ([53a3977](https://github.com/patternfly/patternfly-react/commit/53a397707c059234800dbe6ac57a684f632839b2))
- **tabs:** conditionally render aria-controls when un/mountOnEnter ([#4796](https://github.com/patternfly/patternfly-react/issues/4796)) ([41d3d0e](https://github.com/patternfly/patternfly-react/commit/41d3d0e1d41c45ba2a7d18f4ab9c3bdca494a3e4))
- **Tabs:** prevented scroll buttons from rendering when not needed ([#8011](https://github.com/patternfly/patternfly-react/issues/8011)) ([ac79742](https://github.com/patternfly/patternfly-react/commit/ac7974244c2ca422cf310ed7060c5e1548fb1486))
- **test:** Disable failing cypress test ([#11380](https://github.com/patternfly/patternfly-react/issues/11380)) ([e02c093](https://github.com/patternfly/patternfly-react/commit/e02c093f47c0f40f02f40ab80b54fa1a07f9b00b))
- **togglegroup:** remove dividers, light variation, add compact ([#5762](https://github.com/patternfly/patternfly-react/issues/5762)) ([d5c8c31](https://github.com/patternfly/patternfly-react/commit/d5c8c31bb24f613687fcf5aa3213ee51a8007580))
- **Toolbar\*:** change spelling of visiblity prop ([#4560](https://github.com/patternfly/patternfly-react/issues/4560)) ([cc17bf2](https://github.com/patternfly/patternfly-react/commit/cc17bf264a951017969615ebbba8cf6a05c8a5c9)), closes [#4555](https://github.com/patternfly/patternfly-react/issues/4555) [#4556](https://github.com/patternfly/patternfly-react/issues/4556)
- **ToolbarToggleGroup:** revert show to breakpoint ([#4343](https://github.com/patternfly/patternfly-react/issues/4343)) ([8c50170](https://github.com/patternfly/patternfly-react/commit/8c501709770b5e28e85f7db0bb64c3607d260c55))
- **Toolbar:** update align prop type to alignEnd, alignStart ([#10366](https://github.com/patternfly/patternfly-react/issues/10366)) ([83db357](https://github.com/patternfly/patternfly-react/commit/83db3575d63e16fd883410188c7516efa2e62d62))
- **Toolbar:** updated for parity with Core updates ([#10674](https://github.com/patternfly/patternfly-react/issues/10674)) ([d508325](https://github.com/patternfly/patternfly-react/commit/d50832554af01c6beeb3a5a03f2cdfb41daffbf4))
- **Topology:** Allow applications to choose using resizable drawer for topology side bar ([#5572](https://github.com/patternfly/patternfly-react/issues/5572)) ([82176dc](https://github.com/patternfly/patternfly-react/commit/82176dcc6328478df8216f583f65a86b49a2826e))
- **topology:** create connector drag spec configuration ([#4529](https://github.com/patternfly/patternfly-react/issues/4529)) ([fbe4ba8](https://github.com/patternfly/patternfly-react/commit/fbe4ba81861f012eccd7a88a4aed039f4f98b694))
- **topology:** Do not update nodes on layout when fixed ([#4978](https://github.com/patternfly/patternfly-react/issues/4978)) ([932fa1f](https://github.com/patternfly/patternfly-react/commit/932fa1fd4cce6fcc1bbbc0a55bbde674701f1803))
- **Topology:** Fix for multiple popovers occurring for pipeline badges ([#8110](https://github.com/patternfly/patternfly-react/issues/8110)) ([85f5899](https://github.com/patternfly/patternfly-react/commit/85f589931b2b3b9d0e5ae4a9e4d86bdb7aa0e594))
- **topology:** Prevent context sub menus from overflowing viewport ([#5271](https://github.com/patternfly/patternfly-react/issues/5271)) ([12cd470](https://github.com/patternfly/patternfly-react/commit/12cd470f138df8b0eaa8f768bef8a86d448a6590))
- **Truncate, Progress:** enable truncated tooltip via keyboard ([#11731](https://github.com/patternfly/patternfly-react/issues/11731)) ([dffaa90](https://github.com/patternfly/patternfly-react/commit/dffaa90933fe7552dfece930ff71d190664c409a))
- try and get react-integration bumping correctly [skip-a11y] ([#9554](https://github.com/patternfly/patternfly-react/issues/9554)) ([7124af5](https://github.com/patternfly/patternfly-react/commit/7124af580994aeab735de23966c6be0fb789683e))
- turn on dry run to test removing --no-private [skip-a11y] ([#9549](https://github.com/patternfly/patternfly-react/issues/9549)) ([bf35bf9](https://github.com/patternfly/patternfly-react/commit/bf35bf94244e4f02d1186fb54cc52645f2040a73))
- **UndoIcon:** Replace UndoIcon with RhUiUndoIcon ([#12515](https://github.com/patternfly/patternfly-react/issues/12515)) ([77ad416](https://github.com/patternfly/patternfly-react/commit/77ad416134772c099e9c1feafe5cf67ba3462eb0))
- Updated demo app version. ([0501bfb](https://github.com/patternfly/patternfly-react/commit/0501bfb8273e50b16c131adbc7b969cd75c2b646))
- **UserIcon:** Replace UserIcon with RhUiProfileFillIcon ([#12452](https://github.com/patternfly/patternfly-react/issues/12452)) ([a1404e3](https://github.com/patternfly/patternfly-react/commit/a1404e3365f2c0bef9dc11863bb69bd49d497a33))
- **UsersIcon:** Replace with brand icon ([#12450](https://github.com/patternfly/patternfly-react/issues/12450)) ([34193c6](https://github.com/patternfly/patternfly-react/commit/34193c67b1a2435d0165c33336d01c2e9b20a2dc))
- **versions:** bump core and fix demo-app versions ([#9248](https://github.com/patternfly/patternfly-react/issues/9248)) ([d19f9d2](https://github.com/patternfly/patternfly-react/commit/d19f9d21c39574784074ee1def886a6da21b2274))
- **VerticalTabs:** expose href to allow links ([#6072](https://github.com/patternfly/patternfly-react/issues/6072)) ([2b66bcd](https://github.com/patternfly/patternfly-react/commit/2b66bcd07d1675649c045d6cd06a99377c77fcca))
- **WarningTriangleIcon:** Replace WarningTriangleIcon with RhUiWarningIcon ([#12508](https://github.com/patternfly/patternfly-react/issues/12508)) ([f45904d](https://github.com/patternfly/patternfly-react/commit/f45904df01d6e8af1d9826de6c78f76117b0f40e))
- **wiz:** add missing label for wiz-in-modal ([#4280](https://github.com/patternfly/patternfly-react/issues/4280)) ([71a45d1](https://github.com/patternfly/patternfly-react/commit/71a45d122b20afddb9f2c99105f3603cbfc96bac))
- **Wizard:** set a custom width to the wizard modal ([#5256](https://github.com/patternfly/patternfly-react/issues/5256)) ([22dd8f6](https://github.com/patternfly/patternfly-react/commit/22dd8f6518b37e45fec646b64bb9d58f188a7707))
- **Wizard:** update close button and title structures ([#9041](https://github.com/patternfly/patternfly-react/issues/9041)) ([2ac733b](https://github.com/patternfly/patternfly-react/commit/2ac733bfcf026bb54287f9e6509d00c988d89a92))

- EmptyState component cleanup to match core implementation (#8737) ([40dd9ad](https://github.com/patternfly/patternfly-react/commit/40dd9ad4b2ab32887c2f72a10eb78f2c4ee5ac4b)), closes [#8737](https://github.com/patternfly/patternfly-react/issues/8737) [#8555](https://github.com/patternfly/patternfly-react/issues/8555)

### Features

- **Accordion:** Added isPlain and isNoPlainOnGlass prop to Accordion ([#12288](https://github.com/patternfly/patternfly-react/issues/12288)) ([55ffb51](https://github.com/patternfly/patternfly-react/commit/55ffb51760542045f9b7dac0af584cee4a3eff4e))
- **Accordion:** Added support for bordered, display large … ([#6085](https://github.com/patternfly/patternfly-react/issues/6085)) ([da59273](https://github.com/patternfly/patternfly-react/commit/da592733aaf8a147ae26ac4f319bda2f4010a65c))
- **Accordion:** pulled in Penta updates ([#9876](https://github.com/patternfly/patternfly-react/issues/9876)) ([e7ebfc0](https://github.com/patternfly/patternfly-react/commit/e7ebfc06223be49c2fdb56da4f9268b13c9bc9f5))
- **Alert:** Add alert timeout functionality ([#4510](https://github.com/patternfly/patternfly-react/issues/4510)) ([3e43126](https://github.com/patternfly/patternfly-react/commit/3e43126c5d7ec9205b4b746c55198f83a447bd9b))
- **alert:** add support to custom icon ([#5140](https://github.com/patternfly/patternfly-react/issues/5140)) ([3751cb5](https://github.com/patternfly/patternfly-react/commit/3751cb59d9bfd278ca811551ac8e16a2ebb2e243))
- **Alert:** added animations ([#11495](https://github.com/patternfly/patternfly-react/issues/11495)) ([74dd258](https://github.com/patternfly/patternfly-react/commit/74dd258abb9f329dc2fc3fcaaa6fc4de460fc088))
- **alert:** support callback on alert timeout ([#5014](https://github.com/patternfly/patternfly-react/issues/5014)) ([909c3a7](https://github.com/patternfly/patternfly-react/commit/909c3a75d8c798b90be9bc791609aaec66825e80))
- **ApplicationLauncher:** added event param to callbacks ([#8756](https://github.com/patternfly/patternfly-react/issues/8756)) ([125a002](https://github.com/patternfly/patternfly-react/commit/125a002ebd24be4550ae537d5f571b73ea0e3027))
- **avatar:** add border prop ([#6040](https://github.com/patternfly/patternfly-react/issues/6040)) ([65d7cdd](https://github.com/patternfly/patternfly-react/commit/65d7cddfb498562dde586e24df50f1030532eb4e))
- **BackgroundImage:** update background image for penta ([#9964](https://github.com/patternfly/patternfly-react/issues/9964)) ([a2a0630](https://github.com/patternfly/patternfly-react/commit/a2a06301257d79bb6df178eeb5304c3c627fa429))
- **Banner,Label:** rename cyan/gold to teal/yellow ([#10661](https://github.com/patternfly/patternfly-react/issues/10661)) ([3e76f17](https://github.com/patternfly/patternfly-react/commit/3e76f173f62b0f5e9aef9e43c597ae5b7fffee92))
- **Banner:** add banner component ([#4408](https://github.com/patternfly/patternfly-react/issues/4408)) ([d783fc7](https://github.com/patternfly/patternfly-react/commit/d783fc708a6ed8e725af858b913ff9fbcfb742c6))
- **breadcrumb:** add render prop to breadcrumb item ([#5189](https://github.com/patternfly/patternfly-react/issues/5189)) ([492a950](https://github.com/patternfly/patternfly-react/commit/492a950c1fa6448e96a7beaa31dd3084d9a306e3))
- **Button/MenuToggle:** added support for hamburger/settings animations ([#11861](https://github.com/patternfly/patternfly-react/issues/11861)) ([cf3d84e](https://github.com/patternfly/patternfly-react/commit/cf3d84ebf8f3046f038af6f6557946faadfe35b0))
- **Button:** add cta/large modifier ([#4596](https://github.com/patternfly/patternfly-react/issues/4596)) ([bc97c3c](https://github.com/patternfly/patternfly-react/commit/bc97c3cc059fc36f4ab201b1a77ee600c9983ba9))
- **Button:** add danger modifier to link/secondary buttons ([#5808](https://github.com/patternfly/patternfly-react/issues/5808)) ([0fc56c4](https://github.com/patternfly/patternfly-react/commit/0fc56c4ef30b260a8c4d4268e8c2058826d5b9b8))
- **button:** add isAriaDisabled ([#3801](https://github.com/patternfly/patternfly-react/issues/3801)) ([a6ef254](https://github.com/patternfly/patternfly-react/commit/a6ef2545833f3cf6b98ad0736719975cc0a9c6dd))
- **button:** add support to small variation ([#4433](https://github.com/patternfly/patternfly-react/issues/4433)) ([af9e292](https://github.com/patternfly/patternfly-react/commit/af9e292cd7ebd2752dfe7e220c28cf230bddb6d5))
- **Button:** add text wrapper, update icon usage ([#10663](https://github.com/patternfly/patternfly-react/issues/10663)) ([eca5878](https://github.com/patternfly/patternfly-react/commit/eca58789d1f07753657372a46a20c147f984b998))
- **button:** allow router link component ([#6061](https://github.com/patternfly/patternfly-react/issues/6061)) ([762c299](https://github.com/patternfly/patternfly-react/commit/762c299315b30af32096addce88b983319a5b834))
- **button:** combine isSmall and isLarge into customSize ([#8144](https://github.com/patternfly/patternfly-react/issues/8144)) ([3c2d86f](https://github.com/patternfly/patternfly-react/commit/3c2d86fcbe8d22b7e7cc61ccc4010f3fb69c42f8))
- **Card:** add ability to customize card title and support heading element ([#4761](https://github.com/patternfly/patternfly-react/issues/4761)) ([215c566](https://github.com/patternfly/patternfly-react/commit/215c566057172a73772a514b3413dbdee0542263))
- **Card:** Add disabled card and clean up props ([#6659](https://github.com/patternfly/patternfly-react/issues/6659)) ([86f225a](https://github.com/patternfly/patternfly-react/commit/86f225ab2e02d617e2d380c4a7f7593037c50e84))
- **Card:** add expandable card, move tests ([#5093](https://github.com/patternfly/patternfly-react/issues/5093)) ([0dd992c](https://github.com/patternfly/patternfly-react/commit/0dd992ca8d3aa998766bc750e6972ab5dab49910))
- **Card:** add full-height and plain variation ([#5632](https://github.com/patternfly/patternfly-react/issues/5632)) ([f9344cd](https://github.com/patternfly/patternfly-react/commit/f9344cdd0349163211c3aeb041b5f862f0b8f29e)), closes [#5584](https://github.com/patternfly/patternfly-react/issues/5584) [#5582](https://github.com/patternfly/patternfly-react/issues/5582)
- **Card:** add isToggleRightAligned prop ([#5723](https://github.com/patternfly/patternfly-react/issues/5723)) ([336c447](https://github.com/patternfly/patternfly-react/commit/336c447dd95f9759dd791032f52669ea2e97881f))
- **card:** add pf-m-display-lg and pf-m-rounded ([#5389](https://github.com/patternfly/patternfly-react/issues/5389)) ([2adb463](https://github.com/patternfly/patternfly-react/commit/2adb4630ef23035f90f3ea8cdb79e0c19c57b2d0))
- **Card:** Added support to remove offset from actions ([#5887](https://github.com/patternfly/patternfly-react/issues/5887)) ([6267210](https://github.com/patternfly/patternfly-react/commit/62672106007d93cf5061882b7325d9e73fceaed5))
- **Card:** Consume penta tokens ([#10056](https://github.com/patternfly/patternfly-react/issues/10056)) ([0ccdef5](https://github.com/patternfly/patternfly-react/commit/0ccdef528c694e628606b0d6a18ad71dab30297c))
- **Card:** Refactor card header ([#8759](https://github.com/patternfly/patternfly-react/issues/8759)) ([387da19](https://github.com/patternfly/patternfly-react/commit/387da198847fb06c7583a8e2fc6eb808c2a02ba2))
- **Checkbox, Radio:** Added support for custom body content ([#5559](https://github.com/patternfly/patternfly-react/issues/5559)) ([49e7e1f](https://github.com/patternfly/patternfly-react/commit/49e7e1f5918f22378a5cfbd036fb80dc42b6e1ad))
- **Checkbox:** changed order of onChange params ([#8750](https://github.com/patternfly/patternfly-react/issues/8750)) ([0a87f55](https://github.com/patternfly/patternfly-react/commit/0a87f554e4cf3abb99de8f2ccd53737f0cf489b1))
- **ChipGroup:** Add event handler prop for overflow-chip click ([#5272](https://github.com/patternfly/patternfly-react/issues/5272)) ([c4af7f1](https://github.com/patternfly/patternfly-react/commit/c4af7f17be30dbf86f4a9caf41acc29001b395db))
- **ChipGroup:** Added a tooltip to the Chipgroup label ([#3826](https://github.com/patternfly/patternfly-react/issues/3826)) ([d25c80b](https://github.com/patternfly/patternfly-react/commit/d25c80b68795c44d46eaf261b335c5f088d71e96)), closes [#3490](https://github.com/patternfly/patternfly-react/issues/3490)
- **Chip:** use Label internally, deprecate Chip ([#10049](https://github.com/patternfly/patternfly-react/issues/10049)) ([5cdb725](https://github.com/patternfly/patternfly-react/commit/5cdb72536f8dd291e42be09bc6454ac591adc606))
- **ClipboardCopy:** add inline variant ([#5629](https://github.com/patternfly/patternfly-react/issues/5629)) ([27a7f29](https://github.com/patternfly/patternfly-react/commit/27a7f29acf83371520de1f7f9ba56586ecbb8f10))
- **CodeBlock:** add component ([#5656](https://github.com/patternfly/patternfly-react/issues/5656)) ([8e85b41](https://github.com/patternfly/patternfly-react/commit/8e85b41dff4b68924796d38dc882902d354011c5))
- **CodeEditor,Divider:** consume penta & update core version ([#10081](https://github.com/patternfly/patternfly-react/issues/10081)) ([addda04](https://github.com/patternfly/patternfly-react/commit/addda044d7f6d91f3511c7a769b2707140df86d4))
- **CodeEditor:** add isHighContrastTheme ([#12384](https://github.com/patternfly/patternfly-react/issues/12384)) ([bee95e6](https://github.com/patternfly/patternfly-react/commit/bee95e6397fcc7ee326ac8d29d59f65365db02bf))
- **CodeEditor:** Make 'code' prop controlled ([#5465](https://github.com/patternfly/patternfly-react/issues/5465)) ([613dec6](https://github.com/patternfly/patternfly-react/commit/613dec6d46ed0c08bc9e445a0a16bf6b6bb56bd1))
- **ContextSelector:** add footer to selector ([#4976](https://github.com/patternfly/patternfly-react/issues/4976)) ([e2738d9](https://github.com/patternfly/patternfly-react/commit/e2738d9aa298787f238cebdaa64ac52f1c09b5fa))
- **ContextSelector:** Add plain variant ([#6141](https://github.com/patternfly/patternfly-react/issues/6141)) ([b4ab0e0](https://github.com/patternfly/patternfly-react/commit/b4ab0e0094917739ff7c02797ce305498dc8fc9f))
- **Data list:** Add isNoPlainOnGlass prop to add pf-m-no-plain modfier to the data list ([#12292](https://github.com/patternfly/patternfly-react/issues/12292)) ([f71da53](https://github.com/patternfly/patternfly-react/commit/f71da53cd09a53442ff3fffc43790b08a7465506))
- **DataList:** add compact data list ([#3807](https://github.com/patternfly/patternfly-react/issues/3807)) ([18d9b7b](https://github.com/patternfly/patternfly-react/commit/18d9b7b756e985304864e52b09f5f1d1789791f8))
- **DataList:** add draggable feature for basic list ([#4852](https://github.com/patternfly/patternfly-react/issues/4852)) ([532fc5a](https://github.com/patternfly/patternfly-react/commit/532fc5add962b665a90362f45723252ccbc95e1d))
- **DataList:** Add support for action containers in DataList ([#4488](https://github.com/patternfly/patternfly-react/issues/4488)) ([386bedd](https://github.com/patternfly/patternfly-react/commit/386bedde711635627aecbf050273306958a746a2))
- **DataList:** add support for text modifiers ([#4846](https://github.com/patternfly/patternfly-react/issues/4846)) ([4f4271b](https://github.com/patternfly/patternfly-react/commit/4f4271b2c20a869504339173c28300ed65cd7330)), closes [#4822](https://github.com/patternfly/patternfly-react/issues/4822)
- **DataList:** added event param to callback ([#8723](https://github.com/patternfly/patternfly-react/issues/8723)) ([f05eef9](https://github.com/patternfly/patternfly-react/commit/f05eef998116962211d81ba4586090dacbc0ef8f))
- **DescriptionList:** add compact and fluid modifiers ([#6260](https://github.com/patternfly/patternfly-react/issues/6260)) ([8b7cd70](https://github.com/patternfly/patternfly-react/commit/8b7cd704a4aae20ebf5953d4de4cc4f894052851))
- **DescriptionList:** add new DescriptionList component ([#4586](https://github.com/patternfly/patternfly-react/issues/4586)) ([776aba7](https://github.com/patternfly/patternfly-react/commit/776aba7eef7b43585a841daf1e32d2e60693e34f))
- **DescriptionList:** add responsive layout breakpoint property ([#5885](https://github.com/patternfly/patternfly-react/issues/5885)) ([0c51572](https://github.com/patternfly/patternfly-react/commit/0c5157247b7e9a19e0328b9c61e957071cfecb37))
- **descriptionList:** add suport to auto fit ([#5113](https://github.com/patternfly/patternfly-react/issues/5113)) ([1434f9e](https://github.com/patternfly/patternfly-react/commit/1434f9ee930422532bc70c3bb5fb3dfc4d17eb1c))
- **DescriptionList:** Added support for helpr text ([#5837](https://github.com/patternfly/patternfly-react/issues/5837)) ([80fc558](https://github.com/patternfly/patternfly-react/commit/80fc5583bc759c4fac0d87cd985d9f3baa3f7222))
- **Divider:** Add support for insets to the Divider ([#4410](https://github.com/patternfly/patternfly-react/issues/4410)) ([32916b8](https://github.com/patternfly/patternfly-react/commit/32916b89fcf631eb498ae0b64faffec756242127))
- **docked nav:** add support for docked nav layout ([#12175](https://github.com/patternfly/patternfly-react/issues/12175)) ([5519389](https://github.com/patternfly/patternfly-react/commit/55193896b899aa1e2b8dfbbddd644507988ee31f))
- **Drawer:** add bottom panel variation ([#4771](https://github.com/patternfly/patternfly-react/issues/4771)) ([93f8fe4](https://github.com/patternfly/patternfly-react/commit/93f8fe4ec55323212fd1e2dc07986a9f10815bf3))
- **Drawer:** add gray and white panel background variants ([#5479](https://github.com/patternfly/patternfly-react/issues/5479)) ([2cddcb9](https://github.com/patternfly/patternfly-react/commit/2cddcb9d861c130d44c73f42eb93610d5dd5cfb2))
- **Drawer:** add splitter feature ([#5193](https://github.com/patternfly/patternfly-react/issues/5193)) ([7f44e90](https://github.com/patternfly/patternfly-react/commit/7f44e901d225068597c1b0efb6098f7c35a01476))
- **Drawer:** added focustrap functionality ([#9469](https://github.com/patternfly/patternfly-react/issues/9469)) ([41fedc5](https://github.com/patternfly/patternfly-react/commit/41fedc5f707127e4316866ca8b69b4b1a2abfbb7))
- **Drawer:** Added support for glass ([#12305](https://github.com/patternfly/patternfly-react/issues/12305)) ([bce395d](https://github.com/patternfly/patternfly-react/commit/bce395dc88c4a462b5950fb939d4e14327c7b559))
- **Drawer:** added width props, updated demo & integration test ([#3979](https://github.com/patternfly/patternfly-react/issues/3979)) ([b1c7da3](https://github.com/patternfly/patternfly-react/commit/b1c7da3eea53330837952d79f664f0de3b62ec3a))
- **Drawer:** consumed Penta updates ([#10036](https://github.com/patternfly/patternfly-react/issues/10036)) ([4dba57a](https://github.com/patternfly/patternfly-react/commit/4dba57a2b2a0c9e19747ba80dbe8e593bb2a7721))
- **drawer:** use the breakpoint mods prop instead of width props ([#4270](https://github.com/patternfly/patternfly-react/issues/4270)) ([4cac8d0](https://github.com/patternfly/patternfly-react/commit/4cac8d01ea771a7e8b082ca33242fcf590b861f8))
- **Dropdown:** add alignment breakpoints, fix ref console warning ([#5734](https://github.com/patternfly/patternfly-react/issues/5734)) ([7bc72c1](https://github.com/patternfly/patternfly-react/commit/7bc72c1627a5d6156eebcc2c573a555f64219059))
- **Dropdown:** add description to DropdownItem ([#4468](https://github.com/patternfly/patternfly-react/issues/4468)) ([0508fe6](https://github.com/patternfly/patternfly-react/commit/0508fe69999dfc25093102923dfef46275d35709))
- **Dropdown:** Allow for tooltips on aria-disabled items ([#6038](https://github.com/patternfly/patternfly-react/issues/6038)) ([74ec097](https://github.com/patternfly/patternfly-react/commit/74ec09747379ccfaa3b0ebecaadff910c7b590e2))
- **Dropdown:** allowed preventing autofocus v6 ([#10708](https://github.com/patternfly/patternfly-react/issues/10708)) ([9fe5e5a](https://github.com/patternfly/patternfly-react/commit/9fe5e5aa4fc3f1c49a5aae61bf4480f80b197eb3))
- **Dropdown:** deprecated old and promoted Next ([#8835](https://github.com/patternfly/patternfly-react/issues/8835)) ([d43cf24](https://github.com/patternfly/patternfly-react/commit/d43cf2427dc9ea1ddb2381284f05276aa2c7cdb7))
- **DualListSelector, SearchInput:** use SearchInput in DLS, add type prop to SearchInput ([#8040](https://github.com/patternfly/patternfly-react/issues/8040)) ([24474d8](https://github.com/patternfly/patternfly-react/commit/24474d83bc7e234027873a3cd43c824bc1576adb))
- **DualListSelector:** add new component ([#5120](https://github.com/patternfly/patternfly-react/issues/5120)) ([0ed1c5a](https://github.com/patternfly/patternfly-react/commit/0ed1c5a0d530cbbba7f026660baec51f6fd03559))
- **DualListSelector:** add support for trees and checkboxes ([#5207](https://github.com/patternfly/patternfly-react/issues/5207)) ([1533ad8](https://github.com/patternfly/patternfly-react/commit/1533ad8cbf99b132e8383c01e94a121023a4c9d7))
- **DualListSelector:** add tooltips to control buttons ([#5914](https://github.com/patternfly/patternfly-react/issues/5914)) ([1292479](https://github.com/patternfly/patternfly-react/commit/1292479e121f4eeaadb2f6954b24b0e68551dcd3))
- **DualListSelector:** introduce composable example and drag/drop demo ([#6369](https://github.com/patternfly/patternfly-react/issues/6369)) ([7cdda0f](https://github.com/patternfly/patternfly-react/commit/7cdda0fdd7f794e64bb8a8adebb48dfede5ebff9))
- **DualListSelector:** new demos and integration tests ([#10829](https://github.com/patternfly/patternfly-react/issues/10829)) ([09d72ea](https://github.com/patternfly/patternfly-react/commit/09d72eaf058fe8e5be2884f8075f443b5576cb4d))
- **DualListSelector:** promoted Next version ([#10359](https://github.com/patternfly/patternfly-react/issues/10359)) ([b395cc4](https://github.com/patternfly/patternfly-react/commit/b395cc44586a20a9f124e1d56d2c8021a64602db))
- **Empty state:** Added extra small variation ([#5012](https://github.com/patternfly/patternfly-react/issues/5012)) ([5ea4ab7](https://github.com/patternfly/patternfly-react/commit/5ea4ab758158697572bc9dc0dfd49528a25e5455))
- **EmptyState:** update EmptyState with updates for penta ([#9947](https://github.com/patternfly/patternfly-react/issues/9947)) ([07cbb82](https://github.com/patternfly/patternfly-react/commit/07cbb8270627f9ade299b90eaf5dd4fd5fa6fe95))
- **expandable-section:** added indented variation ([#6763](https://github.com/patternfly/patternfly-react/issues/6763)) ([703b922](https://github.com/patternfly/patternfly-react/commit/703b9224e43bedd5b37ec41d8f26f2939836d610))
- **ExpandableSection:** add detached variant, update tests ([#5643](https://github.com/patternfly/patternfly-react/issues/5643)) ([28bea0a](https://github.com/patternfly/patternfly-react/commit/28bea0afd738e5f0b9b656b0dac3920e2f1c5c9e))
- **ExpandableSection:** Add event to onToggle ([#8991](https://github.com/patternfly/patternfly-react/issues/8991)) ([29c781c](https://github.com/patternfly/patternfly-react/commit/29c781c5a4105d565ba316197e20c7bf1588eb04))
- **ExpandableSection:** Added props to support disclosure variation ([#6078](https://github.com/patternfly/patternfly-react/issues/6078)) ([3e9aa7e](https://github.com/patternfly/patternfly-react/commit/3e9aa7eb985b560c8c899c00f1ced4b0221aded4))
- **FileUpload:** added event params to callbacks ([#8960](https://github.com/patternfly/patternfly-react/issues/8960)) ([10f0316](https://github.com/patternfly/patternfly-react/commit/10f0316f2ceca984a2277d568c62d39aa5ff9833))
- **Form): add form group label info & docs(Form:** add password strength demo ([#6053](https://github.com/patternfly/patternfly-react/issues/6053)) ([0f11c0a](https://github.com/patternfly/patternfly-react/commit/0f11c0ae719b0eba2bc4507b1e950bf18bd2667f))
- **Form:** Add stacked variant and section title ([#5621](https://github.com/patternfly/patternfly-react/issues/5621)) ([d69f902](https://github.com/patternfly/patternfly-react/commit/d69f90236fe967b2ac2a0ca38cc3469318705385))
- **Form:** Added support for field groups ([#5569](https://github.com/patternfly/patternfly-react/issues/5569)) ([4110d58](https://github.com/patternfly/patternfly-react/commit/4110d587d17c3bf3dc51f5bfc447016c6aee2b46))
- **FormControls:** updated logic for rendering icons ([#9132](https://github.com/patternfly/patternfly-react/issues/9132)) ([9f4863f](https://github.com/patternfly/patternfly-react/commit/9f4863f3251e365142c44aace2c1aeba57ba6b3a))
- **FormGroup, FormSelect, TextInput, TextArea:** Add warning state ([#4554](https://github.com/patternfly/patternfly-react/issues/4554)) ([4e7f69a](https://github.com/patternfly/patternfly-react/commit/4e7f69a35abd247db99bd946a2c9bc931c335564))
- **FormGroupLabelHelp:** update markup to match core ([#10248](https://github.com/patternfly/patternfly-react/issues/10248)) ([113ff75](https://github.com/patternfly/patternfly-react/commit/113ff758d1165bc843758f7cc5b6042d7eb9dc4e))
- **FormGroup:** use HelperText ([#8810](https://github.com/patternfly/patternfly-react/issues/8810)) ([08f5e8c](https://github.com/patternfly/patternfly-react/commit/08f5e8cd6366228f583cabcc628cad1ed704477a))
- **Form:** remove semicolons from docs ([#4296](https://github.com/patternfly/patternfly-react/issues/4296)) ([c666474](https://github.com/patternfly/patternfly-react/commit/c666474bad1741fbd30c3ceccaa3eafc5187bd72))
- **FormSection:** Add FormSection component ([#4971](https://github.com/patternfly/patternfly-react/issues/4971)) ([5e9106b](https://github.com/patternfly/patternfly-react/commit/5e9106b37f348038f2c7d37571e17427c610676e)), closes [#4960](https://github.com/patternfly/patternfly-react/issues/4960)
- **FormSelect:** added support for placeholder styled option ([#5428](https://github.com/patternfly/patternfly-react/issues/5428)) ([22217e9](https://github.com/patternfly/patternfly-react/commit/22217e9982f68dee541c3c9eb1138b4e2f369689))
- **Gallery:** add min/max widths at breakpoints ([#5735](https://github.com/patternfly/patternfly-react/issues/5735)) ([5b4e08d](https://github.com/patternfly/patternfly-react/commit/5b4e08db8deb46711780854c1eafc19b33613328))
- **HelperText:** add helper text component ([#5903](https://github.com/patternfly/patternfly-react/issues/5903)) ([188fa7f](https://github.com/patternfly/patternfly-react/commit/188fa7fe4c1d460357a96a35133944d4c5db93b3))
- **Hint:** add hint components ([#4595](https://github.com/patternfly/patternfly-react/issues/4595)) ([7adfa83](https://github.com/patternfly/patternfly-react/commit/7adfa83e970f5b3ef49a28358405650367ecc4c9))
- **icons:** update close icons to use the rh micron ([#12283](https://github.com/patternfly/patternfly-react/issues/12283)) ([fc82a9c](https://github.com/patternfly/patternfly-react/commit/fc82a9c646739a11732e7934d860f3913932168f))
- **icons:** updated caret icons to RH microns ([#12298](https://github.com/patternfly/patternfly-react/issues/12298)) ([688a5af](https://github.com/patternfly/patternfly-react/commit/688a5afb40c28f0b293301d1e68f0359b7a0604d))
- **Input group:** Simplified API ([#9176](https://github.com/patternfly/patternfly-react/issues/9176)) ([e18a351](https://github.com/patternfly/patternfly-react/commit/e18a351fac44beaf6554e76e5be9d204d6db19ce))
- **InputGroup:** add plain input group text variant ([#5478](https://github.com/patternfly/patternfly-react/issues/5478)) ([6f6d772](https://github.com/patternfly/patternfly-react/commit/6f6d7722604445d41b5361e99a14474e578851e9))
- **Label:** add editable label ([#6065](https://github.com/patternfly/patternfly-react/issues/6065)) ([0ce5149](https://github.com/patternfly/patternfly-react/commit/0ce51496c467bc0eff0a987a7013bca60d4970bd))
- **Label:** add no overflow prop ([#4680](https://github.com/patternfly/patternfly-react/issues/4680)) ([e9dbde9](https://github.com/patternfly/patternfly-react/commit/e9dbde9a9325d37a7cc084527d01c56f667fab12))
- **Label:** add status, update examples ([#10073](https://github.com/patternfly/patternfly-react/issues/10073)) ([a2c8c7d](https://github.com/patternfly/patternfly-react/commit/a2c8c7d53d1787d438540be191a8c9f3b185819c))
- **label:** added compact label, updated horizontal grid card demo ([#6448](https://github.com/patternfly/patternfly-react/issues/6448)) ([89e0431](https://github.com/patternfly/patternfly-react/commit/89e04317924282140606d45f2292aa3f658b4b6c))
- **Label:** Added support for React router ([#4934](https://github.com/patternfly/patternfly-react/issues/4934)) ([7f3a9ad](https://github.com/patternfly/patternfly-react/commit/7f3a9add2650cef8c8884ffdbaeb6663187775b0))
- **Label:** truncate by default ([#8771](https://github.com/patternfly/patternfly-react/issues/8771)) ([df52d2d](https://github.com/patternfly/patternfly-react/commit/df52d2d3c8eaee1dab13c25c6c021dafda84f76d))
- **list:** added icons, plain, bordered ([#5796](https://github.com/patternfly/patternfly-react/issues/5796)) ([3f2cd16](https://github.com/patternfly/patternfly-react/commit/3f2cd16ffd195d67e3862c9a250a6e61fbfe4ce1))
- **LoginPage:** enable show or hide password ([#5481](https://github.com/patternfly/patternfly-react/issues/5481)) ([72317be](https://github.com/patternfly/patternfly-react/commit/72317be761ce61fd3cdd4d02536e5d4ea43e3604))
- **master:** merge v4 ([#4255](https://github.com/patternfly/patternfly-react/issues/4255)) ([567c0b8](https://github.com/patternfly/patternfly-react/commit/567c0b88b10d2cd629ce380745a24dacdf9dd3d1)), closes [#3868](https://github.com/patternfly/patternfly-react/issues/3868) [#3915](https://github.com/patternfly/patternfly-react/issues/3915) [#3921](https://github.com/patternfly/patternfly-react/issues/3921) [#3872](https://github.com/patternfly/patternfly-react/issues/3872) [#3821](https://github.com/patternfly/patternfly-react/issues/3821) [#3807](https://github.com/patternfly/patternfly-react/issues/3807) [#3879](https://github.com/patternfly/patternfly-react/issues/3879) [#3871](https://github.com/patternfly/patternfly-react/issues/3871) [#3881](https://github.com/patternfly/patternfly-react/issues/3881) [#3826](https://github.com/patternfly/patternfly-react/issues/3826) [#3490](https://github.com/patternfly/patternfly-react/issues/3490) [#3882](https://github.com/patternfly/patternfly-react/issues/3882) [#3843](https://github.com/patternfly/patternfly-react/issues/3843) [#3884](https://github.com/patternfly/patternfly-react/issues/3884) [#3609](https://github.com/patternfly/patternfly-react/issues/3609) [#3880](https://github.com/patternfly/patternfly-react/issues/3880) [#3865](https://github.com/patternfly/patternfly-react/issues/3865) [#3894](https://github.com/patternfly/patternfly-react/issues/3894) [#3897](https://github.com/patternfly/patternfly-react/issues/3897) [#3892](https://github.com/patternfly/patternfly-react/issues/3892) [#3891](https://github.com/patternfly/patternfly-react/issues/3891) [#3908](https://github.com/patternfly/patternfly-react/issues/3908) [#3910](https://github.com/patternfly/patternfly-react/issues/3910) [#3861](https://github.com/patternfly/patternfly-react/issues/3861) [#3877](https://github.com/patternfly/patternfly-react/issues/3877) [#3916](https://github.com/patternfly/patternfly-react/issues/3916) [#3886](https://github.com/patternfly/patternfly-react/issues/3886) [#3872](https://github.com/patternfly/patternfly-react/issues/3872) [#3821](https://github.com/patternfly/patternfly-react/issues/3821) [#3807](https://github.com/patternfly/patternfly-react/issues/3807) [#3879](https://github.com/patternfly/patternfly-react/issues/3879) [#3871](https://github.com/patternfly/patternfly-react/issues/3871) [#3881](https://github.com/patternfly/patternfly-react/issues/3881) [#3826](https://github.com/patternfly/patternfly-react/issues/3826) [#3490](https://github.com/patternfly/patternfly-react/issues/3490) [#3882](https://github.com/patternfly/patternfly-react/issues/3882) [#3927](https://github.com/patternfly/patternfly-react/issues/3927) [#3933](https://github.com/patternfly/patternfly-react/issues/3933) [#3221](https://github.com/patternfly/patternfly-react/issues/3221) [#3873](https://github.com/patternfly/patternfly-react/issues/3873) [#3928](https://github.com/patternfly/patternfly-react/issues/3928) [#3929](https://github.com/patternfly/patternfly-react/issues/3929) [#2582](https://github.com/patternfly/patternfly-react/issues/2582) [#3296](https://github.com/patternfly/patternfly-react/issues/3296) [#3924](https://github.com/patternfly/patternfly-react/issues/3924) [#1529](https://github.com/patternfly/patternfly-react/issues/1529) [#3903](https://github.com/patternfly/patternfly-react/issues/3903) [#3904](https://github.com/patternfly/patternfly-react/issues/3904) [#3974](https://github.com/patternfly/patternfly-react/issues/3974) [#3970](https://github.com/patternfly/patternfly-react/issues/3970) [#3920](https://github.com/patternfly/patternfly-react/issues/3920) [#3945](https://github.com/patternfly/patternfly-react/issues/3945) [#3978](https://github.com/patternfly/patternfly-react/issues/3978) [#3962](https://github.com/patternfly/patternfly-react/issues/3962) [#3975](https://github.com/patternfly/patternfly-react/issues/3975) [#3906](https://github.com/patternfly/patternfly-react/issues/3906) [#3870](https://github.com/patternfly/patternfly-react/issues/3870) [#3958](https://github.com/patternfly/patternfly-react/issues/3958) [#3922](https://github.com/patternfly/patternfly-react/issues/3922) [#3985](https://github.com/patternfly/patternfly-react/issues/3985) [#3991](https://github.com/patternfly/patternfly-react/issues/3991) [#3872](https://github.com/patternfly/patternfly-react/issues/3872) [#3821](https://github.com/patternfly/patternfly-react/issues/3821) [#3807](https://github.com/patternfly/patternfly-react/issues/3807) [#3879](https://github.com/patternfly/patternfly-react/issues/3879) [#3871](https://github.com/patternfly/patternfly-react/issues/3871) [#3881](https://github.com/patternfly/patternfly-react/issues/3881) [#3826](https://github.com/patternfly/patternfly-react/issues/3826) [#3490](https://github.com/patternfly/patternfly-react/issues/3490) [#3882](https://github.com/patternfly/patternfly-react/issues/3882) [#3843](https://github.com/patternfly/patternfly-react/issues/3843) [#3884](https://github.com/patternfly/patternfly-react/issues/3884) [#3609](https://github.com/patternfly/patternfly-react/issues/3609) [#3880](https://github.com/patternfly/patternfly-react/issues/3880) [#3865](https://github.com/patternfly/patternfly-react/issues/3865) [#3894](https://github.com/patternfly/patternfly-react/issues/3894) [#3897](https://github.com/patternfly/patternfly-react/issues/3897) [#3892](https://github.com/patternfly/patternfly-react/issues/3892) [#3891](https://github.com/patternfly/patternfly-react/issues/3891) [#3908](https://github.com/patternfly/patternfly-react/issues/3908) [#3910](https://github.com/patternfly/patternfly-react/issues/3910) [#3861](https://github.com/patternfly/patternfly-react/issues/3861) [#3877](https://github.com/patternfly/patternfly-react/issues/3877) [#3916](https://github.com/patternfly/patternfly-react/issues/3916) [#3844](https://github.com/patternfly/patternfly-react/issues/3844) [#3919](https://github.com/patternfly/patternfly-react/issues/3919) [#3923](https://github.com/patternfly/patternfly-react/issues/3923) [#3838](https://github.com/patternfly/patternfly-react/issues/3838) [#3895](https://github.com/patternfly/patternfly-react/issues/3895) [#3896](https://github.com/patternfly/patternfly-react/issues/3896) [#3771](https://github.com/patternfly/patternfly-react/issues/3771) [#3940](https://github.com/patternfly/patternfly-react/issues/3940) [#3941](https://github.com/patternfly/patternfly-react/issues/3941) [#3441](https://github.com/patternfly/patternfly-react/issues/3441) [#3950](https://github.com/patternfly/patternfly-react/issues/3950) [#3642](https://github.com/patternfly/patternfly-react/issues/3642) [#3964](https://github.com/patternfly/patternfly-react/issues/3964) [#3968](https://github.com/patternfly/patternfly-react/issues/3968) [#3967](https://github.com/patternfly/patternfly-react/issues/3967) [#3971](https://github.com/patternfly/patternfly-react/issues/3971) [#3942](https://github.com/patternfly/patternfly-react/issues/3942) [#3898](https://github.com/patternfly/patternfly-react/issues/3898) [#3898](https://github.com/patternfly/patternfly-react/issues/3898) [#3976](https://github.com/patternfly/patternfly-react/issues/3976) [#3889](https://github.com/patternfly/patternfly-react/issues/3889) [#3641](https://github.com/patternfly/patternfly-react/issues/3641) [#3982](https://github.com/patternfly/patternfly-react/issues/3982) [#3979](https://github.com/patternfly/patternfly-react/issues/3979) [#3989](https://github.com/patternfly/patternfly-react/issues/3989) [#4017](https://github.com/patternfly/patternfly-react/issues/4017) [#4022](https://github.com/patternfly/patternfly-react/issues/4022) [#4014](https://github.com/patternfly/patternfly-react/issues/4014) [#4048](https://github.com/patternfly/patternfly-react/issues/4048) [#4050](https://github.com/patternfly/patternfly-react/issues/4050) [#4051](https://github.com/patternfly/patternfly-react/issues/4051) [#4058](https://github.com/patternfly/patternfly-react/issues/4058) [#4030](https://github.com/patternfly/patternfly-react/issues/4030) [#4031](https://github.com/patternfly/patternfly-react/issues/4031) [#3996](https://github.com/patternfly/patternfly-react/issues/3996) [#4001](https://github.com/patternfly/patternfly-react/issues/4001) [#4004](https://github.com/patternfly/patternfly-react/issues/4004) [#4066](https://github.com/patternfly/patternfly-react/issues/4066) [#4021](https://github.com/patternfly/patternfly-react/issues/4021) [#4061](https://github.com/patternfly/patternfly-react/issues/4061) [#4026](https://github.com/patternfly/patternfly-react/issues/4026) [#4069](https://github.com/patternfly/patternfly-react/issues/4069) [#4073](https://github.com/patternfly/patternfly-react/issues/4073) [#4036](https://github.com/patternfly/patternfly-react/issues/4036) [#4019](https://github.com/patternfly/patternfly-react/issues/4019) [#4081](https://github.com/patternfly/patternfly-react/issues/4081) [#4033](https://github.com/patternfly/patternfly-react/issues/4033) [#4065](https://github.com/patternfly/patternfly-react/issues/4065) [#4078](https://github.com/patternfly/patternfly-react/issues/4078) [#4032](https://github.com/patternfly/patternfly-react/issues/4032) [#4029](https://github.com/patternfly/patternfly-react/issues/4029) [#4064](https://github.com/patternfly/patternfly-react/issues/4064) [#4063](https://github.com/patternfly/patternfly-react/issues/4063) [#2593](https://github.com/patternfly/patternfly-react/issues/2593) [#4076](https://github.com/patternfly/patternfly-react/issues/4076) [#4099](https://github.com/patternfly/patternfly-react/issues/4099) [#4038](https://github.com/patternfly/patternfly-react/issues/4038) [#4116](https://github.com/patternfly/patternfly-react/issues/4116) [#3960](https://github.com/patternfly/patternfly-react/issues/3960) [#4121](https://github.com/patternfly/patternfly-react/issues/4121) [#4123](https://github.com/patternfly/patternfly-react/issues/4123) [#4025](https://github.com/patternfly/patternfly-react/issues/4025) [#4126](https://github.com/patternfly/patternfly-react/issues/4126) [#4122](https://github.com/patternfly/patternfly-react/issues/4122) [#4086](https://github.com/patternfly/patternfly-react/issues/4086) [#4127](https://github.com/patternfly/patternfly-react/issues/4127) [#4129](https://github.com/patternfly/patternfly-react/issues/4129) [#4111](https://github.com/patternfly/patternfly-react/issues/4111) [#4136](https://github.com/patternfly/patternfly-react/issues/4136) [#4138](https://github.com/patternfly/patternfly-react/issues/4138) [#4141](https://github.com/patternfly/patternfly-react/issues/4141) [#4145](https://github.com/patternfly/patternfly-react/issues/4145) [#4034](https://github.com/patternfly/patternfly-react/issues/4034) [#4144](https://github.com/patternfly/patternfly-react/issues/4144) [#4152](https://github.com/patternfly/patternfly-react/issues/4152) [#4158](https://github.com/patternfly/patternfly-react/issues/4158) [#4157](https://github.com/patternfly/patternfly-react/issues/4157) [#4156](https://github.com/patternfly/patternfly-react/issues/4156) [#4147](https://github.com/patternfly/patternfly-react/issues/4147) [#4159](https://github.com/patternfly/patternfly-react/issues/4159) [#4170](https://github.com/patternfly/patternfly-react/issues/4170) [#4142](https://github.com/patternfly/patternfly-react/issues/4142) [#4175](https://github.com/patternfly/patternfly-react/issues/4175) [#4176](https://github.com/patternfly/patternfly-react/issues/4176) [#4187](https://github.com/patternfly/patternfly-react/issues/4187) [#4188](https://github.com/patternfly/patternfly-react/issues/4188) [#4140](https://github.com/patternfly/patternfly-react/issues/4140) [#4193](https://github.com/patternfly/patternfly-react/issues/4193) [#4154](https://github.com/patternfly/patternfly-react/issues/4154) [#4192](https://github.com/patternfly/patternfly-react/issues/4192) [#4190](https://github.com/patternfly/patternfly-react/issues/4190) [#4199](https://github.com/patternfly/patternfly-react/issues/4199) [#4133](https://github.com/patternfly/patternfly-react/issues/4133) [#4165](https://github.com/patternfly/patternfly-react/issues/4165) [#4208](https://github.com/patternfly/patternfly-react/issues/4208) [#4212](https://github.com/patternfly/patternfly-react/issues/4212) [#4130](https://github.com/patternfly/patternfly-react/issues/4130) [#4219](https://github.com/patternfly/patternfly-react/issues/4219) [#4166](https://github.com/patternfly/patternfly-react/issues/4166) [#4202](https://github.com/patternfly/patternfly-react/issues/4202) [#4216](https://github.com/patternfly/patternfly-react/issues/4216) [#4225](https://github.com/patternfly/patternfly-react/issues/4225) [#4221](https://github.com/patternfly/patternfly-react/issues/4221) [#4146](https://github.com/patternfly/patternfly-react/issues/4146) [#3951](https://github.com/patternfly/patternfly-react/issues/3951) [#3681](https://github.com/patternfly/patternfly-react/issues/3681) [#4243](https://github.com/patternfly/patternfly-react/issues/4243) [#4220](https://github.com/patternfly/patternfly-react/issues/4220) [#4153](https://github.com/patternfly/patternfly-react/issues/4153) [#4209](https://github.com/patternfly/patternfly-react/issues/4209) [#4249](https://github.com/patternfly/patternfly-react/issues/4249) [#4239](https://github.com/patternfly/patternfly-react/issues/4239) [#4247](https://github.com/patternfly/patternfly-react/issues/4247) [#4246](https://github.com/patternfly/patternfly-react/issues/4246) [#3684](https://github.com/patternfly/patternfly-react/issues/3684) [#4223](https://github.com/patternfly/patternfly-react/issues/4223) [#4195](https://github.com/patternfly/patternfly-react/issues/4195) [#4254](https://github.com/patternfly/patternfly-react/issues/4254)
- **Masthead:** Updates for new masthead structure in Penta ([#10809](https://github.com/patternfly/patternfly-react/issues/10809)) ([266ee47](https://github.com/patternfly/patternfly-react/commit/266ee476020c51487ae4d426fdab90efc73d12f1))
- **Menu:** add footer, add view more demo ([#5791](https://github.com/patternfly/patternfly-react/issues/5791)) ([dfb53aa](https://github.com/patternfly/patternfly-react/commit/dfb53aaa0abab6f26ca7b5ff92c9f2c1ef39588c))
- **Menu:** consumed Penta updates ([#10089](https://github.com/patternfly/patternfly-react/issues/10089)) ([fdbac3d](https://github.com/patternfly/patternfly-react/commit/fdbac3d9c83c043b996fac484a5afca1d56bc48f))
- **Menu:** keyboard interaction first pass ([#5570](https://github.com/patternfly/patternfly-react/issues/5570)) ([f35afb4](https://github.com/patternfly/patternfly-react/commit/f35afb4d621c6f7f1c67b024b8dfaac4026ef7be))
- **Menu:** match css structure ([#8820](https://github.com/patternfly/patternfly-react/issues/8820)) ([9b64ccf](https://github.com/patternfly/patternfly-react/commit/9b64ccfc525580aefd05b9468eb43c0c3dea3fd3))
- **MenuToggle:** add menu toggle / Add composable menu POCs ([#5722](https://github.com/patternfly/patternfly-react/issues/5722)) ([20ae2dc](https://github.com/patternfly/patternfly-react/commit/20ae2dcacfbf60d4e648fb4ccdd1880cee9744bd))
- **MenuToggle:** consumed Penta updates ([#10097](https://github.com/patternfly/patternfly-react/issues/10097)) ([4a8f446](https://github.com/patternfly/patternfly-react/commit/4a8f4464e715ac93bc72a8c10f38eb2fc13caa95))
- **misc, TextContent:** update core version & text content updates ([#10378](https://github.com/patternfly/patternfly-react/issues/10378)) ([1f1b93c](https://github.com/patternfly/patternfly-react/commit/1f1b93c9f5f8bfeb686f7344bfc70152d5453df1))
- **misc:** Replace Text, TextContent, TextList and TextListItem with Content - PART 2 ([#10643](https://github.com/patternfly/patternfly-react/issues/10643)) ([f067b7c](https://github.com/patternfly/patternfly-react/commit/f067b7c12850251704ba8ca7e6acb03730d371af))
- **misc:** update onToggle params ([#8667](https://github.com/patternfly/patternfly-react/issues/8667)) ([0f35904](https://github.com/patternfly/patternfly-react/commit/0f359040507b11ed048a6486cb66de4e2c8a48a4))
- **Modal:** add description property ([#3821](https://github.com/patternfly/patternfly-react/issues/3821)) ([c7bfe03](https://github.com/patternfly/patternfly-react/commit/c7bfe03c54caf2ffcc215ab359c98cf0359c035e))
- **Modal:** add help section to the modal header ([#5002](https://github.com/patternfly/patternfly-react/issues/5002)) ([6a2b79b](https://github.com/patternfly/patternfly-react/commit/6a2b79bf3b79652eeb11f89cb47225deeaa8aaee))
- **modal:** add medium variant ([#4678](https://github.com/patternfly/patternfly-react/issues/4678)) ([203dd08](https://github.com/patternfly/patternfly-react/commit/203dd0802c630fa3979cf349e5308f8fe906c429))
- **Modal:** add top align to modal ([#4871](https://github.com/patternfly/patternfly-react/issues/4871)) ([15da8a0](https://github.com/patternfly/patternfly-react/commit/15da8a08867899b20dc774aafcc6bfe458ac9ae0))
- **Modal:** added ability to customize initial focus ([#9453](https://github.com/patternfly/patternfly-react/issues/9453)) ([4f4c1d0](https://github.com/patternfly/patternfly-react/commit/4f4c1d0aacb1c16012e66d78345a4486081566d1))
- **Modal:** added event to onClose ([#8956](https://github.com/patternfly/patternfly-react/issues/8956)) ([7bc88b4](https://github.com/patternfly/patternfly-react/commit/7bc88b4dc18ed374c755752a2cc246d36c22dcc4))
- **Modal:** promoted next version ([#10358](https://github.com/patternfly/patternfly-react/issues/10358)) ([3fabe0e](https://github.com/patternfly/patternfly-react/commit/3fabe0eb5fb41d33b520f154bbb3021bf2cb5fe4))
- **Modal:** use css vars to set width, add maxWidth ([#9300](https://github.com/patternfly/patternfly-react/issues/9300)) ([fed8205](https://github.com/patternfly/patternfly-react/commit/fed820515c57ceed60975bd52118c23c8a1382c8))
- **Nav:** add flyout ([#6253](https://github.com/patternfly/patternfly-react/issues/6253)) ([fec556d](https://github.com/patternfly/patternfly-react/commit/fec556dab5478aec27f7ec56e35be11ac5774d4a))
- **Navigation:** add flyout with menu components ([#6416](https://github.com/patternfly/patternfly-react/issues/6416)) ([1d85989](https://github.com/patternfly/patternfly-react/commit/1d85989935aeaa3daa5c6f42b4f487be6a555be8))
- **Navigation:** add horizontal subnav variant ([#6149](https://github.com/patternfly/patternfly-react/issues/6149)) ([1ec8488](https://github.com/patternfly/patternfly-react/commit/1ec8488a3056fc659ec83f04a6e793903ddd2e83))
- **Navigation:** Added support for spreading props to the NaveExpand… ([#5438](https://github.com/patternfly/patternfly-react/issues/5438)) ([e462fb8](https://github.com/patternfly/patternfly-react/commit/e462fb81dee60652027a985a4098a238a38a613a))
- **Navigation:** Penta updates for nav ([#9948](https://github.com/patternfly/patternfly-react/issues/9948)) ([dba392d](https://github.com/patternfly/patternfly-react/commit/dba392d62011b1adc38ab0d22a2ad91e0e7d2a2e))
- **NotificationBadge:** add needs attention state and count ([#4516](https://github.com/patternfly/patternfly-react/issues/4516)) ([63c7cbf](https://github.com/patternfly/patternfly-react/commit/63c7cbf0beed5497ca7addf7fc6663229f37ab81))
- **NotificationBadge:** refactor to use status buttons for penta ([#10020](https://github.com/patternfly/patternfly-react/issues/10020)) ([719f078](https://github.com/patternfly/patternfly-react/commit/719f07879b14a4c1b9c2712a6ea1f834a58b4b63))
- **notificationDrawer:** add default variation to notification items ([#4792](https://github.com/patternfly/patternfly-react/issues/4792)) ([7f32482](https://github.com/patternfly/patternfly-react/commit/7f32482604191bcc1a22214f20d7da3ec03eb5bd))
- **NotificationDrawer:** add formatHeaderText prop to support customize notification drawer header text ([#4684](https://github.com/patternfly/patternfly-react/issues/4684)) ([c11b4d0](https://github.com/patternfly/patternfly-react/commit/c11b4d0a9fd8e1d22cd60ccd89b54942a7026330))
- **NotificationDrawer:** Add new Notification Drawer Component ([#4137](https://github.com/patternfly/patternfly-react/issues/4137)) ([afbf832](https://github.com/patternfly/patternfly-react/commit/afbf832ab6394faa40b38a17817e95f67a37d61c)), closes [#1939](https://github.com/patternfly/patternfly-react/issues/1939)
- **OverflowMenu:** allow breakpoint on container width ([#7913](https://github.com/patternfly/patternfly-react/issues/7913)) ([a9d71bb](https://github.com/patternfly/patternfly-react/commit/a9d71bb9c42e13606d84ac8478d6ab5c717b9e9c))
- **OverflowMenu:** Use next dropdown and dropdownItems ([#8359](https://github.com/patternfly/patternfly-react/issues/8359)) ([d356f4a](https://github.com/patternfly/patternfly-react/commit/d356f4a3f5853313764bd77fd6e02163b81378d7))
- **packages:** use react 17 ([#5111](https://github.com/patternfly/patternfly-react/issues/5111)) ([7fbafcc](https://github.com/patternfly/patternfly-react/commit/7fbafcc947c95d2bda2f4fad8f7737cf7dd3fca6))
- **Page,Drawer:** core bump and updates ([#10211](https://github.com/patternfly/patternfly-react/issues/10211)) ([8210248](https://github.com/patternfly/patternfly-react/commit/82102488317d9b263f8075179f8fecfc365cc647))
- **Page:** add width limit ([#4686](https://github.com/patternfly/patternfly-react/issues/4686)) ([16659fc](https://github.com/patternfly/patternfly-react/commit/16659fc9bd5c087d8f818d4a26c080cca5fcbe43))
- **Page:** Deprecate PageHeader component ([#8854](https://github.com/patternfly/patternfly-react/issues/8854)) ([57b0843](https://github.com/patternfly/patternfly-react/commit/57b084310a7e822848950bcebcfbf5821fe254d5))
- **Page:** rename 'header' prop to 'masthead' ([#10454](https://github.com/patternfly/patternfly-react/issues/10454)) ([37dd6ad](https://github.com/patternfly/patternfly-react/commit/37dd6add1987568f83edf3c0669f058ec58461d5))
- **PageSidebar:** added SidebarBody component ([#8942](https://github.com/patternfly/patternfly-react/issues/8942)) ([67827a8](https://github.com/patternfly/patternfly-react/commit/67827a8753c41ed01c4e2d535751eff8736b261d))
- **Page:** support page fill ([#10760](https://github.com/patternfly/patternfly-react/issues/10760)) ([850bd46](https://github.com/patternfly/patternfly-react/commit/850bd4631d4f5845c627ebb2cb86a6b1524d6ffc))
- **Page:** updated logic to allow section grouping ([#10650](https://github.com/patternfly/patternfly-react/issues/10650)) ([b9181ae](https://github.com/patternfly/patternfly-react/commit/b9181aee9c5649912a52bc3479e9af84a1252aa2))
- **Pagination:** add sticky modifier flag ([#4977](https://github.com/patternfly/patternfly-react/issues/4977)) ([447772a](https://github.com/patternfly/patternfly-react/commit/447772a2ae1edd3db43fb8088377d72e10c77ade))
- **Pagination:** refactored to use menu/menu toggle ([#8319](https://github.com/patternfly/patternfly-react/issues/8319)) ([3130169](https://github.com/patternfly/patternfly-react/commit/3130169317b3adef44bea6956a59849f0ce61712))
- **Popover:** support diagonal positions ([#6155](https://github.com/patternfly/patternfly-react/issues/6155)) ([f1b1003](https://github.com/patternfly/patternfly-react/commit/f1b10032eb527ada191cef8f7f21e76dc1d7c56c))
- **Popper, misc:** remove removeFindDomNode flag and set to default ([#8316](https://github.com/patternfly/patternfly-react/issues/8316)) ([21f9415](https://github.com/patternfly/patternfly-react/commit/21f9415deb5316d15893950d3e43515b081b398b))
- **Popper, misc:** update reference to triggerRef, components to use popperRef/triggerRef ([#8733](https://github.com/patternfly/patternfly-react/issues/8733)) ([c4c085c](https://github.com/patternfly/patternfly-react/commit/c4c085c2caeef76bdd1c4f2a4393a3b64bff55e0))
- **Popper:** made inline logic internal to Popper ([#8669](https://github.com/patternfly/patternfly-react/issues/8669)) ([8824534](https://github.com/patternfly/patternfly-react/commit/8824534486356c799a537a3d4f705190c7fe3127))
- **Progress stepper:** Updated to use render prop for popover ([#7190](https://github.com/patternfly/patternfly-react/issues/7190)) ([5eb8243](https://github.com/patternfly/patternfly-react/commit/5eb8243d63d1168d9b425a5322c08e04659ed843))
- **progress:** add warning variant ([#4834](https://github.com/patternfly/patternfly-react/issues/4834)) ([ff0b4fc](https://github.com/patternfly/patternfly-react/commit/ff0b4fc51f9b991aa2d389ee20d0eb3a7507314a)), closes [#4818](https://github.com/patternfly/patternfly-react/issues/4818)
- **Progress:** added truncation ([#4842](https://github.com/patternfly/patternfly-react/issues/4842)) ([3b5f1ba](https://github.com/patternfly/patternfly-react/commit/3b5f1baba4a452abb45f48fb0968be703999dfd4))
- **react-console:** accept random children in AccessConsole component ([#6374](https://github.com/patternfly/patternfly-react/issues/6374)) ([7be4bc4](https://github.com/patternfly/patternfly-react/commit/7be4bc4a92e208073ca3e38415df1f64a89506ee))
- **react-core-button:** add isLoading and spinnerAriaValueText properties ([#4837](https://github.com/patternfly/patternfly-react/issues/4837)) ([bc81323](https://github.com/patternfly/patternfly-react/commit/bc81323af97230879e1ee2d9b9db0f0bfea6dabd)), closes [#4816](https://github.com/patternfly/patternfly-react/issues/4816)
- **react-core-button:** support warning variant ([#4829](https://github.com/patternfly/patternfly-react/issues/4829)) ([6c5df2a](https://github.com/patternfly/patternfly-react/commit/6c5df2adfc78f128448ee7b7450c4bc9c054131f)), closes [#4717](https://github.com/patternfly/patternfly-react/issues/4717)
- **react-core-tabs:** add support for light scheme variant in Tabs && TabContent ([#4832](https://github.com/patternfly/patternfly-react/issues/4832)) ([8bf0619](https://github.com/patternfly/patternfly-react/commit/8bf0619bfd08bf4e7daa3c601ee178d1c1349e76)), closes [#4658](https://github.com/patternfly/patternfly-react/issues/4658)
- **SearchInput:** add advanced search feature ([#5454](https://github.com/patternfly/patternfly-react/issues/5454)) ([7099da1](https://github.com/patternfly/patternfly-react/commit/7099da1cb31fb9f5fb537b082365eabc42c2b95e))
- **SearchInput:** add isDisabled and clean up focus handling ([#5468](https://github.com/patternfly/patternfly-react/issues/5468)) ([05b1b3a](https://github.com/patternfly/patternfly-react/commit/05b1b3a803c053150966e89a635120474c12c300))
- **SearchInput:** add new SearchInput component ([#4588](https://github.com/patternfly/patternfly-react/issues/4588)) ([bca4005](https://github.com/patternfly/patternfly-react/commit/bca40058168bcdf79898ea638f95c0601a8d0e17))
- **searchInput:** add support to passing a ref ([#5215](https://github.com/patternfly/patternfly-react/issues/5215)) ([41af5d3](https://github.com/patternfly/patternfly-react/commit/41af5d34d5c80afade3c1c9ace9e07877b141149))
- **SearchInput:** Autocomplete SearchInput demo ([#6305](https://github.com/patternfly/patternfly-react/issues/6305)) ([8456945](https://github.com/patternfly/patternfly-react/commit/84569455a9662f6e0be951a0431b2bacea61ee73))
- **Select, dropdown, options menu, contect selector, app launcher:** Remove deprecated components ([#10345](https://github.com/patternfly/patternfly-react/issues/10345)) ([c7ed423](https://github.com/patternfly/patternfly-react/commit/c7ed423f4bcabee9bc4123ac92dac9f19a8bb808))
- **Select,Dropdown:** renamed itemId prop to value ([#9175](https://github.com/patternfly/patternfly-react/issues/9175)) ([4853518](https://github.com/patternfly/patternfly-react/commit/4853518cf09f747dfec11015dd3e5dc5a7c0ed85))
- **Select:** Add flag to accept input values even if not in menu ([#5751](https://github.com/patternfly/patternfly-react/issues/5751)) ([6373bbf](https://github.com/patternfly/patternfly-react/commit/6373bbf3a1824424ebc54a13b154259da2aa6a54))
- **Select:** add flag to not reset on select, add event to toggle callback ([#7093](https://github.com/patternfly/patternfly-react/issues/7093)) ([ec2afb1](https://github.com/patternfly/patternfly-react/commit/ec2afb1ea414f63a2fadc56bbaa968a0caad5fd6))
- **Select:** add inline filtering to checkbox select ([#3843](https://github.com/patternfly/patternfly-react/issues/3843)) ([2263de8](https://github.com/patternfly/patternfly-react/commit/2263de8361b196f4421a3adcbb01b4b2dd410d4a))
- **Select:** add option description property ([#4460](https://github.com/patternfly/patternfly-react/issues/4460)) ([bda22a3](https://github.com/patternfly/patternfly-react/commit/bda22a37f886a69504fab66da7f4827465552dc6))
- **Select:** add support for favourites ([#4642](https://github.com/patternfly/patternfly-react/issues/4642)) ([acd748b](https://github.com/patternfly/patternfly-react/commit/acd748b06a34a54f65a63325f179c7751181cf9a))
- **Select:** Added footer and view more options ([#5736](https://github.com/patternfly/patternfly-react/issues/5736)) ([607c436](https://github.com/patternfly/patternfly-react/commit/607c436cf840fce9f3db923135fede361bcd02c2))
- **Select:** Added invalid state to select ([#5675](https://github.com/patternfly/patternfly-react/issues/5675)) ([d222162](https://github.com/patternfly/patternfly-react/commit/d222162565605b4776b31901773827459bc2d9b5))
- **Select:** Added optional item count ([#5677](https://github.com/patternfly/patternfly-react/issues/5677)) ([f36235b](https://github.com/patternfly/patternfly-react/commit/f36235b93540845d144ea0cbf2c168c1a538ae73))
- **Select:** Added support for Divider in Select ([#4772](https://github.com/patternfly/patternfly-react/issues/4772)) ([4071f6f](https://github.com/patternfly/patternfly-react/commit/4071f6fd70d55356f16eebfac9bac3c24af1ed8d))
- **select:** Allow count badge to be hidden in checkbox select ([#3976](https://github.com/patternfly/patternfly-react/issues/3976)) ([98bef94](https://github.com/patternfly/patternfly-react/commit/98bef941745d57f94b1f9cafd866c06ea1f85a93))
- **select:** allow filtering in single variant ([#5793](https://github.com/patternfly/patternfly-react/issues/5793)) ([54d2e3f](https://github.com/patternfly/patternfly-react/commit/54d2e3f2858099ad096c520634bfdf260f880e3c))
- **Select:** Deprecated old select and promoted select next ([#8825](https://github.com/patternfly/patternfly-react/issues/8825)) ([6fd4eeb](https://github.com/patternfly/patternfly-react/commit/6fd4eeb85fbe88ab427737138470226f38442318))
- **Select:** fix space/enter closing typeahead variants incorrectly ([#4663](https://github.com/patternfly/patternfly-react/issues/4663)) ([3635f26](https://github.com/patternfly/patternfly-react/commit/3635f26520af063a926c836c028d8dc896813415))
- **select:** pass chip group props on typeaheadmulti variant ([#4855](https://github.com/patternfly/patternfly-react/issues/4855)) ([5d008a0](https://github.com/patternfly/patternfly-react/commit/5d008a025304e22182fd4072cf9a7ddd979c50cf))
- **SimpleList:** Uncontrolled Simple list support ([#5134](https://github.com/patternfly/patternfly-react/issues/5134)) ([690cf90](https://github.com/patternfly/patternfly-react/commit/690cf9090444edc3a5d3bb470edf25633b031f65))
- **Skeleton:** add skeleton component, examples, tests ([#4755](https://github.com/patternfly/patternfly-react/issues/4755)) ([1f9a46e](https://github.com/patternfly/patternfly-react/commit/1f9a46ed8f9b3fa2bcef7fc580e7101f7aaef09c))
- **Slider:** Added new slider component ([#5358](https://github.com/patternfly/patternfly-react/issues/5358)) ([90df385](https://github.com/patternfly/patternfly-react/commit/90df3850a0a602d14538faba98314405b12a786b))
- **spinner:** add isSVG ([#5390](https://github.com/patternfly/patternfly-react/issues/5390)) ([0114531](https://github.com/patternfly/patternfly-react/commit/01145311c6e50732691e3a43bc5dcc6b47026bc1))
- **split:** added prop to allow children to wrap ([#5892](https://github.com/patternfly/patternfly-react/issues/5892)) ([a9d5cb4](https://github.com/patternfly/patternfly-react/commit/a9d5cb4089113dc3b1365d3f73e8e259719a8328))
- **Splitter:** add Splitter component ([#5051](https://github.com/patternfly/patternfly-react/issues/5051)) ([70073f2](https://github.com/patternfly/patternfly-react/commit/70073f27cf7833ebf4785887636ba6474f53de8b))
- **Switch:** make event first param for onChange prop ([#9037](https://github.com/patternfly/patternfly-react/issues/9037)) ([5dcc90f](https://github.com/patternfly/patternfly-react/commit/5dcc90f3c4608517f829b8d8fd40f659c274e393))
- **table:** ability to add expand/collapse all to th ([#6914](https://github.com/patternfly/patternfly-react/issues/6914)) ([ee510ee](https://github.com/patternfly/patternfly-react/commit/ee510ee8c8d3a069b75c73873ebd32b0b9a4d9c7))
- **Table:** Add hoverable and selectable rows ([#6233](https://github.com/patternfly/patternfly-react/issues/6233)) ([b2527e2](https://github.com/patternfly/patternfly-react/commit/b2527e209bab0da4c0327df494c52cd5cbd28113))
- **Table:** Add inline editable dropdown ([#4262](https://github.com/patternfly/patternfly-react/issues/4262)) ([9cd5360](https://github.com/patternfly/patternfly-react/commit/9cd53600a7f7bcc786772ebae0dc8b2c579e782a))
- **Table:** adds sticky header prop and demo ([#4417](https://github.com/patternfly/patternfly-react/issues/4417)) ([6a58f1f](https://github.com/patternfly/patternfly-react/commit/6a58f1f91a6c4cde53be562b6e740e6fe33a8b33))
- **TableComposable:** add dataLabel property ([#5406](https://github.com/patternfly/patternfly-react/issues/5406)) ([daefa3f](https://github.com/patternfly/patternfly-react/commit/daefa3fb604679208908a5a995b3087a62073559)), closes [#5405](https://github.com/patternfly/patternfly-react/issues/5405)
- **Table:** swapped param order of onSelect and clearSelection ([#9057](https://github.com/patternfly/patternfly-react/issues/9057)) ([93baf4e](https://github.com/patternfly/patternfly-react/commit/93baf4eae9e289c403cab160a75f2157e0a6f6d8))
- **TableText:** allow passing tooltipProps ([#5654](https://github.com/patternfly/patternfly-react/issues/5654)) ([d20f62f](https://github.com/patternfly/patternfly-react/commit/d20f62f4eb39aa1feb185992d86330592cc557dd))
- **Table:** update ActionsColumn to use Dropdown next ([#8629](https://github.com/patternfly/patternfly-react/issues/8629)) ([43601af](https://github.com/patternfly/patternfly-react/commit/43601afa128593792317bf265d9165bb8f52d552))
- **Table:** update clickable area for checks/radios ([#6754](https://github.com/patternfly/patternfly-react/issues/6754)) ([c4f3c2d](https://github.com/patternfly/patternfly-react/commit/c4f3c2d7f515e3d6ad73d8b52238ca426281469a))
- **Table:** use pf check/radio for selects ([#12045](https://github.com/patternfly/patternfly-react/issues/12045)) ([a434558](https://github.com/patternfly/patternfly-react/commit/a4345580fadd9d59b918315fff29d71c35f88fe8))
- **Tabs:** added animations ([#11767](https://github.com/patternfly/patternfly-react/issues/11767)) ([bae4fc3](https://github.com/patternfly/patternfly-react/commit/bae4fc36aa39007d9474236cbada62ac55a27989))
- **Tabs:** added event to onToggle ([#9059](https://github.com/patternfly/patternfly-react/issues/9059)) ([54b7f9a](https://github.com/patternfly/patternfly-react/commit/54b7f9a8ba669a045c106284637890eda813240d))
- **Tabs:** Added support for uncontrolled tabs ([#5831](https://github.com/patternfly/patternfly-react/issues/5831)) ([93a159f](https://github.com/patternfly/patternfly-react/commit/93a159f7116b96e422366ccdd397480b0c024cf2))
- **Tabs:** consumed Penta updates ([#10044](https://github.com/patternfly/patternfly-react/issues/10044)) ([8fdd83e](https://github.com/patternfly/patternfly-react/commit/8fdd83eb76c216c26c3f06318b7c32030d736d4f))
- **Text:** Added support for visited link styling ([#5917](https://github.com/patternfly/patternfly-react/issues/5917)) ([b2167ed](https://github.com/patternfly/patternfly-react/commit/b2167ed94552c60d7cc4e143a467ca96eddfda21))
- **textarea:** add auto resizing ([#5568](https://github.com/patternfly/patternfly-react/issues/5568)) ([4809e89](https://github.com/patternfly/patternfly-react/commit/4809e8988001a7246b25d662b7f8cf3df304389d))
- **textarea:** support isDisabled ([#5107](https://github.com/patternfly/patternfly-react/issues/5107)) ([9ebcfe9](https://github.com/patternfly/patternfly-react/commit/9ebcfe9b7b8719556c7b4430186010dd788744f1))
- **TextArea:** swapped onChange params ([#9061](https://github.com/patternfly/patternfly-react/issues/9061)) ([b48192e](https://github.com/patternfly/patternfly-react/commit/b48192edd72b790fd4c4864123f24f4e7ff8377e))
- **TextInput:** add helper util for left trim ([#4691](https://github.com/patternfly/patternfly-react/issues/4691)) ([44dba19](https://github.com/patternfly/patternfly-react/commit/44dba19f3ba357942484d69721bbdfe4ff4e81d8))
- **TextInput:** Added isStartTruncted prop and deprecated isLeftTruncted prop ([#9610](https://github.com/patternfly/patternfly-react/issues/9610)) ([b1aaf3c](https://github.com/patternfly/patternfly-react/commit/b1aaf3cb9d48aef7ca1a72977ca386a3f36eecad))
- **TextInput:** swapped onChange params ([#9064](https://github.com/patternfly/patternfly-react/issues/9064)) ([8735c8d](https://github.com/patternfly/patternfly-react/commit/8735c8d6260c9faf5416946d7cba4d91d33e8ff9))
- **Tile:** add tile component ([#4610](https://github.com/patternfly/patternfly-react/issues/4610)) ([a49c28f](https://github.com/patternfly/patternfly-react/commit/a49c28fbeefe2cabdf1be1e4f3e3633a3e01c0d2))
- **ToggleGroup:** add new toggle group component ([#4702](https://github.com/patternfly/patternfly-react/issues/4702)) ([4c00ae5](https://github.com/patternfly/patternfly-react/commit/4c00ae54da9df1a2560c8033464b91f97eac2ca7))
- **toggleGroup:** add suport to text + icon ([#4999](https://github.com/patternfly/patternfly-react/issues/4999)) ([ca606e4](https://github.com/patternfly/patternfly-react/commit/ca606e443d69c7ef8774185695a398df001abc57))
- **ToggleGroupItem:** swapped onChange params ([#9067](https://github.com/patternfly/patternfly-react/issues/9067)) ([0959498](https://github.com/patternfly/patternfly-react/commit/09594984136cbae6a0f6d4223168dedb4e73c9b0))
- **Toolbar:** add insets property ([#4757](https://github.com/patternfly/patternfly-react/issues/4757)) ([2d388af](https://github.com/patternfly/patternfly-react/commit/2d388afd22a243195dea56b502398a62a7138617))
- **Toolbar:** allow multiple toggle groups ([#9329](https://github.com/patternfly/patternfly-react/issues/9329)) ([b1093bf](https://github.com/patternfly/patternfly-react/commit/b1093bf0ba066a56c80667d299750cf49eb0641f))
- **Toolbar:** consumed Penta updates ([#10042](https://github.com/patternfly/patternfly-react/issues/10042)) ([d6db0a5](https://github.com/patternfly/patternfly-react/commit/d6db0a52ca36bc99d20844d60d748fc937aa1db4))
- **ToolbarItem:** add widths on breakpoints ([#5727](https://github.com/patternfly/patternfly-react/issues/5727)) ([2149190](https://github.com/patternfly/patternfly-react/commit/214919090ae02511f206aa799bae4660a82b21ce))
- **Toolbar:** remove depricated visiblity ([#8212](https://github.com/patternfly/patternfly-react/issues/8212)) ([102e06e](https://github.com/patternfly/patternfly-react/commit/102e06ede5be45ae2bf4147204f9ba8884115ef8))
- **Toolbar:** support customizing text in ToolbarChipGroupContent ([#6694](https://github.com/patternfly/patternfly-react/issues/6694)) ([24266ad](https://github.com/patternfly/patternfly-react/commit/24266adf569c027574abd1503b5e46974220349a))
- **Toolbar:** support for vertical alignments ([#8563](https://github.com/patternfly/patternfly-react/issues/8563)) ([2b0120a](https://github.com/patternfly/patternfly-react/commit/2b0120aeb43de7bea4ca54108a81b14e256ecb2d))
- **Topology:** Add Topology pipeline support ([#7609](https://github.com/patternfly/patternfly-react/issues/7609)) ([4fb563f](https://github.com/patternfly/patternfly-react/commit/4fb563fb8651c0386f7cc59fd9c736af6fb683ec))
- **topology:** Enable saving current topology graph model ([#4690](https://github.com/patternfly/patternfly-react/issues/4690)) ([2c4b25c](https://github.com/patternfly/patternfly-react/commit/2c4b25ce8aa64a08de38c0a1884c96df643f348e))
- **topology:** Pipelines support for badges/icons variable task node width ([#7697](https://github.com/patternfly/patternfly-react/issues/7697)) ([a499273](https://github.com/patternfly/patternfly-react/commit/a49927315cd61e84a007d05b49e5d7254b977fcb))
- **topology:** Use Drawer for topology side panel and allow resizing ([#5533](https://github.com/patternfly/patternfly-react/issues/5533)) ([301c6a0](https://github.com/patternfly/patternfly-react/commit/301c6a0ce13755b3e6f12a243043d67e1b63990b))
- **Touchspin:** add touchspin component ([#5115](https://github.com/patternfly/patternfly-react/issues/5115)) ([9dbe59a](https://github.com/patternfly/patternfly-react/commit/9dbe59acf457910ec8efa8280cbc33c952469724))
- **TreeView:** add flag for expand/collapse all ([#5503](https://github.com/patternfly/patternfly-react/issues/5503)) ([b529adc](https://github.com/patternfly/patternfly-react/commit/b529adca780d185bc740056efe2f5b6826c0285b))
- **TreeView:** add guides + compact variants ([#6172](https://github.com/patternfly/patternfly-react/issues/6172)) ([7526e23](https://github.com/patternfly/patternfly-react/commit/7526e236c218a54d37e74baebbfd180f7024587e))
- **TreeView:** add keyboard interaction ([#5439](https://github.com/patternfly/patternfly-react/issues/5439)) ([fc094b9](https://github.com/patternfly/patternfly-react/commit/fc094b910517e6a42f2d88175557675572e89ae5))
- **TreeView:** add treeview, demos, tests ([#4701](https://github.com/patternfly/patternfly-react/issues/4701)) ([1840aac](https://github.com/patternfly/patternfly-react/commit/1840aac8e5fe3b29e349e8cf615d8b914274a16b))
- **TreeView:** Update treeview to consume toolbar ([#6133](https://github.com/patternfly/patternfly-react/issues/6133)) ([3b3b328](https://github.com/patternfly/patternfly-react/commit/3b3b3281aef7a328ee9c7265aeb3575365ae8798))
- **Wizard:** allow for expandable nav items ([#5842](https://github.com/patternfly/patternfly-react/issues/5842)) ([2556754](https://github.com/patternfly/patternfly-react/commit/2556754770aa4008c8b2aef5a5f764d2382dbf9d))
- **Wizard:** use height token to set height ([#10332](https://github.com/patternfly/patternfly-react/issues/10332)) ([2b5a598](https://github.com/patternfly/patternfly-react/commit/2b5a598e9b49f052d36b675a0929d5f679af6cca))
- **wiz:** make wiz nav items more easily discoverable ([#4425](https://github.com/patternfly/patternfly-react/issues/4425)) ([92384d4](https://github.com/patternfly/patternfly-react/commit/92384d40cb4d5e3171c6922d00e391ed290239ac))

### Reverts

- Revert "chore(release): releasing packages [ci skip]" (#12678) ([67b60ff](https://github.com/patternfly/patternfly-react/commit/67b60ff57329e195ec241b333b2c5033b39dd4d7)), closes [#12678](https://github.com/patternfly/patternfly-react/issues/12678)
- Revert "Merge remote-tracking branch 'upstream/main' into v6" (#9791) ([b7e8065](https://github.com/patternfly/patternfly-react/commit/b7e80650d3e4cad7a657f6e5a3177485ca4f8c26)), closes [#9791](https://github.com/patternfly/patternfly-react/issues/9791)

### BREAKING CHANGES

- closes #8555, fixes #8455

- docs(EmptyState): updated examples

updated examples of EmptyState usage on the PatternFly web to use new API

# [6.5.0-prerelease.24](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.5.0-prerelease.23...@patternfly/react-integration@6.5.0-prerelease.24) (2026-08-03)

### Bug Fixes

- **AngleDoubleRightIcon:** Replace AngleDoubleRightIcon with RhMicronsDoubleCaretRightIcon ([#12493](https://github.com/patternfly/patternfly-react/issues/12493)) ([a9bd226](https://github.com/patternfly/patternfly-react/commit/a9bd226cfa9183e5893cd8d74302934f98aaa51c))
- **AngleLeftIcon:** Replace AngleLeftIcon with RhMicronsCaretLeftIcon ([#12495](https://github.com/patternfly/patternfly-react/issues/12495)) ([bd9932f](https://github.com/patternfly/patternfly-react/commit/bd9932f123fc5f94598ce555f8166052eaecb95c))
- **AngleRightIcon:** Replace AngleRightIcon with RhMicronsCaretRightIcon ([#12496](https://github.com/patternfly/patternfly-react/issues/12496)) ([4f70020](https://github.com/patternfly/patternfly-react/commit/4f700201a3b4e9bee30dc7c5f2dc9798b1f58474))
- **FilterIcon:** Replace FilterIcon with RhUiFilterFillIcon ([#12524](https://github.com/patternfly/patternfly-react/issues/12524)) ([f8bcd7c](https://github.com/patternfly/patternfly-react/commit/f8bcd7cc8b14d03706efe384b06ad3fe7701df30))
- **InfrastructureIcons:** replaced with RH brand icons part 2 ([#12502](https://github.com/patternfly/patternfly-react/issues/12502)) ([80f6ca0](https://github.com/patternfly/patternfly-react/commit/80f6ca081487c175bd6b336c256a426e1ef37bdc))
- **InfrastructureIcons:** replaced with RH brand icons part 3 ([#12503](https://github.com/patternfly/patternfly-react/issues/12503)) ([eb80455](https://github.com/patternfly/patternfly-react/commit/eb8045502918af553015eb0cb0fa6f17443a2ced))
- **InfrastructureIcons:** replaced with RH brand icons part 4 ([#12504](https://github.com/patternfly/patternfly-react/issues/12504)) ([4cc476a](https://github.com/patternfly/patternfly-react/commit/4cc476a36b7fb93835fba30881ca0b88c31f01f3))
- **PlayIcon:** Replace PlayIcon with RhUiPlayFillIcon ([#12499](https://github.com/patternfly/patternfly-react/issues/12499)) ([a859511](https://github.com/patternfly/patternfly-react/commit/a8595111abfc4736799edfc750bd8c13a0c9f78f))
- **RhMicronCaretDown:** Replace with fill for menus ([#12532](https://github.com/patternfly/patternfly-react/issues/12532)) ([2729a13](https://github.com/patternfly/patternfly-react/commit/2729a139db37a50afa6ca15c44b20fb545005847))
- **SearchIcon:** Replace SearchIcon with RhMicronsSearchIcon ([#12525](https://github.com/patternfly/patternfly-react/issues/12525)) ([930a34b](https://github.com/patternfly/patternfly-react/commit/930a34b12f4daf243757cb14b4b772d02e5c471a))
- **SyncIcon:** Replace SyncIcon with RhUiSyncIcon ([#12512](https://github.com/patternfly/patternfly-react/issues/12512)) ([9829852](https://github.com/patternfly/patternfly-react/commit/982985213b6dce21a815e5b60703e97e916402be))
- **UndoIcon:** Replace UndoIcon with RhUiUndoIcon ([#12515](https://github.com/patternfly/patternfly-react/issues/12515)) ([77ad416](https://github.com/patternfly/patternfly-react/commit/77ad416134772c099e9c1feafe5cf67ba3462eb0))
- **WarningTriangleIcon:** Replace WarningTriangleIcon with RhUiWarningIcon ([#12508](https://github.com/patternfly/patternfly-react/issues/12508)) ([f45904d](https://github.com/patternfly/patternfly-react/commit/f45904df01d6e8af1d9826de6c78f76117b0f40e))

# [6.5.0-prerelease.23](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.5.0-prerelease.22...@patternfly/react-integration@6.5.0-prerelease.23) (2026-06-24)

### Bug Fixes

- **CalendarAltIcon:** Replace CalendarAltIcon with RhUiCalendarIcon ([#12462](https://github.com/patternfly/patternfly-react/issues/12462)) ([e1e02f2](https://github.com/patternfly/patternfly-react/commit/e1e02f25b17cc5b4d7f775ef1fc0aee61753e0ad))
- **ClipboardIcon:** Replace ClipboardIcon with RhUiClipboardFillIcon ([#12455](https://github.com/patternfly/patternfly-react/issues/12455)) ([f763158](https://github.com/patternfly/patternfly-react/commit/f7631588c8643c9a567054e35e3d01af33a4ffbf))
- **CodeBranchIcon:** Replace CodeBranchIcon with RhUiBranchIcon ([#12489](https://github.com/patternfly/patternfly-react/issues/12489)) ([aa4f9fd](https://github.com/patternfly/patternfly-react/commit/aa4f9fdfb7a0e95b8b01f6b08db2947af3ee55cb))
- **CodeIcon:** Replace CodeIcon with RhUiCodeIcon ([#12488](https://github.com/patternfly/patternfly-react/issues/12488)) ([9562dbe](https://github.com/patternfly/patternfly-react/commit/9562dbe059fc5ca5182a177ae72943ae05fcaeea))
- **CopyIcon:** Replace CopyIcon with RhUiCopyFillIcon ([#12449](https://github.com/patternfly/patternfly-react/issues/12449)) ([a2798bd](https://github.com/patternfly/patternfly-react/commit/a2798bd477fedc37c8a3a706464eb864706254a3))
- **EllipsisVIcon:** Replace EllipsisVIcon with RhUiEllipsisVerticalFillIcon ([#12481](https://github.com/patternfly/patternfly-react/issues/12481)) ([29f223e](https://github.com/patternfly/patternfly-react/commit/29f223e6f0869af70d4b6f0733660a9573466342))
- **ExternalLinkAltIcon:** Replace ExternalLinkAltIcon with RhUiExternalLinkIcon ([#12490](https://github.com/patternfly/patternfly-react/issues/12490)) ([300a85c](https://github.com/patternfly/patternfly-react/commit/300a85c3742b3e88bc022adeae7ca6749d66151f))
- **InfrastructureIcons:** replaced with RH brand icons part 1 ([#12501](https://github.com/patternfly/patternfly-react/issues/12501)) ([a479b4c](https://github.com/patternfly/patternfly-react/commit/a479b4c354ca970383cfefeb5eb532b519b2ea73))
- **PficonSortCommonAscIcon:** Replace PficonSortCommonAscIcon with RhUiSortDownSmallToLargeIcon ([#12485](https://github.com/patternfly/patternfly-react/issues/12485)) ([909f747](https://github.com/patternfly/patternfly-react/commit/909f747a449b449cde415c31a77a33b1559bfe08))
- **PficonSortCommonDescIcon:** Replace PficonSortCommonDescIcon with RhUiSortDownLargeToSmallIcon ([#12486](https://github.com/patternfly/patternfly-react/issues/12486)) ([61aa3e2](https://github.com/patternfly/patternfly-react/commit/61aa3e2b723458669d1bfdd7814f812df06767b3))
- **TableIcon:** Replace TableIcon with RhUiTableIcon ([#12476](https://github.com/patternfly/patternfly-react/issues/12476)) ([b6c1b00](https://github.com/patternfly/patternfly-react/commit/b6c1b002cea1ebc02c20d89f302f39631de08c6e))
- **UserIcon:** Replace UserIcon with RhUiProfileFillIcon ([#12452](https://github.com/patternfly/patternfly-react/issues/12452)) ([a1404e3](https://github.com/patternfly/patternfly-react/commit/a1404e3365f2c0bef9dc11863bb69bd49d497a33))
- **UsersIcon:** Replace with brand icon ([#12450](https://github.com/patternfly/patternfly-react/issues/12450)) ([34193c6](https://github.com/patternfly/patternfly-react/commit/34193c67b1a2435d0165c33336d01c2e9b20a2dc))

# [6.5.0-prerelease.22](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.5.0-prerelease.21...@patternfly/react-integration@6.5.0-prerelease.22) (2026-06-11)

**Note:** Version bump only for package @patternfly/react-integration

# [6.5.0-prerelease.21](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.5.0-prerelease.20...@patternfly/react-integration@6.5.0-prerelease.21) (2026-06-11)

**Note:** Version bump only for package @patternfly/react-integration

# [6.5.0-prerelease.20](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.5.0-prerelease.19...@patternfly/react-integration@6.5.0-prerelease.20) (2026-06-10)

**Note:** Version bump only for package @patternfly/react-integration

# [6.5.0-prerelease.19](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.5.0-prerelease.18...@patternfly/react-integration@6.5.0-prerelease.19) (2026-05-27)

### Features

- **CodeEditor:** add isHighContrastTheme ([#12384](https://github.com/patternfly/patternfly-react/issues/12384)) ([bee95e6](https://github.com/patternfly/patternfly-react/commit/bee95e6397fcc7ee326ac8d29d59f65365db02bf))

# [6.5.0-prerelease.18](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.5.0-prerelease.17...@patternfly/react-integration@6.5.0-prerelease.18) (2026-05-13)

**Note:** Version bump only for package @patternfly/react-integration

# [6.5.0-prerelease.17](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.5.0-prerelease.16...@patternfly/react-integration@6.5.0-prerelease.17) (2026-05-05)

**Note:** Version bump only for package @patternfly/react-integration

# [6.5.0-prerelease.16](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.5.0-prerelease.15...@patternfly/react-integration@6.5.0-prerelease.16) (2026-05-05)

### Features

- **Drawer:** Added support for glass ([#12305](https://github.com/patternfly/patternfly-react/issues/12305)) ([bce395d](https://github.com/patternfly/patternfly-react/commit/bce395dc88c4a462b5950fb939d4e14327c7b559))

# [6.5.0-prerelease.15](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.5.0-prerelease.14...@patternfly/react-integration@6.5.0-prerelease.15) (2026-04-27)

**Note:** Version bump only for package @patternfly/react-integration

# [6.5.0-prerelease.14](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.5.0-prerelease.13...@patternfly/react-integration@6.5.0-prerelease.14) (2026-04-13)

### Features

- **Data list:** Add isNoPlainOnGlass prop to add pf-m-no-plain modfier to the data list ([#12292](https://github.com/patternfly/patternfly-react/issues/12292)) ([f71da53](https://github.com/patternfly/patternfly-react/commit/f71da53cd09a53442ff3fffc43790b08a7465506))

# [6.5.0-prerelease.13](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.5.0-prerelease.12...@patternfly/react-integration@6.5.0-prerelease.13) (2026-04-13)

### Features

- **Accordion:** Added isPlain and isNoPlainOnGlass prop to Accordion ([#12288](https://github.com/patternfly/patternfly-react/issues/12288)) ([55ffb51](https://github.com/patternfly/patternfly-react/commit/55ffb51760542045f9b7dac0af584cee4a3eff4e))

# [6.5.0-prerelease.12](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.5.0-prerelease.11...@patternfly/react-integration@6.5.0-prerelease.12) (2026-04-01)

**Note:** Version bump only for package @patternfly/react-integration

# [6.5.0-prerelease.11](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.5.0-prerelease.10...@patternfly/react-integration@6.5.0-prerelease.11) (2026-04-01)

### Features

- **icons:** updated caret icons to RH microns ([#12298](https://github.com/patternfly/patternfly-react/issues/12298)) ([688a5af](https://github.com/patternfly/patternfly-react/commit/688a5afb40c28f0b293301d1e68f0359b7a0604d))

# [6.5.0-prerelease.10](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.5.0-prerelease.9...@patternfly/react-integration@6.5.0-prerelease.10) (2026-03-31)

### Features

- **icons:** update close icons to use the rh micron ([#12283](https://github.com/patternfly/patternfly-react/issues/12283)) ([fc82a9c](https://github.com/patternfly/patternfly-react/commit/fc82a9c646739a11732e7934d860f3913932168f))

# [6.5.0-prerelease.9](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.5.0-prerelease.8...@patternfly/react-integration@6.5.0-prerelease.9) (2026-03-25)

**Note:** Version bump only for package @patternfly/react-integration

# [6.5.0-prerelease.8](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.5.0-prerelease.7...@patternfly/react-integration@6.5.0-prerelease.8) (2026-01-28)

**Note:** Version bump only for package @patternfly/react-integration

# [6.5.0-prerelease.7](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.5.0-prerelease.6...@patternfly/react-integration@6.5.0-prerelease.7) (2026-01-09)

**Note:** Version bump only for package @patternfly/react-integration

# [6.5.0-prerelease.6](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.5.0-prerelease.5...@patternfly/react-integration@6.5.0-prerelease.6) (2025-12-17)

**Note:** Version bump only for package @patternfly/react-integration

# [6.5.0-prerelease.5](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.5.0-prerelease.2...@patternfly/react-integration@6.5.0-prerelease.5) (2025-12-16)

### Features

- **docked nav:** add support for docked nav layout ([#12175](https://github.com/patternfly/patternfly-react/issues/12175)) ([5519389](https://github.com/patternfly/patternfly-react/commit/55193896b899aa1e2b8dfbbddd644507988ee31f))

# [6.5.0-prerelease.2](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.5.0-prerelease.1...@patternfly/react-integration@6.5.0-prerelease.2) (2025-11-03)

### Bug Fixes

- **PageSidebar:** sidebar flash on non-mobile ([#12040](https://github.com/patternfly/patternfly-react/issues/12040)) ([f986c4f](https://github.com/patternfly/patternfly-react/commit/f986c4f30581074f2ed4d25c52333eb665be9d28))

# [6.5.0-prerelease.1](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.41...@patternfly/react-integration@6.5.0-prerelease.1) (2025-10-30)

### Bug Fixes

- **deps:** update react-router monorepo to ^7.9.4 ([#11692](https://github.com/patternfly/patternfly-react/issues/11692)) ([0f80fa4](https://github.com/patternfly/patternfly-react/commit/0f80fa419631c1c7d8127f5ab45a4aaad2e79988))

# [6.0.0-prerelease.41](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.40...@patternfly/react-integration@6.0.0-prerelease.41) (2025-10-24)

### Features

- **Table:** use pf check/radio for selects ([#12045](https://github.com/patternfly/patternfly-react/issues/12045)) ([a434558](https://github.com/patternfly/patternfly-react/commit/a4345580fadd9d59b918315fff29d71c35f88fe8))

# [6.0.0-prerelease.40](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.39...@patternfly/react-integration@6.0.0-prerelease.40) (2025-10-13)

### Bug Fixes

- **examples:** make sure examples with SearchInput have onClear ([#12044](https://github.com/patternfly/patternfly-react/issues/12044)) ([9c785af](https://github.com/patternfly/patternfly-react/commit/9c785af077869005514bc719212e21f9193f9206))

# [6.0.0-prerelease.39](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.38...@patternfly/react-integration@6.0.0-prerelease.39) (2025-06-13)

### Features

- **Button/MenuToggle:** added support for hamburger/settings animations ([#11861](https://github.com/patternfly/patternfly-react/issues/11861)) ([cf3d84e](https://github.com/patternfly/patternfly-react/commit/cf3d84ebf8f3046f038af6f6557946faadfe35b0))

# [6.0.0-prerelease.38](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.37...@patternfly/react-integration@6.0.0-prerelease.38) (2025-05-29)

### Bug Fixes

- added resultsCountContext prop to pass into the screenReaderText… ([#11844](https://github.com/patternfly/patternfly-react/issues/11844)) ([d96668a](https://github.com/patternfly/patternfly-react/commit/d96668aa1ddaba5bea8b1c921e8f2145d44587ad))

# [6.0.0-prerelease.37](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.36...@patternfly/react-integration@6.0.0-prerelease.37) (2025-05-21)

### Features

- **Tabs:** added animations ([#11767](https://github.com/patternfly/patternfly-react/issues/11767)) ([bae4fc3](https://github.com/patternfly/patternfly-react/commit/bae4fc36aa39007d9474236cbada62ac55a27989))

# [6.0.0-prerelease.36](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.35...@patternfly/react-integration@6.0.0-prerelease.36) (2025-05-15)

**Note:** Version bump only for package @patternfly/react-integration

# [6.0.0-prerelease.35](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.34...@patternfly/react-integration@6.0.0-prerelease.35) (2025-04-29)

**Note:** Version bump only for package @patternfly/react-integration

# [6.0.0-prerelease.34](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.33...@patternfly/react-integration@6.0.0-prerelease.34) (2025-04-23)

### Bug Fixes

- **Truncate, Progress:** enable truncated tooltip via keyboard ([#11731](https://github.com/patternfly/patternfly-react/issues/11731)) ([dffaa90](https://github.com/patternfly/patternfly-react/commit/dffaa90933fe7552dfece930ff71d190664c409a))

# [6.0.0-prerelease.33](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.32...@patternfly/react-integration@6.0.0-prerelease.33) (2025-04-21)

**Note:** Version bump only for package @patternfly/react-integration

# [6.0.0-prerelease.32](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.31...@patternfly/react-integration@6.0.0-prerelease.32) (2025-04-11)

**Note:** Version bump only for package @patternfly/react-integration

# [6.0.0-prerelease.31](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.30...@patternfly/react-integration@6.0.0-prerelease.31) (2025-03-20)

### Bug Fixes

- **deps:** Apply JSX tranform changes to missed demos and examples ([#11679](https://github.com/patternfly/patternfly-react/issues/11679)) ([546aaa1](https://github.com/patternfly/patternfly-react/commit/546aaa163f9a4cdb3649190783e5d9d5f32b9b6a))
- Updated demo app version. ([0501bfb](https://github.com/patternfly/patternfly-react/commit/0501bfb8273e50b16c131adbc7b969cd75c2b646))

### Features

- **Alert:** added animations ([#11495](https://github.com/patternfly/patternfly-react/issues/11495)) ([74dd258](https://github.com/patternfly/patternfly-react/commit/74dd258abb9f329dc2fc3fcaaa6fc4de460fc088))

# [6.0.0-prerelease.30](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.29...@patternfly/react-integration@6.0.0-prerelease.30) (2025-03-12)

### Bug Fixes

- **deps:** update react-router monorepo to ^7.3.0 ([#11627](https://github.com/patternfly/patternfly-react/issues/11627)) ([4cd79ef](https://github.com/patternfly/patternfly-react/commit/4cd79efece78bceeae4712f2bcd9c61ed74b9d78))

# [6.0.0-prerelease.29](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.28...@patternfly/react-integration@6.0.0-prerelease.29) (2025-03-11)

**Note:** Version bump only for package @patternfly/react-integration

# [6.0.0-prerelease.28](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.27...@patternfly/react-integration@6.0.0-prerelease.28) (2025-03-05)

**Note:** Version bump only for package @patternfly/react-integration

# [6.0.0-prerelease.27](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.26...@patternfly/react-integration@6.0.0-prerelease.27) (2025-03-04)

**Note:** Version bump only for package @patternfly/react-integration

# [6.0.0-prerelease.26](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.25...@patternfly/react-integration@6.0.0-prerelease.26) (2025-02-25)

**Note:** Version bump only for package @patternfly/react-integration

# [6.0.0-prerelease.25](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.24...@patternfly/react-integration@6.0.0-prerelease.25) (2025-02-24)

**Note:** Version bump only for package @patternfly/react-integration

# [6.0.0-prerelease.24](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.23...@patternfly/react-integration@6.0.0-prerelease.24) (2025-02-12)

**Note:** Version bump only for package @patternfly/react-integration

# [6.0.0-prerelease.23](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.22...@patternfly/react-integration@6.0.0-prerelease.23) (2025-02-10)

**Note:** Version bump only for package @patternfly/react-integration

# [6.0.0-prerelease.22](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.21...@patternfly/react-integration@6.0.0-prerelease.22) (2025-01-21)

**Note:** Version bump only for package @patternfly/react-integration

# [6.0.0-prerelease.21](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.20...@patternfly/react-integration@6.0.0-prerelease.21) (2025-01-14)

**Note:** Version bump only for package @patternfly/react-integration

# [6.0.0-prerelease.20](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.19...@patternfly/react-integration@6.0.0-prerelease.20) (2025-01-06)

# 6.1.0 (2025-01-06)

### Bug Fixes

- **test:** Disable failing cypress test ([#11380](https://github.com/patternfly/patternfly-react/issues/11380)) ([e02c093](https://github.com/patternfly/patternfly-react/commit/e02c093f47c0f40f02f40ab80b54fa1a07f9b00b))

# [6.0.0-prerelease.19](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.18...@patternfly/react-integration@6.0.0-prerelease.19) (2024-12-19)

**Note:** Version bump only for package @patternfly/react-integration

# [6.0.0-prerelease.18](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.17...@patternfly/react-integration@6.0.0-prerelease.18) (2024-12-18)

**Note:** Version bump only for package @patternfly/react-integration

# [6.0.0-prerelease.17](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.16...@patternfly/react-integration@6.0.0-prerelease.17) (2024-11-15)

**Note:** Version bump only for package @patternfly/react-integration

# [6.0.0-prerelease.16](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.15...@patternfly/react-integration@6.0.0-prerelease.16) (2024-11-14)

**Note:** Version bump only for package @patternfly/react-integration

# [6.0.0-prerelease.15](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.14...@patternfly/react-integration@6.0.0-prerelease.15) (2024-11-06)

**Note:** Version bump only for package @patternfly/react-integration

# [6.0.0-prerelease.14](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.13...@patternfly/react-integration@6.0.0-prerelease.14) (2024-10-30)

### Bug Fixes

- **DualListSelector example:** improved behaviour when filter is applied ([#11097](https://github.com/patternfly/patternfly-react/issues/11097)) ([b146983](https://github.com/patternfly/patternfly-react/commit/b146983291454cd64099e9a10a2ccb6ad249a920))

# [6.0.0-prerelease.13](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.12...@patternfly/react-integration@6.0.0-prerelease.13) (2024-10-23)

### Bug Fixes

- **Select/Dropdown:** updated autofocus to false by default in v6 ([#11115](https://github.com/patternfly/patternfly-react/issues/11115)) ([2b2bc35](https://github.com/patternfly/patternfly-react/commit/2b2bc35d3da32c662050645838a903bf479d58fc))

# [6.0.0-prerelease.12](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.11...@patternfly/react-integration@6.0.0-prerelease.12) (2024-10-02)

### Bug Fixes

- **Menu toggle:** Remove pf-m-action modifier ([#11096](https://github.com/patternfly/patternfly-react/issues/11096)) ([fe6871c](https://github.com/patternfly/patternfly-react/commit/fe6871cf3063eab33dc572f30a57c52e84f34131))

# [6.0.0-prerelease.11](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.10...@patternfly/react-integration@6.0.0-prerelease.11) (2024-09-26)

**Note:** Version bump only for package @patternfly/react-integration

# [6.0.0-prerelease.10](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.9...@patternfly/react-integration@6.0.0-prerelease.10) (2024-09-26)

### Bug Fixes

- **datalist:** actions wrapper ([#10939](https://github.com/patternfly/patternfly-react/issues/10939)) ([833465f](https://github.com/patternfly/patternfly-react/commit/833465f0ea0ef48cd3a02e307c0dd559a8f4e880))

# [6.0.0-prerelease.9](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.8...@patternfly/react-integration@6.0.0-prerelease.9) (2024-09-24)

**Note:** Version bump only for package @patternfly/react-integration

# [6.0.0-prerelease.8](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.7...@patternfly/react-integration@6.0.0-prerelease.8) (2024-09-23)

**Note:** Version bump only for package @patternfly/react-integration

# [6.0.0-prerelease.7](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.6...@patternfly/react-integration@6.0.0-prerelease.7) (2024-09-20)

**Note:** Version bump only for package @patternfly/react-integration

# [6.0.0-prerelease.6](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.5...@patternfly/react-integration@6.0.0-prerelease.6) (2024-09-20)

**Note:** Version bump only for package @patternfly/react-integration

# [6.0.0-prerelease.5](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.4...@patternfly/react-integration@6.0.0-prerelease.5) (2024-09-18)

### Bug Fixes

- **generate tokens:** prefix tokens with a t\_ ([#11002](https://github.com/patternfly/patternfly-react/issues/11002)) ([0dac6b8](https://github.com/patternfly/patternfly-react/commit/0dac6b88b9f560975627c80c6e8ab816d8b78ac9))

# [6.0.0-prerelease.4](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.3...@patternfly/react-integration@6.0.0-prerelease.4) (2024-09-13)

**Note:** Version bump only for package @patternfly/react-integration

# [6.0.0-prerelease.3](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.2...@patternfly/react-integration@6.0.0-prerelease.3) (2024-09-12)

### Features

- **DualListSelector:** new demos and integration tests ([#10829](https://github.com/patternfly/patternfly-react/issues/10829)) ([09d72ea](https://github.com/patternfly/patternfly-react/commit/09d72eaf058fe8e5be2884f8075f443b5576cb4d))

# [6.0.0-prerelease.2](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-prerelease.1...@patternfly/react-integration@6.0.0-prerelease.2) (2024-09-11)

**Note:** Version bump only for package @patternfly/react-integration

# [6.0.0-prerelease.1](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-alpha.51...@patternfly/react-integration@6.0.0-prerelease.1) (2024-09-07)

### Bug Fixes

- **expandable section:** update to use <Button> for toggle ([#10891](https://github.com/patternfly/patternfly-react/issues/10891)) ([fd9ce14](https://github.com/patternfly/patternfly-react/commit/fd9ce14865230be76444ef025def90a5619d464e))

# [6.0.0-alpha.51](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-alpha.50...@patternfly/react-integration@6.0.0-alpha.51) (2024-08-27)

**Note:** Version bump only for package @patternfly/react-integration

# [6.0.0-alpha.50](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-alpha.49...@patternfly/react-integration@6.0.0-alpha.50) (2024-08-19)

### Bug Fixes

- **Card:** updated markup for actionable cards ([#10859](https://github.com/patternfly/patternfly-react/issues/10859)) ([d58b051](https://github.com/patternfly/patternfly-react/commit/d58b051f8d736f55580e3df9fc2bbddf479af099))

# [6.0.0-alpha.49](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-alpha.48...@patternfly/react-integration@6.0.0-alpha.49) (2024-08-12)

### Bug Fixes

- **Menu:** update drilldown transition event handler ([#10839](https://github.com/patternfly/patternfly-react/issues/10839)) ([3601778](https://github.com/patternfly/patternfly-react/commit/360177842e7659d8f5f9bf1dcd6d5de18a46d3f0))

# [6.0.0-alpha.48](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-alpha.47...@patternfly/react-integration@6.0.0-alpha.48) (2024-08-08)

**Note:** Version bump only for package @patternfly/react-integration

# [6.0.0-alpha.47](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-alpha.46...@patternfly/react-integration@6.0.0-alpha.47) (2024-07-29)

### Features

- **Masthead:** Updates for new masthead structure in Penta ([#10809](https://github.com/patternfly/patternfly-react/issues/10809)) ([266ee47](https://github.com/patternfly/patternfly-react/commit/266ee476020c51487ae4d426fdab90efc73d12f1))

# [6.0.0-alpha.46](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-alpha.45...@patternfly/react-integration@6.0.0-alpha.46) (2024-07-22)

### Features

- **misc:** Replace Text, TextContent, TextList and TextListItem with Content - PART 2 ([#10643](https://github.com/patternfly/patternfly-react/issues/10643)) ([f067b7c](https://github.com/patternfly/patternfly-react/commit/f067b7c12850251704ba8ca7e6acb03730d371af))

# [6.0.0-alpha.45](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-alpha.44...@patternfly/react-integration@6.0.0-alpha.45) (2024-07-22)

### Features

- **Page:** support page fill ([#10760](https://github.com/patternfly/patternfly-react/issues/10760)) ([850bd46](https://github.com/patternfly/patternfly-react/commit/850bd4631d4f5845c627ebb2cb86a6b1524d6ffc))

# [6.0.0-alpha.44](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-alpha.43...@patternfly/react-integration@6.0.0-alpha.44) (2024-07-17)

**Note:** Version bump only for package @patternfly/react-integration

# [6.0.0-alpha.43](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-alpha.42...@patternfly/react-integration@6.0.0-alpha.43) (2024-07-15)

### Features

- **Page:** updated logic to allow section grouping ([#10650](https://github.com/patternfly/patternfly-react/issues/10650)) ([b9181ae](https://github.com/patternfly/patternfly-react/commit/b9181aee9c5649912a52bc3479e9af84a1252aa2))

# [6.0.0-alpha.42](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-alpha.41...@patternfly/react-integration@6.0.0-alpha.42) (2024-07-15)

### Bug Fixes

- **Toolbar:** updated for parity with Core updates ([#10674](https://github.com/patternfly/patternfly-react/issues/10674)) ([d508325](https://github.com/patternfly/patternfly-react/commit/d50832554af01c6beeb3a5a03f2cdfb41daffbf4))

# [6.0.0-alpha.41](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-alpha.40...@patternfly/react-integration@6.0.0-alpha.41) (2024-07-11)

### Features

- **Dropdown:** allowed preventing autofocus v6 ([#10708](https://github.com/patternfly/patternfly-react/issues/10708)) ([9fe5e5a](https://github.com/patternfly/patternfly-react/commit/9fe5e5aa4fc3f1c49a5aae61bf4480f80b197eb3))

# [6.0.0-alpha.40](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-alpha.39...@patternfly/react-integration@6.0.0-alpha.40) (2024-07-08)

**Note:** Version bump only for package @patternfly/react-integration

# [6.0.0-alpha.39](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-alpha.38...@patternfly/react-integration@6.0.0-alpha.39) (2024-07-03)

### Bug Fixes

- **Switch:** updated a11y by removing dynamic labeling ([#10646](https://github.com/patternfly/patternfly-react/issues/10646)) ([730ac69](https://github.com/patternfly/patternfly-react/commit/730ac69eb9544d4831b9eb5fac693fc76a5fe06c))

# [6.0.0-alpha.38](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-alpha.37...@patternfly/react-integration@6.0.0-alpha.38) (2024-07-02)

### Features

- **Button:** add text wrapper, update icon usage ([#10663](https://github.com/patternfly/patternfly-react/issues/10663)) ([eca5878](https://github.com/patternfly/patternfly-react/commit/eca58789d1f07753657372a46a20c147f984b998))

# [6.0.0-alpha.37](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-alpha.36...@patternfly/react-integration@6.0.0-alpha.37) (2024-07-02)

### Bug Fixes

- **Popper:** updated default appendTo prop for Penta styling ([#10675](https://github.com/patternfly/patternfly-react/issues/10675)) ([daef02d](https://github.com/patternfly/patternfly-react/commit/daef02d52c194ebd9c4a0863629e82367177c4f5))

# [6.0.0-alpha.36](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-alpha.35...@patternfly/react-integration@6.0.0-alpha.36) (2024-06-26)

### Features

- **Banner,Label:** rename cyan/gold to teal/yellow ([#10661](https://github.com/patternfly/patternfly-react/issues/10661)) ([3e76f17](https://github.com/patternfly/patternfly-react/commit/3e76f173f62b0f5e9aef9e43c597ae5b7fffee92))

# [6.0.0-alpha.35](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-alpha.34...@patternfly/react-integration@6.0.0-alpha.35) (2024-06-25)

**Note:** Version bump only for package @patternfly/react-integration

# [6.0.0-alpha.34](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-alpha.33...@patternfly/react-integration@6.0.0-alpha.34) (2024-06-20)

### Features

- **DualListSelector:** promoted Next version ([#10359](https://github.com/patternfly/patternfly-react/issues/10359)) ([b395cc4](https://github.com/patternfly/patternfly-react/commit/b395cc44586a20a9f124e1d56d2c8021a64602db))

# [6.0.0-alpha.33](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-alpha.32...@patternfly/react-integration@6.0.0-alpha.33) (2024-06-06)

### Features

- **Modal:** promoted next version ([#10358](https://github.com/patternfly/patternfly-react/issues/10358)) ([3fabe0e](https://github.com/patternfly/patternfly-react/commit/3fabe0eb5fb41d33b520f154bbb3021bf2cb5fe4))

# [6.0.0-alpha.32](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-alpha.31...@patternfly/react-integration@6.0.0-alpha.32) (2024-06-04)

### Features

- **Page:** rename 'header' prop to 'masthead' ([#10454](https://github.com/patternfly/patternfly-react/issues/10454)) ([37dd6ad](https://github.com/patternfly/patternfly-react/commit/37dd6add1987568f83edf3c0669f058ec58461d5))

# [6.0.0-alpha.31](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-alpha.30...@patternfly/react-integration@6.0.0-alpha.31) (2024-05-31)

### Features

- **Wizard:** use height token to set height ([#10332](https://github.com/patternfly/patternfly-react/issues/10332)) ([2b5a598](https://github.com/patternfly/patternfly-react/commit/2b5a598e9b49f052d36b675a0929d5f679af6cca))

# [6.0.0-alpha.30](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-alpha.29...@patternfly/react-integration@6.0.0-alpha.30) (2024-05-21)

### Features

- **misc, TextContent:** update core version & text content updates ([#10378](https://github.com/patternfly/patternfly-react/issues/10378)) ([1f1b93c](https://github.com/patternfly/patternfly-react/commit/1f1b93c9f5f8bfeb686f7344bfc70152d5453df1))

# [6.0.0-alpha.29](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-alpha.28...@patternfly/react-integration@6.0.0-alpha.29) (2024-05-16)

### Features

- **Select, dropdown, options menu, contect selector, app launcher:** Remove deprecated components ([#10345](https://github.com/patternfly/patternfly-react/issues/10345)) ([c7ed423](https://github.com/patternfly/patternfly-react/commit/c7ed423f4bcabee9bc4123ac92dac9f19a8bb808))

# [6.0.0-alpha.28](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-alpha.27...@patternfly/react-integration@6.0.0-alpha.28) (2024-05-15)

### Bug Fixes

- **Toolbar:** update align prop type to alignEnd, alignStart ([#10366](https://github.com/patternfly/patternfly-react/issues/10366)) ([83db357](https://github.com/patternfly/patternfly-react/commit/83db3575d63e16fd883410188c7516efa2e62d62))

# 6.0.0-alpha.27 (2024-05-08)

### Features

- **FormGroupLabelHelp:** update markup to match core ([#10248](https://github.com/patternfly/patternfly-react/issues/10248)) ([113ff75](https://github.com/patternfly/patternfly-react/commit/113ff758d1165bc843758f7cc5b6042d7eb9dc4e))

# 6.0.0-alpha.26 (2024-04-22)

**Note:** Version bump only for package @patternfly/react-integration

## 5.1.1-prerelease.22 (2024-03-28)

### Bug Fixes

- **Card:** updated v5 logic to prevent unclickable cards ([#10202](https://github.com/patternfly/patternfly-react/issues/10202)) ([779e288](https://github.com/patternfly/patternfly-react/commit/779e288960dae6a2ea5198d948a668d3fb7b6cdc))

## 5.1.1-prerelease.21 (2024-03-26)

### Bug Fixes

- **Table:** updated a11y for empty/nontext Th components ([#10152](https://github.com/patternfly/patternfly-react/issues/10152)) ([48d8140](https://github.com/patternfly/patternfly-react/commit/48d8140d5ecd1d467b88c573cffbd86183dce898))

## 5.1.1-prerelease.20 (2024-02-08)

### Bug Fixes

- demo-app version bump issue ([#10072](https://github.com/patternfly/patternfly-react/issues/10072)) ([8af8de0](https://github.com/patternfly/patternfly-react/commit/8af8de089f7174665fd1e78f08bb19f1270a8076))

## [5.1.1-prerelease.19](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@5.1.1-prerelease.18...@patternfly/react-integration@5.1.1-prerelease.19) (2024-01-05)

### Features

- **Modal next:** Introduce a next composable Modal ([#9852](https://github.com/patternfly/patternfly-react/issues/9852)) ([7ec2aff](https://github.com/patternfly/patternfly-react/commit/7ec2aff1d8dd1c6762c9d912c1d2e60a6b604ddd))

## 5.1.1-prerelease.18 (2024-01-05)

### Features

- **CodeEditor:** use new monaco package ([#9842](https://github.com/patternfly/patternfly-react/issues/9842)) ([54dd134](https://github.com/patternfly/patternfly-react/commit/54dd134d6c67c4fc1d7630fd1e7c718f66061342))

## 5.1.1-prerelease.17 (2024-01-03)

### Bug Fixes

- **Chip:** prevented duplicate ID being applied ([#9886](https://github.com/patternfly/patternfly-react/issues/9886)) ([91b7d62](https://github.com/patternfly/patternfly-react/commit/91b7d62cb3503f65371ab27478ffff091262b04b))

## 5.1.1-prerelease.16 (2023-12-14)

### Bug Fixes

- **MenuItem:** Add download to MenuItem ([#9892](https://github.com/patternfly/patternfly-react/issues/9892)) ([2afb5fd](https://github.com/patternfly/patternfly-react/commit/2afb5fdeb8ade43aee6dadaccf9067a0939212c7))

## 5.1.1-prerelease.15 (2023-11-14)

**Note:** Version bump only for package @patternfly/react-integration

# [6.0.0-alpha.25](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-alpha.24...@patternfly/react-integration@6.0.0-alpha.25) (2024-03-29)

### Bug Fixes

- **Card:** updated logic to prevent unclickable cards ([#10168](https://github.com/patternfly/patternfly-react/issues/10168)) ([87a6a66](https://github.com/patternfly/patternfly-react/commit/87a6a667b5827534a3c8115b3aff35aa83ce289c))

# 6.0.0-alpha.24 (2024-03-27)

### Features

- **Page,Drawer:** core bump and updates ([#10211](https://github.com/patternfly/patternfly-react/issues/10211)) ([8210248](https://github.com/patternfly/patternfly-react/commit/82102488317d9b263f8075179f8fecfc365cc647))

# 6.0.0-alpha.23 (2024-03-26)

**Note:** Version bump only for package @patternfly/react-integration

# [6.0.0-alpha.22](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-alpha.21...@patternfly/react-integration@6.0.0-alpha.22) (2024-03-12)

### Features

- **MenuToggle:** consumed Penta updates ([#10097](https://github.com/patternfly/patternfly-react/issues/10097)) ([4a8f446](https://github.com/patternfly/patternfly-react/commit/4a8f4464e715ac93bc72a8c10f38eb2fc13caa95))

# [6.0.0-alpha.21](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-alpha.20...@patternfly/react-integration@6.0.0-alpha.21) (2024-03-08)

**Note:** Version bump only for package @patternfly/react-integration

# [6.0.0-alpha.20](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-alpha.19...@patternfly/react-integration@6.0.0-alpha.20) (2024-03-01)

### Features

- **Menu:** consumed Penta updates ([#10089](https://github.com/patternfly/patternfly-react/issues/10089)) ([fdbac3d](https://github.com/patternfly/patternfly-react/commit/fdbac3d9c83c043b996fac484a5afca1d56bc48f))

# 6.0.0-alpha.19 (2024-02-28)

### Features

- **Label:** add status, update examples ([#10073](https://github.com/patternfly/patternfly-react/issues/10073)) ([a2c8c7d](https://github.com/patternfly/patternfly-react/commit/a2c8c7d53d1787d438540be191a8c9f3b185819c))

# 6.0.0-alpha.18 (2024-02-21)

**Note:** Version bump only for package @patternfly/react-integration

# [6.0.0-alpha.17](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-alpha.16...@patternfly/react-integration@6.0.0-alpha.17) (2024-02-19)

### Features

- **Chip:** use Label internally, deprecate Chip ([#10049](https://github.com/patternfly/patternfly-react/issues/10049)) ([5cdb725](https://github.com/patternfly/patternfly-react/commit/5cdb72536f8dd291e42be09bc6454ac591adc606))

# 6.0.0-alpha.16 (2024-02-16)

### Features

- **CodeEditor,Divider:** consume penta & update core version ([#10081](https://github.com/patternfly/patternfly-react/issues/10081)) ([addda04](https://github.com/patternfly/patternfly-react/commit/addda044d7f6d91f3511c7a769b2707140df86d4))

# 6.0.0-alpha.15 (2024-02-13)

### Features

- **Card:** Consume penta tokens ([#10056](https://github.com/patternfly/patternfly-react/issues/10056)) ([0ccdef5](https://github.com/patternfly/patternfly-react/commit/0ccdef528c694e628606b0d6a18ad71dab30297c))

# 6.0.0-alpha.14 (2024-02-01)

### Features

- **Drawer:** consumed Penta updates ([#10036](https://github.com/patternfly/patternfly-react/issues/10036)) ([4dba57a](https://github.com/patternfly/patternfly-react/commit/4dba57a2b2a0c9e19747ba80dbe8e593bb2a7721))

# 6.0.0-alpha.13 (2024-01-31)

### Features

- **Tabs:** consumed Penta updates ([#10044](https://github.com/patternfly/patternfly-react/issues/10044)) ([8fdd83e](https://github.com/patternfly/patternfly-react/commit/8fdd83eb76c216c26c3f06318b7c32030d736d4f))

# [6.0.0-alpha.12](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-alpha.11...@patternfly/react-integration@6.0.0-alpha.12) (2024-01-31)

### Features

- **NotificationBadge:** refactor to use status buttons for penta ([#10020](https://github.com/patternfly/patternfly-react/issues/10020)) ([719f078](https://github.com/patternfly/patternfly-react/commit/719f07879b14a4c1b9c2712a6ea1f834a58b4b63))

# 6.0.0-alpha.11 (2024-01-26)

### Features

- **Toolbar:** consumed Penta updates ([#10042](https://github.com/patternfly/patternfly-react/issues/10042)) ([d6db0a5](https://github.com/patternfly/patternfly-react/commit/d6db0a52ca36bc99d20844d60d748fc937aa1db4))

# 6.0.0-alpha.10 (2024-01-18)

**Note:** Version bump only for package @patternfly/react-integration

# 6.0.0-alpha.9 (2024-01-17)

### Features

- **EmptyState:** update EmptyState with updates for penta ([#9947](https://github.com/patternfly/patternfly-react/issues/9947)) ([07cbb82](https://github.com/patternfly/patternfly-react/commit/07cbb8270627f9ade299b90eaf5dd4fd5fa6fe95))

# [6.0.0-alpha.8](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-alpha.7...@patternfly/react-integration@6.0.0-alpha.8) (2024-01-16)

### Features

- **Navigation:** Penta updates for nav ([#9948](https://github.com/patternfly/patternfly-react/issues/9948)) ([dba392d](https://github.com/patternfly/patternfly-react/commit/dba392d62011b1adc38ab0d22a2ad91e0e7d2a2e))

# [6.0.0-alpha.7](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-alpha.6...@patternfly/react-integration@6.0.0-alpha.7) (2024-01-12)

### Features

- **BackgroundImage:** update background image for penta ([#9964](https://github.com/patternfly/patternfly-react/issues/9964)) ([a2a0630](https://github.com/patternfly/patternfly-react/commit/a2a06301257d79bb6df178eeb5304c3c627fa429))

# [6.0.0-alpha.6](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-alpha.5...@patternfly/react-integration@6.0.0-alpha.6) (2024-01-04)

### Features

- **Accordion:** pulled in Penta updates ([#9876](https://github.com/patternfly/patternfly-react/issues/9876)) ([e7ebfc0](https://github.com/patternfly/patternfly-react/commit/e7ebfc06223be49c2fdb56da4f9268b13c9bc9f5))

# 6.0.0-alpha.5 (2024-01-04)

**Note:** Version bump only for package @patternfly/react-integration

# 6.0.0-alpha.4 (2023-12-20)

**Note:** Version bump only for package @patternfly/react-integration

# [6.0.0-alpha.3](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@6.0.0-alpha.2...@patternfly/react-integration@6.0.0-alpha.3) (2023-12-04)

**Note:** Version bump only for package @patternfly/react-integration

# [6.0.0-alpha.2](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@5.1.1-prerelease.14...@patternfly/react-integration@6.0.0-alpha.2) (2023-11-16)

### Bug Fixes

- demo-app update package.json version number ([8e14e1c](https://github.com/patternfly/patternfly-react/commit/8e14e1cc3dfbb9758210e9ebb914457bf9e34a29))

### Reverts

- Revert "Merge remote-tracking branch 'upstream/main' into v6" (#9791) ([b7e8065](https://github.com/patternfly/patternfly-react/commit/b7e80650d3e4cad7a657f6e5a3177485ca4f8c26)), closes [#9791](https://github.com/patternfly/patternfly-react/issues/9791)

# [6.0.0-alpha.1](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@5.1.1-prerelease.7...@patternfly/react-integration@6.0.0-alpha.1) (2023-09-29)

### Bug Fixes

- Release alphas from v6 and rebase from main ([#9692](https://github.com/patternfly/patternfly-react/issues/9692)) ([bb022ff](https://github.com/patternfly/patternfly-react/commit/bb022ffc65da8e8c5b5c984412f936cea9424676)), closes [#9651](https://github.com/patternfly/patternfly-react/issues/9651) [#9627](https://github.com/patternfly/patternfly-react/issues/9627) [#9555](https://github.com/patternfly/patternfly-react/issues/9555) [#9543](https://github.com/patternfly/patternfly-react/issues/9543) [#9578](https://github.com/patternfly/patternfly-react/issues/9578) [#9519](https://github.com/patternfly/patternfly-react/issues/9519) [#9603](https://github.com/patternfly/patternfly-react/issues/9603) [#9655](https://github.com/patternfly/patternfly-react/issues/9655) [#9614](https://github.com/patternfly/patternfly-react/issues/9614) [#9606](https://github.com/patternfly/patternfly-react/issues/9606) [#9628](https://github.com/patternfly/patternfly-react/issues/9628) [#9635](https://github.com/patternfly/patternfly-react/issues/9635) [#9649](https://github.com/patternfly/patternfly-react/issues/9649) [#9642](https://github.com/patternfly/patternfly-react/issues/9642) [#9633](https://github.com/patternfly/patternfly-react/issues/9633) [#9637](https://github.com/patternfly/patternfly-react/issues/9637) [#9584](https://github.com/patternfly/patternfly-react/issues/9584) [#9284](https://github.com/patternfly/patternfly-react/issues/9284)

## [5.1.1-prerelease.8](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@5.1.1-prerelease.7...@patternfly/react-integration@5.1.1-prerelease.8) (2023-09-20)

### Bug Fixes

- **Modal:** Prevent duplicate ids within Modal ([#9555](https://github.com/patternfly/patternfly-react/issues/9555)) ([2953b78](https://github.com/patternfly/patternfly-react/commit/2953b78290b3baee6cf506303c88dfc5ab9d0329))

## 5.1.1-prerelease.15 (2023-11-14)

**Note:** Version bump only for package @patternfly/react-integration

## 5.1.1-prerelease.16 (2023-12-14)

### Bug Fixes

- **MenuItem:** Add download to MenuItem ([#9892](https://github.com/patternfly/patternfly-react/issues/9892)) ([2afb5fd](https://github.com/patternfly/patternfly-react/commit/2afb5fdeb8ade43aee6dadaccf9067a0939212c7))

## 5.1.1-prerelease.15 (2023-11-14)

**Note:** Version bump only for package @patternfly/react-integration

## [5.1.1-prerelease.19](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@5.1.1-prerelease.18...@patternfly/react-integration@5.1.1-prerelease.19) (2024-01-05)

### Features

- **Modal next:** Introduce a next composable Modal ([#9852](https://github.com/patternfly/patternfly-react/issues/9852)) ([7ec2aff](https://github.com/patternfly/patternfly-react/commit/7ec2aff1d8dd1c6762c9d912c1d2e60a6b604ddd))

## 5.1.1-prerelease.18 (2024-01-05)

### Features

- **CodeEditor:** use new monaco package ([#9842](https://github.com/patternfly/patternfly-react/issues/9842)) ([54dd134](https://github.com/patternfly/patternfly-react/commit/54dd134d6c67c4fc1d7630fd1e7c718f66061342))

## 5.1.1-prerelease.17 (2024-01-03)

### Bug Fixes

- **Chip:** prevented duplicate ID being applied ([#9886](https://github.com/patternfly/patternfly-react/issues/9886)) ([91b7d62](https://github.com/patternfly/patternfly-react/commit/91b7d62cb3503f65371ab27478ffff091262b04b))

## 5.1.1-prerelease.16 (2023-12-14)

### Bug Fixes

- **MenuItem:** Add download to MenuItem ([#9892](https://github.com/patternfly/patternfly-react/issues/9892)) ([2afb5fd](https://github.com/patternfly/patternfly-react/commit/2afb5fdeb8ade43aee6dadaccf9067a0939212c7))

## 5.1.1-prerelease.15 (2023-11-14)

**Note:** Version bump only for package @patternfly/react-integration

## 5.1.1-prerelease.20 (2024-02-08)

### Bug Fixes

- demo-app version bump issue ([#10072](https://github.com/patternfly/patternfly-react/issues/10072)) ([8af8de0](https://github.com/patternfly/patternfly-react/commit/8af8de089f7174665fd1e78f08bb19f1270a8076))

## [5.1.1-prerelease.19](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@5.1.1-prerelease.18...@patternfly/react-integration@5.1.1-prerelease.19) (2024-01-05)

### Features

- **Modal next:** Introduce a next composable Modal ([#9852](https://github.com/patternfly/patternfly-react/issues/9852)) ([7ec2aff](https://github.com/patternfly/patternfly-react/commit/7ec2aff1d8dd1c6762c9d912c1d2e60a6b604ddd))

## 5.1.1-prerelease.18 (2024-01-05)

### Features

- **CodeEditor:** use new monaco package ([#9842](https://github.com/patternfly/patternfly-react/issues/9842)) ([54dd134](https://github.com/patternfly/patternfly-react/commit/54dd134d6c67c4fc1d7630fd1e7c718f66061342))

## 5.1.1-prerelease.17 (2024-01-03)

### Bug Fixes

- **Chip:** prevented duplicate ID being applied ([#9886](https://github.com/patternfly/patternfly-react/issues/9886)) ([91b7d62](https://github.com/patternfly/patternfly-react/commit/91b7d62cb3503f65371ab27478ffff091262b04b))

## 5.1.1-prerelease.16 (2023-12-14)

### Bug Fixes

- **MenuItem:** Add download to MenuItem ([#9892](https://github.com/patternfly/patternfly-react/issues/9892)) ([2afb5fd](https://github.com/patternfly/patternfly-react/commit/2afb5fdeb8ade43aee6dadaccf9067a0939212c7))

## 5.1.1-prerelease.15 (2023-11-14)

**Note:** Version bump only for package @patternfly/react-integration

## 5.1.1-prerelease.14 (2023-10-30)

**Note:** Version bump only for package @patternfly/react-integration

## 5.1.1-prerelease.13 (2023-10-27)

**Note:** Version bump only for package @patternfly/react-integration

## [5.1.1-prerelease.12](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@5.1.1-prerelease.11...@patternfly/react-integration@5.1.1-prerelease.12) (2023-10-16)

**Note:** Version bump only for package @patternfly/react-integration

## 5.1.1-prerelease.11 (2023-10-12)

**Note:** Version bump only for package @patternfly/react-integration

## [5.1.1-prerelease.10](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@5.1.1-prerelease.9...@patternfly/react-integration@5.1.1-prerelease.10) (2023-10-09)

**Note:** Version bump only for package @patternfly/react-integration

## 5.1.1-prerelease.9 (2023-10-09)

### Bug Fixes

- **build:** Fixed version mismatch issue ([#9716](https://github.com/patternfly/patternfly-react/issues/9716)) ([58ea584](https://github.com/patternfly/patternfly-react/commit/58ea5840e7a291531d45e40b0c5d1d0cdc8093c8))

## [5.1.1-prerelease.8](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@5.1.1-prerelease.7...@patternfly/react-integration@5.1.1-prerelease.8) (2023-09-20)

### Bug Fixes

- **Modal:** Prevent duplicate ids within Modal ([#9555](https://github.com/patternfly/patternfly-react/issues/9555)) ([2953b78](https://github.com/patternfly/patternfly-react/commit/2953b78290b3baee6cf506303c88dfc5ab9d0329))

## 5.1.1-prerelease.7 (2023-09-19)

### Features

- **TextInput:** Added isStartTruncted prop and deprecated isLeftTruncted prop ([#9610](https://github.com/patternfly/patternfly-react/issues/9610)) ([b1aaf3c](https://github.com/patternfly/patternfly-react/commit/b1aaf3cb9d48aef7ca1a72977ca386a3f36eecad))

## [5.1.1-prerelease.6](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@5.1.1-prerelease.5...@patternfly/react-integration@5.1.1-prerelease.6) (2023-09-05)

### Features

- **Toolbar:** allow multiple toggle groups ([#9329](https://github.com/patternfly/patternfly-react/issues/9329)) ([b1093bf](https://github.com/patternfly/patternfly-react/commit/b1093bf0ba066a56c80667d299750cf49eb0641f))

## 5.1.1-prerelease.5 (2023-09-01)

### Features

- **Drawer:** added focustrap functionality ([#9469](https://github.com/patternfly/patternfly-react/issues/9469)) ([41fedc5](https://github.com/patternfly/patternfly-react/commit/41fedc5f707127e4316866ca8b69b4b1a2abfbb7))

## [5.1.1-prerelease.4](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@5.1.1-prerelease.3...@patternfly/react-integration@5.1.1-prerelease.4) (2023-08-30)

### Bug Fixes

- add private=true to react-integration package.json [skip-a11y] ([196a21c](https://github.com/patternfly/patternfly-react/commit/196a21cd0c0160fbab42bf6c006ad3ed30c4117c))

## [5.1.1-prerelease.3](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@5.1.1-prerelease.2...@patternfly/react-integration@5.1.1-prerelease.3) (2023-08-30)

### Bug Fixes

- try and get react-integration bumping correctly [skip-a11y] ([#9554](https://github.com/patternfly/patternfly-react/issues/9554)) ([7124af5](https://github.com/patternfly/patternfly-react/commit/7124af580994aeab735de23966c6be0fb789683e))

## [5.1.1-prerelease.2](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@5.1.1-prerelease.1...@patternfly/react-integration@5.1.1-prerelease.2) (2023-08-29)

### Bug Fixes

- turn on dry run to test removing --no-private [skip-a11y] ([#9549](https://github.com/patternfly/patternfly-react/issues/9549)) ([bf35bf9](https://github.com/patternfly/patternfly-react/commit/bf35bf94244e4f02d1186fb54cc52645f2040a73))

## 5.1.1-prerelease.1 (2023-08-29)

### Bug Fixes

- bump lerna version ([#9523](https://github.com/patternfly/patternfly-react/issues/9523)) ([386c2b3](https://github.com/patternfly/patternfly-react/commit/386c2b38c7d05529329f13c604d72082cf51fcf1))
- **Chip:** Added prop to render a badge in the chip after the text ([#9493](https://github.com/patternfly/patternfly-react/issues/9493)) ([ee6d853](https://github.com/patternfly/patternfly-react/commit/ee6d853b5f92d0a2114d7b73a76cdc1a5dd3a96d))
- **DatePicker:** error not showing on date reset by button ([#9267](https://github.com/patternfly/patternfly-react/issues/9267)) ([4fccdaf](https://github.com/patternfly/patternfly-react/commit/4fccdaf8d260ef60165837e7d493febabf53e145)), closes [#9373](https://github.com/patternfly/patternfly-react/issues/9373)

### Features

- **Modal:** added ability to customize initial focus ([#9453](https://github.com/patternfly/patternfly-react/issues/9453)) ([4f4c1d0](https://github.com/patternfly/patternfly-react/commit/4f4c1d0aacb1c16012e66d78345a4486081566d1))
- **Modal:** use css vars to set width, add maxWidth ([#9300](https://github.com/patternfly/patternfly-react/issues/9300)) ([fed8205](https://github.com/patternfly/patternfly-react/commit/fed820515c57ceed60975bd52118c23c8a1382c8))

# 5.0.0 (2023-07-27)

# 5.0.0-prerelease.3 (2023-07-12)

**Note:** Version bump only for package @patternfly/react-integration

# 5.0.0-prerelease.2 (2023-06-13)

### Bug Fixes

- **docs:** update use of deprecated tag and clean up changelogs ([#9259](https://github.com/patternfly/patternfly-react/issues/9259)) ([8de83dc](https://github.com/patternfly/patternfly-react/commit/8de83dc3b2fb88094fd3c21bda2ed6e371986cba))

# 5.0.0-prerelease.1 (2023-06-09)

**Note:** Version bump only for package @patternfly/react-integration

# 5.0.0-alpha.52 (2023-05-31)

**Note:** Version bump only for package @patternfly/react-integration

# 5.0.0-alpha.51 (2023-05-31)

### Features

- **Input group:** Simplified API ([#9176](https://github.com/patternfly/patternfly-react/issues/9176)) ([e18a351](https://github.com/patternfly/patternfly-react/commit/e18a351fac44beaf6554e76e5be9d204d6db19ce))

# 5.0.0-alpha.50 (2023-05-25)

### Features

- **Select,Dropdown:** renamed itemId prop to value ([#9175](https://github.com/patternfly/patternfly-react/issues/9175)) ([4853518](https://github.com/patternfly/patternfly-react/commit/4853518cf09f747dfec11015dd3e5dc5a7c0ed85))

# 5.0.0-alpha.49 (2023-05-18)

### Bug Fixes

- **Multiple:** update old component classnames ([#9139](https://github.com/patternfly/patternfly-react/issues/9139)) ([8fbd940](https://github.com/patternfly/patternfly-react/commit/8fbd9401cd27cb84e73722292a2765781a46a6f7))

# 5.0.0-alpha.48 (2023-05-18)

### Bug Fixes

- **Input group:** Removed variant prop from input group text ([#9147](https://github.com/patternfly/patternfly-react/issues/9147)) ([ba354a5](https://github.com/patternfly/patternfly-react/commit/ba354a5a20ce0ac5ed22080b78d50c45b7ca7a9a))

# 5.0.0-alpha.47 (2023-05-18)

### Features

- **FormControls:** updated logic for rendering icons ([#9132](https://github.com/patternfly/patternfly-react/issues/9132)) ([9f4863f](https://github.com/patternfly/patternfly-react/commit/9f4863f3251e365142c44aace2c1aeba57ba6b3a))

# [5.0.0-alpha.46](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@5.0.0-alpha.45...@patternfly/react-integration@5.0.0-alpha.46) (2023-05-17)

**Note:** Version bump only for package @patternfly/react-integration

# 5.0.0-alpha.45 (2023-05-17)

### Bug Fixes

- **Wizard:** update close button and title structures ([#9041](https://github.com/patternfly/patternfly-react/issues/9041)) ([2ac733b](https://github.com/patternfly/patternfly-react/commit/2ac733bfcf026bb54287f9e6509d00c988d89a92))

# 5.0.0-alpha.44 (2023-05-16)

### Bug Fixes

- **FileUpload:** added DropEvent as a type exported from react-core ([#9120](https://github.com/patternfly/patternfly-react/issues/9120)) ([ce090b0](https://github.com/patternfly/patternfly-react/commit/ce090b01dc63a9d9ca88da78e62fa64eee182a0d))

# [5.0.0-alpha.43](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@5.0.0-alpha.42...@patternfly/react-integration@5.0.0-alpha.43) (2023-05-11)

### Bug Fixes

- **DataList, Table:** update hoverable reference to clickable ([#9083](https://github.com/patternfly/patternfly-react/issues/9083)) ([c03a019](https://github.com/patternfly/patternfly-react/commit/c03a01918b2d947d297ea5598cb79c607fd849e8))

# [5.0.0-alpha.42](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@5.0.0-alpha.41...@patternfly/react-integration@5.0.0-alpha.42) (2023-05-11)

### Bug Fixes

- **keyboard:** Notification drawer and tree view keyboard handling bug fixes ([#9071](https://github.com/patternfly/patternfly-react/issues/9071)) ([8d1ee08](https://github.com/patternfly/patternfly-react/commit/8d1ee089d6895ce2c15fcdf7fbb0d79cffe802d4))
- **LoginForm:** updated param order ([#8996](https://github.com/patternfly/patternfly-react/issues/8996)) ([ae2b234](https://github.com/patternfly/patternfly-react/commit/ae2b234f360a0340c8d2a3f1af335b7d626f6ece))

# [5.0.0-alpha.41](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@5.0.0-alpha.40...@patternfly/react-integration@5.0.0-alpha.41) (2023-05-09)

### Features

- **Switch:** make event first param for onChange prop ([#9037](https://github.com/patternfly/patternfly-react/issues/9037)) ([5dcc90f](https://github.com/patternfly/patternfly-react/commit/5dcc90f3c4608517f829b8d8fd40f659c274e393))

# [5.0.0-alpha.40](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@5.0.0-alpha.39...@patternfly/react-integration@5.0.0-alpha.40) (2023-05-09)

### Features

- **Table:** swapped param order of onSelect and clearSelection ([#9057](https://github.com/patternfly/patternfly-react/issues/9057)) ([93baf4e](https://github.com/patternfly/patternfly-react/commit/93baf4eae9e289c403cab160a75f2157e0a6f6d8))
- **TextInput:** swapped onChange params ([#9064](https://github.com/patternfly/patternfly-react/issues/9064)) ([8735c8d](https://github.com/patternfly/patternfly-react/commit/8735c8d6260c9faf5416946d7cba4d91d33e8ff9))

# 5.0.0-alpha.39 (2023-05-08)

### Features

- **Tabs:** added event to onToggle ([#9059](https://github.com/patternfly/patternfly-react/issues/9059)) ([54b7f9a](https://github.com/patternfly/patternfly-react/commit/54b7f9a8ba669a045c106284637890eda813240d))
- **TextArea:** swapped onChange params ([#9061](https://github.com/patternfly/patternfly-react/issues/9061)) ([b48192e](https://github.com/patternfly/patternfly-react/commit/b48192edd72b790fd4c4864123f24f4e7ff8377e))
- **ToggleGroupItem:** swapped onChange params ([#9067](https://github.com/patternfly/patternfly-react/issues/9067)) ([0959498](https://github.com/patternfly/patternfly-react/commit/09594984136cbae6a0f6d4223168dedb4e73c9b0))

# 5.0.0-alpha.38 (2023-05-05)

### Bug Fixes

- **deps:** updated Core for v5 versioning ([#9075](https://github.com/patternfly/patternfly-react/issues/9075)) ([3879fc7](https://github.com/patternfly/patternfly-react/commit/3879fc757aefeed80b0694365aa20d5ca856a797))

# 5.0.0-alpha.37 (2023-05-04)

### Bug Fixes

- **Nav:** updated onSelect and onToggle param order ([#8997](https://github.com/patternfly/patternfly-react/issues/8997)) ([70a0f64](https://github.com/patternfly/patternfly-react/commit/70a0f6410b1021fae99aa55adbef54f6536cf342))

# 5.0.0-alpha.36 (2023-05-03)

**Note:** Version bump only for package @patternfly/react-integration

# 5.0.0-alpha.35 (2023-05-03)

### Bug Fixes

- **Slider:** added event param to onChange ([#8970](https://github.com/patternfly/patternfly-react/issues/8970)) ([222e8f9](https://github.com/patternfly/patternfly-react/commit/222e8f9241008f1cc65639cbfdc5f47a5615af76))

# [5.0.0-alpha.34](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@5.0.0-alpha.33...@patternfly/react-integration@5.0.0-alpha.34) (2023-05-02)

**Note:** Version bump only for package @patternfly/react-integration

# 5.0.0-alpha.33 (2023-04-28)

### Features

- **PageSidebar:** added SidebarBody component ([#8942](https://github.com/patternfly/patternfly-react/issues/8942)) ([67827a8](https://github.com/patternfly/patternfly-react/commit/67827a8753c41ed01c4e2d535751eff8736b261d))

# 5.0.0-alpha.32 (2023-04-27)

### Features

- **ExpandableSection:** Add event to onToggle ([#8991](https://github.com/patternfly/patternfly-react/issues/8991)) ([29c781c](https://github.com/patternfly/patternfly-react/commit/29c781c5a4105d565ba316197e20c7bf1588eb04))
- **FileUpload:** added event params to callbacks ([#8960](https://github.com/patternfly/patternfly-react/issues/8960)) ([10f0316](https://github.com/patternfly/patternfly-react/commit/10f0316f2ceca984a2277d568c62d39aa5ff9833))

# [5.0.0-alpha.31](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@5.0.0-alpha.30...@patternfly/react-integration@5.0.0-alpha.31) (2023-04-25)

### Bug Fixes

- bump dependencies and remove ssl option ([#8984](https://github.com/patternfly/patternfly-react/issues/8984)) ([f8f77d2](https://github.com/patternfly/patternfly-react/commit/f8f77d232b386ad8676af609273d9adff5a5feae))

# [5.0.0-alpha.30](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@5.0.0-alpha.29...@patternfly/react-integration@5.0.0-alpha.30) (2023-04-25)

**Note:** Version bump only for package @patternfly/react-integration

# [5.0.0-alpha.29](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@5.0.0-alpha.28...@patternfly/react-integration@5.0.0-alpha.29) (2023-04-24)

**Note:** Version bump only for package @patternfly/react-integration

# [5.0.0-alpha.28](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@5.0.0-alpha.27...@patternfly/react-integration@5.0.0-alpha.28) (2023-04-20)

### Bug Fixes

- **Radio:** updated param order for onChange ([#8965](https://github.com/patternfly/patternfly-react/issues/8965)) ([f32e4ab](https://github.com/patternfly/patternfly-react/commit/f32e4abac9ed1b49a3d98f733a81111dbfb47074))

# 5.0.0-alpha.27 (2023-04-19)

### Features

- **Modal:** added event to onClose ([#8956](https://github.com/patternfly/patternfly-react/issues/8956)) ([7bc88b4](https://github.com/patternfly/patternfly-react/commit/7bc88b4dc18ed374c755752a2cc246d36c22dcc4))

# [5.0.0-alpha.26](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@5.0.0-alpha.25...@patternfly/react-integration@5.0.0-alpha.26) (2023-04-17)

**Note:** Version bump only for package @patternfly/react-integration

# 5.0.0-alpha.25 (2023-04-14)

**Note:** Version bump only for package @patternfly/react-integration

# 5.0.0-alpha.24 (2023-04-13)

### Bug Fixes

- general clean up ([#8944](https://github.com/patternfly/patternfly-react/issues/8944)) ([7a6ea59](https://github.com/patternfly/patternfly-react/commit/7a6ea59c7b029cd5ffe22117fa81706c28feadfe))

# 5.0.0-alpha.23 (2023-04-11)

### Features

- **Select:** Deprecated old select and promoted select next ([#8825](https://github.com/patternfly/patternfly-react/issues/8825)) ([6fd4eeb](https://github.com/patternfly/patternfly-react/commit/6fd4eeb85fbe88ab427737138470226f38442318))

# 5.0.0-alpha.22 (2023-04-10)

### Features

- **Menu:** match css structure ([#8820](https://github.com/patternfly/patternfly-react/issues/8820)) ([9b64ccf](https://github.com/patternfly/patternfly-react/commit/9b64ccfc525580aefd05b9468eb43c0c3dea3fd3))

# [5.0.0-alpha.21](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@5.0.0-alpha.20...@patternfly/react-integration@5.0.0-alpha.21) (2023-04-07)

### Bug Fixes

- **Table:** rename TdSelectType 'disable' prop to 'isDisabled' ([#8861](https://github.com/patternfly/patternfly-react/issues/8861)) ([5685e0e](https://github.com/patternfly/patternfly-react/commit/5685e0eb1847f8426d27af175f980b6205763a5a))

# 5.0.0-alpha.20 (2023-04-06)

**Note:** Version bump only for package @patternfly/react-integration

# [5.0.0-alpha.19](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@5.0.0-alpha.18...@patternfly/react-integration@5.0.0-alpha.19) (2023-04-05)

### Features

- **FormGroup:** use HelperText ([#8810](https://github.com/patternfly/patternfly-react/issues/8810)) ([08f5e8c](https://github.com/patternfly/patternfly-react/commit/08f5e8cd6366228f583cabcc628cad1ed704477a))

# [5.0.0-alpha.18](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@5.0.0-alpha.17...@patternfly/react-integration@5.0.0-alpha.18) (2023-04-05)

### Features

- **Page:** Deprecate PageHeader component ([#8854](https://github.com/patternfly/patternfly-react/issues/8854)) ([57b0843](https://github.com/patternfly/patternfly-react/commit/57b084310a7e822848950bcebcfbf5821fe254d5))

# 5.0.0-alpha.17 (2023-04-05)

**Note:** Version bump only for package @patternfly/react-integration

# [5.0.0-alpha.16](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@5.0.0-alpha.15...@patternfly/react-integration@5.0.0-alpha.16) (2023-04-03)

**Note:** Version bump only for package @patternfly/react-integration

# 5.0.0-alpha.15 (2023-03-27)

**Note:** Version bump only for package @patternfly/react-integration

# 5.0.0-alpha.14 (2023-03-24)

### Features

- **Dropdown:** deprecated old and promoted Next ([#8835](https://github.com/patternfly/patternfly-react/issues/8835)) ([d43cf24](https://github.com/patternfly/patternfly-react/commit/d43cf2427dc9ea1ddb2381284f05276aa2c7cdb7))

# [5.0.0-alpha.13](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@5.0.0-alpha.12...@patternfly/react-integration@5.0.0-alpha.13) (2023-03-23)

**Note:** Version bump only for package @patternfly/react-integration

# 5.0.0-alpha.12 (2023-03-23)

**Note:** Version bump only for package @patternfly/react-integration

# 5.0.0-alpha.11 (2023-03-20)

**Note:** Version bump only for package @patternfly/react-integration

# [5.0.0-alpha.10](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@5.0.0-alpha.9...@patternfly/react-integration@5.0.0-alpha.10) (2023-03-18)

**Note:** Version bump only for package @patternfly/react-integration

# [5.0.0-alpha.9](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@5.0.0-alpha.8...@patternfly/react-integration@5.0.0-alpha.9) (2023-03-17)

**Note:** Version bump only for package @patternfly/react-integration

# 5.0.0-alpha.8 (2023-03-17)

### Features

- **OverflowMenu:** Use next dropdown and dropdownItems ([#8359](https://github.com/patternfly/patternfly-react/issues/8359)) ([d356f4a](https://github.com/patternfly/patternfly-react/commit/d356f4a3f5853313764bd77fd6e02163b81378d7))

# 5.0.0-alpha.7 (2023-03-13)

- EmptyState component cleanup to match core implementation (#8737) ([40dd9ad](https://github.com/patternfly/patternfly-react/commit/40dd9ad4b2ab32887c2f72a10eb78f2c4ee5ac4b)), closes [#8737](https://github.com/patternfly/patternfly-react/issues/8737) [#8555](https://github.com/patternfly/patternfly-react/issues/8555)

### BREAKING CHANGES

- closes #8555, fixes #8455

- docs(EmptyState): updated examples

updated examples of EmptyState usage on the PatternFly web to use new API

# 5.0.0-alpha.6 (2023-03-09)

### Features

- **Card:** Refactor card header ([#8759](https://github.com/patternfly/patternfly-react/issues/8759)) ([387da19](https://github.com/patternfly/patternfly-react/commit/387da198847fb06c7583a8e2fc6eb808c2a02ba2))

# [5.0.0-alpha.5](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@5.0.0-alpha.4...@patternfly/react-integration@5.0.0-alpha.5) (2023-03-07)

### Bug Fixes

- **Popover:** Refactor popover header ([#8774](https://github.com/patternfly/patternfly-react/issues/8774)) ([aede226](https://github.com/patternfly/patternfly-react/commit/aede2260822575d150060b44469df2fa10ba1667))

# [5.0.0-alpha.4](https://github.com/patternfly/patternfly-react/compare/@patternfly/react-integration@5.0.0-alpha.3...@patternfly/react-integration@5.0.0-alpha.4) (2023-03-04)

### Features

- **Label:** truncate by default ([#8771](https://github.com/patternfly/patternfly-react/issues/8771)) ([df52d2d](https://github.com/patternfly/patternfly-react/commit/df52d2d3c8eaee1dab13c25c6c021dafda84f76d))

# 5.0.0-alpha.3 (2023-03-03)

### Bug Fixes

- **Chip/Label:** update structure to work with core updates ([#8773](https://github.com/patternfly/patternfly-react/issues/8773)) ([b44e4e9](https://github.com/patternfly/patternfly-react/commit/b44e4e98a73442eebdacddee2bae38c42728bde5))

# 5.0.0-alpha.2 (2023-03-02)

### Bug Fixes

- **core:** update core to alpha.24 ([#8768](https://github.com/patternfly/patternfly-react/issues/8768)) ([6dd5e01](https://github.com/patternfly/patternfly-react/commit/6dd5e01e16bc94fe4b954b79ba67adaaab9c7135))

# 5.0.0-alpha.1 (2023-03-01)

### Bug Fixes

- **demo-app:** bump react-core version ([bcf6de6](https://github.com/patternfly/patternfly-react/commit/bcf6de6ffa2a6fa606d6f00b13123e049f9ca7f0))
- **integration:** update package.json ([#8763](https://github.com/patternfly/patternfly-react/issues/8763)) ([c493100](https://github.com/patternfly/patternfly-react/commit/c493100a8e96ab6b51c52a9aadeaa6c26b16d5ec))

### Features

- **ApplicationLauncher:** added event param to callbacks ([#8756](https://github.com/patternfly/patternfly-react/issues/8756)) ([125a002](https://github.com/patternfly/patternfly-react/commit/125a002ebd24be4550ae537d5f571b73ea0e3027))
- **Checkbox:** changed order of onChange params ([#8750](https://github.com/patternfly/patternfly-react/issues/8750)) ([0a87f55](https://github.com/patternfly/patternfly-react/commit/0a87f554e4cf3abb99de8f2ccd53737f0cf489b1))
