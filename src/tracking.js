// @flow

import 'autotrack'

const ga = window.ga

ga('create', 'UA-102031443-1', 'auto')

ga('require', 'cleanUrlTracker')
ga('require', 'eventTracker')
ga('require', 'impressionTracker')
ga('require', 'maxScrollTracker')
ga('require', 'mediaQueryTracker')
ga('require', 'outboundFormTracker')
ga('require', 'outboundLinkTracker')
ga('require', 'pageVisibilityTracker')
ga('require', 'socialWidgetTracker')
ga('require', 'urlChangeTracker')

ga('send', 'pageview')
