#import "PluginTemplate.h"

#import <Cordova/CDVAvailability.h>

@implementation PluginTemplate

- (void)pluginInitialize {
    //add observer or initialize here
}

- (void)sayHello:(CDVInvokedUrlCommand *)command {

    NSString* words = [command.arguments objectAtIndex:0];
    NSLog(@"*******js says: %@", words);

    NSString* echo = @"I am native!";
    CDVPluginResult *result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:echo];
    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}

@end
