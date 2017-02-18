/**
 */
package plugins;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.PluginResult;
import org.apache.cordova.PluginResult.Status;
import org.json.JSONObject;
import org.json.JSONArray;
import org.json.JSONException;

import android.util.Log;

public class PluginTemplate extends CordovaPlugin {
  private static final String TAG = "PluginTemplate";

  public void initialize(CordovaInterface cordova, CordovaWebView webView) {
    super.initialize(cordova, webView);
    Log.d(TAG, "Initializing PluginTemplate");
  }

  public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
    if(action.equals("sayHello")) {
      String words = args.getString(0);
      // Echo back the first argument
      Log.d(TAG, words);
      final PluginResult result = new PluginResult(PluginResult.Status.OK, "I am native!");
      callbackContext.sendPluginResult(result);
    }
    return true;
  }
}
