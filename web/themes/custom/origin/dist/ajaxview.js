"use strict";!function(s,n){n.behaviors.ajaxViewLoading={},n.behaviors.ajaxViewLoading.xhr=null,n.behaviors.ajaxViewLoading.ajaxContainer="",n.behaviors.ajaxViewLoading.ajaxPath="",n.behaviors.ajaxViewLoading.params="",n.behaviors.ajaxViewLoading.urlParams="",n.behaviors.ajaxViewLoading.filterForm=s(".filterform"),n.behaviors.ajaxViewLoading.categories=s(".filterform .categories"),n.behaviors.ajaxViewLoading.attach=function(a){var i=n.behaviors.ajaxViewLoading;s(".ajax-list-container",a).once("ajaxViewLoading").each(function(){i.ajaxContainer=s(this),i.ajaxPath=i.ajaxContainer.attr("data-ajax-path"),i.params=i.ajaxContainer.data("default-params"),""!==window.location.hash&&i.updateParamsFromHash(),i.displayList(i.ajaxContainer,i.ajaxPath,i.params),s(window).off("hashchange.form-fragment").on("hashchange",function(){i.updateParamsFromHash(),i.displayList(i.ajaxContainer,i.ajaxPath,i.params)})})},n.behaviors.ajaxViewLoading.updateParamsFromHash=function(){var e=n.behaviors.ajaxViewLoading,a=window.location.hash.substring(2).split("/");s.each(a,function(a,i){i=i.split("=");e.params[i[0]]=i[1]})},n.behaviors.ajaxViewLoading.updateFilters=function(a){var i,e,r=n.behaviors.ajaxViewLoading,o=s(".filterform .from-date"),t=s(".filterform .to-date");0<o.length&&0<t.length&&(i=a.from.split("-"),e=a.to.split("-"),o.val(Date.parse(i[1]+"-"+i[0]+"-"+i[2]).toString("MMM d, yyyy")),t.val(Date.parse(e[1]+"-"+e[0]+"-"+e[2]).toString("MMM d, yyyy"))),0<r.categories.length&&(e=void 0,e="All"!==a.category?a.category:"All",r.categories.val(e).blur().dropdown("update"))},n.behaviors.ajaxViewLoading.createUrlParams=function(a){var e=n.behaviors.ajaxViewLoading;e.urlParams="?";var r=Object.keys(a),o=Object.values(a);s.each(r,function(a,i){e.urlParams+=i+"="+o[a],a!==r.length-1&&(e.urlParams+="&")})},n.behaviors.ajaxViewLoading.displayList=function(i,a,e){var r=n.behaviors.ajaxViewLoading,o="";i.html("").removeClass("loaded"),r.updateFilters(e),r.createUrlParams(e),r.xhr=s.ajax({type:"POST",url:a+r.urlParams+"&response_type=ajax",success:function(a){o=0<s(a).find(".view-empty").length?'<div class="no-results m-t-2">'+s(a).find(".view-empty").html()+"</div>":s(a).find(".view-content").html();a=s("<div/>",{class:"wrapper"});a.html('<div class="block block-system block-system-main-block">'+o+"</div>"),i.html(a),i.addClass("loaded"),n.attachBehaviors()}})}}(jQuery,Drupal);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFqYXh2aWV3LmpzIl0sIm5hbWVzIjpbIiQiLCJEcnVwYWwiLCJhamF4Vmlld0xvYWRpbmdTY3JpcHQiLCJiZWhhdmlvcnMiLCJhamF4Vmlld0xvYWRpbmciLCJ4aHIiLCJhamF4UGF0aCIsImFqYXhDb250YWluZXIiLCJwYXJhbXMiLCJ1cmxQYXJhbXMiLCJjYXRlZ29yaWVzIiwiY29udGV4dCIsImF0dGFjaCIsIm9uY2UiLCJlYWNoIiwiYXR0ciIsIl9vYmoiLCJkYXRhIiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwidXBkYXRlUGFyYW1zRnJvbUhhc2giLCJkaXNwbGF5TGlzdCIsIm9mZiIsIm9uIiwiaGFzaEFycmF5IiwidmFsdWVBcnJheSIsInZhbHVlIiwic3Vic3RyaW5nIiwic3BsaXQiLCJ1cGRhdGVGaWx0ZXJzIiwidG9TZWxlY3QiLCJmcm9tU2VsZWN0IiwiRGF0ZSIsImZyb20iLCJjYXRlZ29yeSIsImxlbmd0aCIsInRvIiwidmFsIiwicGFyc2UiLCJ0b1N0cmluZyIsImNyZWF0ZVVybFBhcmFtcyIsIk9iamVjdCIsImtleXMiLCJ2YWx1ZXMiLCIkcGFyYW1zIiwiYmx1ciIsImRyb3Bkb3duIiwiaW5kZXgiLCJhamF4IiwiJGNvbnRhaW5lciIsIiRwYXRoIiwiY2xhc3MiLCJodG1sIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInVybCIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJmaW5kIiwid3JhcHBlciIsImF0dGFjaEJlaGF2aW9ycyIsImpRdWVyeSJdLCJtYXBwaW5ncyI6ImNBQUMsU0FBZ0NBLEVBQUdDLEdBQW5DQSxFQUFTQyxVQUFBQSxnQkFBMEJELEdBRWhDQSxFQUFPRSxVQUFVQyxnQkFBa0JDLElBQW5DLEtBQ0FKLEVBQU9FLFVBQVVDLGdCQUFnQkMsY0FBWSxHQUU3Q0osRUFBT0UsVUFBVUMsZ0JBQWdCRSxTQUFXLEdBRDVDTCxFQUFPRSxVQUFVQyxnQkFBZ0JHLE9BQUFBLEdBQ2pDTixFQUFPRSxVQUFVQyxnQkFBZ0JFLFVB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QUFLLGVBQWV2QixPQUN0QixpQ0FBbUNwQyxFQUFFMEQsR0FBUUMsS0FBSyxlQUFlTixPQUFTLFNBRTFFckQsRUFBRTBELEdBQVFDLEtBQUssaUJBQWlCTixPQUd2Q08sRUFBVTVELEVBQUUsU0FBVSxDQUFFb0QsTUFBTyxZQUNuQ1EsRUFBUVAsS0FBSywyREFBNkRBLEVBQU8sVUFDakZILEVBQVdHLEtBQUtPLEdBQ2hCVixFQUFXSSxTQUFTLFVBQ3BCckQsRUFBTzRELHNCQS9JdEIsQ0E2SkNDLE9BQVE3RCIsImZpbGUiOiJhamF4dmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBhamF4Vmlld0xvYWRpbmdTY3JpcHQgKCQsIERydXBhbCkge1xuXG4gICAgRHJ1cGFsLmJlaGF2aW9ycy5hamF4Vmlld0xvYWRpbmcgPSB7fTtcbiAgICBEcnVwYWwuYmVoYXZpb3JzLmFqYXhWaWV3TG9hZGluZy54aHIgPSBudWxsOyAvLyBhamF4IGNhbGxcbiAgICBEcnVwYWwuYmVoYXZpb3JzLmFqYXhWaWV3TG9hZGluZy5hamF4Q29udGFpbmVyID0gJyc7XG4gICAgRHJ1cGFsLmJlaGF2aW9ycy5hamF4Vmlld0xvYWRpbmcuYWpheFBhdGggPSAnJztcbiAgICBEcnVwYWwuYmVoYXZpb3JzLmFqYXhWaWV3TG9hZGluZy5wYXJhbXMgPSAnJztcbiAgICBEcnVwYWwuYmVoYXZpb3JzLmFqYXhWaWV3TG9hZGluZy51cmxQYXJhbXMgPSAnJztcbiAgICBEcnVwYWwuYmVoYXZpb3JzLmFqYXhWaWV3TG9hZGluZy5maWx0ZXJGb3JtID0gJCgnLmZpbHRlcmZvcm0nKTtcbiAgICBEcnVwYWwuYmVoYXZpb3JzLmFqYXhWaWV3TG9hZGluZy5jYXRlZ29yaWVzID0gJChcIi5maWx0ZXJmb3JtIC5jYXRlZ29yaWVzXCIpO1xuXG4gICAgRHJ1cGFsLmJlaGF2aW9ycy5hamF4Vmlld0xvYWRpbmcuYXR0YWNoID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcblxuICAgICAgICBsZXQgX29iaiA9IERydXBhbC5iZWhhdmlvcnMuYWpheFZpZXdMb2FkaW5nO1xuXG4gICAgICAgICQoJy5hamF4LWxpc3QtY29udGFpbmVyJywgY29udGV4dCkub25jZSgnYWpheFZpZXdMb2FkaW5nJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIF9vYmouYWpheENvbnRhaW5lciA9ICQodGhpcyk7XG4gICAgICAgICAgICBfb2JqLmFqYXhQYXRoID0gX29iai5hamF4Q29udGFpbmVyLmF0dHIoJ2RhdGEtYWpheC1wYXRoJyk7XG4gICAgICAgICAgICBfb2JqLnBhcmFtcyA9IF9vYmouYWpheENvbnRhaW5lci5kYXRhKCdkZWZhdWx0LXBhcmFtcycpO1xuXG4gICAgICAgICAgICAvLyBJZiBoYXNoIGhhcyBiZWVuIHByb3ZpZGVkLCB1cGRhdGUgdXJsXG4gICAgICAgICAgICBpZih3aW5kb3cubG9jYXRpb24uaGFzaCAhPT0gJycpe1xuICAgICAgICAgICAgICAgIF9vYmoudXBkYXRlUGFyYW1zRnJvbUhhc2goKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRGlzcGxheSBsaXN0XG4gICAgICAgICAgICBfb2JqLmRpc3BsYXlMaXN0KF9vYmouYWpheENvbnRhaW5lciwgX29iai5hamF4UGF0aCwgX29iai5wYXJhbXMpO1xuXG4gICAgICAgICAgICAvLyBPbiBoYXNoIGNoYW5nZSwgdXBkYXRlIHBhcmFtcywgcmVsb2FkIGxpc3RcbiAgICAgICAgICAgICQod2luZG93KS5vZmYoJ2hhc2hjaGFuZ2UuZm9ybS1mcmFnbWVudCcpLm9uKCdoYXNoY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgX29iai51cGRhdGVQYXJhbXNGcm9tSGFzaCgpO1xuICAgICAgICAgICAgICAgIF9vYmouZGlzcGxheUxpc3QoX29iai5hamF4Q29udGFpbmVyLCBfb2JqLmFqYXhQYXRoLCBfb2JqLnBhcmFtcyk7XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuXG4gICAgRHJ1cGFsLmJlaGF2aW9ycy5hamF4Vmlld0xvYWRpbmcudXBkYXRlUGFyYW1zRnJvbUhhc2ggPSBmdW5jdGlvbiAoKXtcblxuICAgICAgICBsZXQgX29iaiA9IERydXBhbC5iZWhhdmlvcnMuYWpheFZpZXdMb2FkaW5nO1xuICAgICAgICBsZXQgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuXG4gICAgICAgIC8vIFNwbGl0IGhhc2ggaW50byBhcnJheSBvZiB2YWx1ZXNcbiAgICAgICAgbGV0IGhhc2hBcnJheSA9IGhhc2guc3Vic3RyaW5nKDIpLnNwbGl0KCcvJyk7XG5cbiAgICAgICAgJC5lYWNoKGhhc2hBcnJheSwgZnVuY3Rpb24oaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgICAgICAvLyBGb3IgZWFjaCB2YWx1ZSBzcGxpdCBpbnRvIGtleSA9PiB2YWx1ZSBhcnJheVxuICAgICAgICAgICAgbGV0IHZhbHVlQXJyYXkgPSB2YWx1ZS5zcGxpdCgnPScpO1xuICAgICAgICAgICAgLy8gQWRkL292ZXJyaWRlIGRlZmF1bHRQYXJhbXMgb2JqZWN0XG4gICAgICAgICAgICBfb2JqLnBhcmFtc1t2YWx1ZUFycmF5WzBdXSA9IHZhbHVlQXJyYXlbMV07XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuXG4gICAgRHJ1cGFsLmJlaGF2aW9ycy5hamF4Vmlld0xvYWRpbmcudXBkYXRlRmlsdGVycyA9IGZ1bmN0aW9uIChwYXJhbXMpe1xuXG4gICAgICAgIGxldCBfb2JqID0gRHJ1cGFsLmJlaGF2aW9ycy5hamF4Vmlld0xvYWRpbmc7XG5cbiAgICAgICAgLy8gSGFuZGxlIGRhdGUgaWYgZXhpc3RzXG4gICAgICAgIGxldCBmcm9tU2VsZWN0ID0gJChcIi5maWx0ZXJmb3JtIC5mcm9tLWRhdGVcIik7XG4gICAgICAgIGxldCB0b1NlbGVjdCA9ICQoXCIuZmlsdGVyZm9ybSAudG8tZGF0ZVwiKTtcblxuICAgICAgICBpZihmcm9tU2VsZWN0Lmxlbmd0aCA+IDAgJiYgdG9TZWxlY3QubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBsZXQgZnJvbSA9IHBhcmFtcy5mcm9tLnNwbGl0KCctJyk7XG4gICAgICAgICAgICBsZXQgdG8gPSBwYXJhbXMudG8uc3BsaXQoJy0nKTtcblxuICAgICAgICAgICAgLy8gVXBkYXRlcyBGaWx0ZXJzIFZhbHVlIG9uIFBhZ2VcbiAgICAgICAgICAgIGZyb21TZWxlY3QudmFsKERhdGUucGFyc2UoZnJvbVsxXSArICctJyArIGZyb21bMF0gKyAnLScgKyBmcm9tWzJdKS50b1N0cmluZygnTU1NIGQsIHl5eXknKSk7XG4gICAgICAgICAgICB0b1NlbGVjdC52YWwoRGF0ZS5wYXJzZSh0b1sxXSArICctJyArIHRvWzBdICsgJy0nICsgdG9bMl0pLnRvU3RyaW5nKCdNTU0gZCwgeXl5eScpKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gSGFuZGxlIGNhdGVnb3J5IGlmIGV4aXN0c1xuICAgICAgICBpZihfb2JqLmNhdGVnb3JpZXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBsZXQgY2F0ZWdvcnk7XG5cbiAgICAgICAgICAgIGlmKHBhcmFtcy5jYXRlZ29yeSAhPT0gJ0FsbCcpe1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5ID0gcGFyYW1zLmNhdGVnb3J5O1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkgPSAnQWxsJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXBkYXRlcyBGaWx0ZXJzIFZhbHVlIG9uIFBhZ2VcbiAgICAgICAgICAgIF9vYmouY2F0ZWdvcmllcy52YWwoY2F0ZWdvcnkpLmJsdXIoKS5kcm9wZG93bihcInVwZGF0ZVwiKTtcbiAgICAgICAgfVxuXG5cbiAgICB9O1xuXG5cbiAgICBEcnVwYWwuYmVoYXZpb3JzLmFqYXhWaWV3TG9hZGluZy5jcmVhdGVVcmxQYXJhbXMgPSBmdW5jdGlvbiAoJHBhcmFtcyl7XG5cbiAgICAgICAgbGV0IF9vYmogPSBEcnVwYWwuYmVoYXZpb3JzLmFqYXhWaWV3TG9hZGluZztcbiAgICAgICAgX29iai51cmxQYXJhbXMgPSAnPyc7XG5cbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKCRwYXJhbXMpO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKCRwYXJhbXMpO1xuXG4gICAgICAgICQuZWFjaChrZXlzLCBmdW5jdGlvbihpbmRleCwgdmFsdWUpe1xuICAgICAgICAgICAgX29iai51cmxQYXJhbXMgKz0gdmFsdWUgKyAnPScgKyB2YWx1ZXNbaW5kZXhdO1xuICAgICAgICAgICAgaWYoaW5kZXggIT09IGtleXMubGVuZ3RoIC0gMSl7XG4gICAgICAgICAgICAgICAgX29iai51cmxQYXJhbXMgKz0gJyYnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuXG4gICAgRHJ1cGFsLmJlaGF2aW9ycy5hamF4Vmlld0xvYWRpbmcuZGlzcGxheUxpc3QgPSBmdW5jdGlvbiAoJGNvbnRhaW5lciwgJHBhdGgsICRwYXJhbXMpe1xuXG4gICAgICAgIGxldCBfb2JqID0gRHJ1cGFsLmJlaGF2aW9ycy5hamF4Vmlld0xvYWRpbmc7XG4gICAgICAgIGxldCBodG1sID0gJyc7XG5cbiAgICAgICAgLy8gSGFuZGxlIGNsYXNzIGZvciBsb2FkaW5nIGljb25cbiAgICAgICAgJGNvbnRhaW5lci5odG1sKCcnKS5yZW1vdmVDbGFzcygnbG9hZGVkJyk7XG5cbiAgICAgICAgLy8gVXBkYXRlIEZpbHRlcnNcbiAgICAgICAgX29iai51cGRhdGVGaWx0ZXJzKCRwYXJhbXMpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBVUkwgUGFyYW1zXG4gICAgICAgIF9vYmouY3JlYXRlVXJsUGFyYW1zKCRwYXJhbXMpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygkcGF0aCArIF9vYmoudXJsUGFyYW1zKTtcblxuICAgICAgICBfb2JqLnhociA9ICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICB1cmw6ICRwYXRoICsgX29iai51cmxQYXJhbXMgKyAnJnJlc3BvbnNlX3R5cGU9YWpheCcsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcblxuICAgICAgICAgICAgICAgIGlmKCQocmVzdWx0KS5maW5kKCcudmlldy1lbXB0eScpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICBodG1sID0gJzxkaXYgY2xhc3M9XCJuby1yZXN1bHRzIG0tdC0yXCI+JyArICQocmVzdWx0KS5maW5kKCcudmlldy1lbXB0eScpLmh0bWwoKSArICc8L2Rpdj4nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGh0bWwgPSAkKHJlc3VsdCkuZmluZCgnLnZpZXctY29udGVudCcpLmh0bWwoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9ICQoXCI8ZGl2Lz5cIiwgeyBjbGFzczogJ3dyYXBwZXInIH0pO1xuICAgICAgICAgICAgICAgIHdyYXBwZXIuaHRtbCgnPGRpdiBjbGFzcz1cImJsb2NrIGJsb2NrLXN5c3RlbSBibG9jay1zeXN0ZW0tbWFpbi1ibG9ja1wiPicgKyBodG1sICsgJzwvZGl2PicpO1xuICAgICAgICAgICAgICAgICRjb250YWluZXIuaHRtbCh3cmFwcGVyKTtcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyLmFkZENsYXNzKCdsb2FkZWQnKTtcbiAgICAgICAgICAgICAgICBEcnVwYWwuYXR0YWNoQmVoYXZpb3JzKCk7XG5cbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCRwYXRoKyc/cmVzcG9uc2VfdHlwZT1hamF4Jyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuXG59KGpRdWVyeSwgRHJ1cGFsKSk7XG4iXX0=