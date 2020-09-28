function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

async function loginOpenshift({ page, data }) {
  const user = "kubeadmin";
  const pass = "ucuUZ-corPs-IJJ5X-viMTB";
  const url = data.prefix;
  console.log(`nav to ${url}`);
  await page.goto(`${url}`, { waitUntil: "load" });
  if (page.url().indexOf("oauth-openshift") > -1) {
    console.log("have to auth first");
    await page.waitForSelector("#inputUsername");
    await page.type("#inputUsername", user);
    await page.type("#inputPassword", pass);
    await page.click("button.pf-c-button");
    await page.waitForNavigation();
    await delay(1000);
    console.log("finished auth");
  }
}

async function waitForOs(page) {
  // there should be no loading spinner
  await page.waitForSelector(".co-m-loader", {
    hidden: true,
  });

  // there should be no skeleton text
  await page.waitForSelector("[class*='skeleton']", {
    hidden: true,
    timeout: 60000,
  });

  // content should have something in it
  await page.waitForSelector("#content-scrollable > *");

  // if that content has a loading spinner wait for it as well
  await page.waitForSelector(".co-m-loader", {
    hidden: true,
  });
}

module.exports = {
  prefix: "https://console-openshift-console.apps.ocp4.patternfly.org",
  auth: loginOpenshift,
  waitFor: waitForOs,
  crawl: false,
  urls: [
    "/dashboards",
    {
      url: "/k8s/cluster/projects",
      afterNav: async (page) => {
        await page.waitForSelector(".co-m-resource-project");
      },
    },
    "/k8s/cluster/projects/default",
    "/search/ns/default",
    "/api-explorer",
    "/api-resource/cluster/core~v1~Namespace",
    "/api-resource/cluster/core~v1~Namespace/schema",
    "/api-resource/cluster/core~v1~Namespace/instances",
    "/api-resource/cluster/core~v1~Namespace/access",
    "/k8s/ns/default/events",
    "/operatorhub/ns/default",
    "/operatorhub/ns/default?details-item=3scale-community-operator-community-operators-openshift-marketplace",
    "/k8s/ns/default/operators.coreos.com~v1alpha1~ClusterServiceVersion",
    "/k8s/ns/default/pods",
    "/k8s/ns/default/pods/~new",
    "/k8s/ns/default/deployments",
    "/k8s/ns/default/deployments/~new",
    "/k8s/ns/default/deploymentconfigs",
    "/k8s/ns/default/deploymentconfigs/~new",
    "/k8s/ns/default/statefulsets",
    "/k8s/ns/default/statefulsets/~new",
    "/k8s/ns/default/secrets",
    "/k8s/ns/default/secrets/builder-token-pdzbp",
    "/k8s/ns/default/secrets/builder-token-pdzbp/yaml",
    "/k8s/ns/default/configmaps",
    "/k8s/ns/default/configmaps/nginx-1-ca",
    "/k8s/ns/default/configmaps/nginx-1-ca/yaml",
    "/k8s/ns/default/cronjobs",
    "/k8s/ns/default/cronjobs/~new",
    "/k8s/ns/default/jobs",
    "/k8s/ns/default/jobs/~new",
    "/k8s/ns/default/daemonsets",
    "/k8s/ns/default/daemonsets/~new",
    "/k8s/ns/default/replicasets",
    "/k8s/ns/default/replicasets/~new",
    "/k8s/ns/default/replicationcontrollers",
    "/k8s/ns/default/replicationcontrollers/~new",
    "/k8s/ns/default/horizontalpodautoscalers",
    "/k8s/ns/default/horizontalpodautoscalers/~new",
    "/k8s/ns/default/services",
    "/k8s/ns/default/services/kubernetes",
    "/k8s/ns/default/services/kubernetes/yaml",
    "/k8s/ns/default/services/kubernetes/pods",
  ],
};
