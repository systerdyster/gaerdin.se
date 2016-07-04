using gaerdin_se.Business.Definitions;
using NicBell.UCreate.Attributes;
using NicBell.UCreate.Constants;
using Umbraco.Core.Models;

namespace gaerdin_se.Models.DocTypes
{
    [DocType(Name = "Start",
        Icon = "icon-zip color-blue",
        AllowedAsRoot = true,
        AllowedTemplates = new[] { "StartPage" },
        DefaultTemplate = "StartPage")]
    public class StartPageType : MasterPageType
    {
        public StartPageType(IPublishedContent content) : base(content)
        {
        }

        [Property(
            Alias = "pageIntro",
            TypeName = PropertyTypes.Textarea,
            Description = "",
            Mandatory = false,
            TabName = TabNames.Content)]
        public string PageIntro { get; set; }


        [Property(
            Alias = "pageBody",
            TypeName = PropertyTypes.Richtexteditor,
            Description = "",
            Mandatory = false,
            TabName = TabNames.Content)]
        public string PageBody { get; set; }


        [Property(
            Alias = "blogArchive",
            TypeName = PropertyTypes.ContentPicker,
            Description = "",
            Mandatory = false,
            TabName = TabNames.Content)]
        public string BlogArchive { get; set; }
    }
}